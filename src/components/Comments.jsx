import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RatesStyle } from "../pages/AllPages";
import useRequest from "../hooks/useRequest";

const Comments = ({ comments }) => {
  const { t } = useTranslation();
  const [showComment, setShowComment] = useState(2);
  const [hideComment, setHideComment] = useState(false);
  const {sendRequest} = useRequest({method: "DELETE",  envVariable: "REACT_APP_COMMENTS"})

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
  }

  return (
    <RatesStyle>
      <div className="commentSection">
        {commentsList.slice(0, showComment).map((comment) => (
          <div className="comments" key={comment.id}>
            <h2>{t("User name")}</h2>
            <p>{comment.text}</p>
            <FontAwesomeIcon onClick={() => deleteComment(comment.id)} icon={faTrash}/>
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
