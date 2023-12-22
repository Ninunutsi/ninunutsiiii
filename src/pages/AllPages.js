import styled from "styled-components";
import i18next from "i18next";

const isEnglish = i18next.language === "en";
const FontFamily = isEnglish ? "Helvetica" : "Montserrat";

export const ErrorElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  h1 {
    font-family: ${FontFamily};
    padding-top: 63px;
    font-size: 435px;
    font-weight: 500;
    line-height: 548px;
    margin-bottom: 20px;
  }

  h2 {
    font-family: ${FontFamily};
    font-size: 40px;
    font-weght: 600;
    line-height: 48px;
    margin-bottom: 100px;
  }

  h3 {
    font-family: ${FontFamily};
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }
`;
