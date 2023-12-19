import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Authorization = styled.div`
  animation: ${fadeIn} 0.5s;

  position: fixed;
  top: -100px;
  right: 0;
  width: 520px;
  height: 100%;
  margin-top: 100px;
  padding: 20px 35px;
  background-color: rgba(246, 246, 246, 1);
  text-align: center;
  z-index: 999;

  .Heading {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      position: absolute;
      right: 0;
      top: 30%;
      cursor: pointer;
      font-size: 22px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    padding: 60px 5px 25px;
    gap: 20px;

    button {
      font-family: "Noto Sans", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: rgba(255, 255, 255, 1);
      background-color: black;
      border: none;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px 0;
      cursor: pointer;
    }
  }

  .chooseReg {
    position: relative;
    color: rgba(0, 0, 0, 0.68);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .chooseReg::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 10px;
    width: 45%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .chooseReg::before {
    content: "";
    position: absolute;
    right: 5px;
    top: 10px;
    width: 45%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .loginHeading {
    margin-bottom: 60px;
  }

  .title {
    margin: 30px 0 24px;
    font-weight: 700;
    font-size: 22px;
  }
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 5px;

  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      align-self: start;
      font-family: "Noto Sans", sans-serif;
      color: black;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }

    input {
      height: 40px;
      padding-left: 20px;
      background-color: transparent;
      outline: none;
      border: 1px solid black;
      color: rgba(180, 180, 180, 1);
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
    }

    .ResPass {
      font-size: 10px;
      font-weight: 600;
      line-height: 12px;
      color: black;
      text-align: end;
      padding-right: 5px;
    }
  }

  .PasInput {
    position: relative;
    margin-bottom: 50px;
  }

  .marginDel {
    margin-bottom: 0;
  }

  #PasEye {
    position: absolute;
    right: 20px;
    top: 42px;
    cursor: pointer;
  }

  .formButtons {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
        height: 54px;
        font-size: 18px;
        font-weight: 700;
        line:height: 24px;
        color: black;
        border: 1px solid black;
        border-radius: 3px;
        background-color: transparent;
        cursor: pointer;
    }

    button:first-child {
        background-color: black;
        color: white;
    }
  }
`;

export const UserContent = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.6;
`;
