import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactStyle } from "../AllPages";
import { useTranslation } from "react-i18next";

const ContactUsPage = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_88hn9cw",
        "template_zvtywgo",
        form.current,
        "B-uGOjbU4o3JcFiPd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      });
  };

  return (
    <ContactStyle>
      <h1>{t("Contact Information")}</h1>
      <div className="about_info">
        <form ref={form} onSubmit={sendEmail}>
          <label>{t("name")}</label>
          <input type="text" name="user_name" placeholder={t("name")} />
          <label>{t("last name")}</label>
          <input
            type="text"
            name="user_lastName"
            placeholder={t("last name")}
          />
          <label>{t("Email address")}</label>
          <input
            type="email"
            name="user_email"
            placeholder={t("Email address")}
          />
          <label>{t("phone number")}</label>
          <input
            type="text"
            name="user_phone"
            placeholder={t("phone number")}
          />
          <label>{t("message")}</label>
          <textarea name="message" placeholder={t("message")} />
          {loading && "loading . . ."}
          {success && "success"}
          <input type="submit" value={t("Send")} />
        </form>
        <div className="contact_info">
          <div className="contact_about">
            <h2>contact us:</h2>
            <h3>Mariamsatelier@gmail.com</h3>
            <h3>+995 599 999 999</h3>
            <h3>ტყიბული, გამსახურდიას 23</h3>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default ContactUsPage;
