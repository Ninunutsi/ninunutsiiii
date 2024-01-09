import React, { useState, useRef } from "react";
import { RatesStyle } from "../../pages/AllPages";
import { SubmitButton } from "../components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CommentForm = () => {
  const { t } = useTranslation();
  const [comments, setComments] = useState(["უი რა კაი კაბაა ქალო"]);
  const currentTextareaRef = useRef("");

  const handleChange = (e) => {
    currentTextareaRef.current = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const currentTextareaValue = currentTextareaRef.current.trim();

    if (currentTextareaValue === "") return;

    setComments((prevComments) => [currentTextareaValue, ...prevComments]);

    currentTextareaRef.current = "";
  };

  return (
    <RatesStyle>
      <h1>{t("Rates")}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="Rates">{t("Rate the product")}</label>
        <textarea
          name="Rates"
          id="Rates"
          placeholder={t("Rate")}
          onChange={handleChange}
        />
        <SubmitButton type="submit">{t("Send")}</SubmitButton>
      </form>
      <div className="commentSection">
        {comments.map((comment, index) => (
          <div className="comments" key={index}>
            <h2>{t("User name")}</h2>
            <p>{comment}</p>
          </div>
        ))}
        <Link className="viewMore">
          {t("View more")}
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </div>
    </RatesStyle>
  );
};

export default CommentForm;
