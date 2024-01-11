import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RatesStyle } from "../pages/AllPages";
import useRequest from "../hooks/useRequest";

const Comments = ({ comments, resendRequest }) => {
  const { t } = useTranslation();
  const [showComment, setShowComment] = useState(2);
  const [hideComment, setHideComment] = useState(false);
  const [commentMenu, setCommentMenu] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentlyEditingCommentId, setCurrentlyEditingCommentId] =
    useState(null);
  const edittedComment = useRef(null);

  const { sendRequest } = useRequest({
    method: "DELETE",
    envVariable: "REACT_APP_COMMENTS",
  });
  const { sendRequest: sendRequestForEdit } = useRequest({
    method: "PUT",
    envVariable: "REACT_APP_COMMENTS",
  });

  const commentsList =
    comments?.items.map((comment) => {
      return {
        text: comment.userComment,
        id: comment._uuid,
      };
    }) || [];

  const showMoreComments = () => {
    setShowComment((prev) => prev + 5);
    setHideComment(true);
  };

  const hideAllComments = () => {
    setShowComment(2);
    setHideComment(false);
  };

  const deleteComment = (id) => {
    sendRequest(null, `/api/v1/comments/${id}`)
      .then(() => {
        resendRequest();
      })
      .catch((err) => console.log(err));

    setCommentMenu(false);
  };

  const onSubmit = (e, id) => {
    e.preventDefault();
    if (edittedComment.current) {
      const comm = edittedComment.current.value;
      sendRequestForEdit({ userComment: comm }, `/api/v1/comments/${id}`)
        .then(() => {
          resendRequest();
        })
        .catch((err) => console.log(err));
    }

    setEditMode(false);
  };
  return (
    <RatesStyle>
      <div className="commentSection">
        {commentsList.slice(0, showComment).map((comment, index) => (
          <div className="comments" key={comment.id}>
            <div className="comment-sub-section">
              <h2>{t("User name")}</h2>
              <p>{comment.text}</p>
              {editMode && comment.id === currentlyEditingCommentId && (
                <form onSubmit={(e) => onSubmit(e, comment.id)}>
                  <textarea
                    name="commentEdit"
                    id={`commentEdit${index}`}
                    defaultValue={comment.text}
                    ref={edittedComment}
                  />
                  <button type="submit">{t("Send")}</button>
                </form>
              )}
            </div>
            <div>
              <FontAwesomeIcon
                onClick={() => {
                  setCommentMenu((prevState) => !prevState);
                  setCurrentlyEditingCommentId(comment.id);
                }}
                icon={faEllipsisVertical}
              />
            </div>
            {commentMenu && comment.id === currentlyEditingCommentId && (
              <div className="comment-menu">
                <span onClick={() => deleteComment(comment.id)}>
                  {t("delete")}
                </span>
                <span
                  onClick={() => {
                    setEditMode((prevState) => !prevState);
                    setCommentMenu(false);
                  }}
                >
                  {t("edit")}
                </span>
              </div>
            )}
          </div>
        ))}
        <div className="showComments">
          <Link className="viewMore" onClick={showMoreComments}>
            {t("View more")}
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
          {hideComment && (
            <Link className="viewMore" onClick={hideAllComments}>
              {t("Hide all")}
              <FontAwesomeIcon icon={faChevronUp} />
            </Link>
          )}
        </div>
      </div>
    </RatesStyle>
  );
};

export default Comments;
