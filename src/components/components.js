import styled from "styled-components";

// Header Style

export const HeaderBg = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(240, 250, 250, 1),
    rgba(223, 223, 223, 1)
  );
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: 0.3s ease;
  z-index: 999;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;

  a {
    color: black;
    transition: 0.3s ease;

    &:hover {
      color: brown;
    }
  }
`;

export const Parameters = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  form {
    position: relative;

    input {
      width: 230px;
      height: 32px;
      border-radius: 30px;
      border: 1px solid rgba(0, 0, 0, 1);
      color: rgba(0, 0, 0, 1);
      outline: none;
      padding: 5px 15px;
      background-color: transparent;
      transition: 0.3s ease;
    }

    input::placeholder {
      color: rgba(0, 0, 0, 1);
    }

    svg {
      position: absolute;
      right: 15px;
      top: 8px;
    }
  }

  div {
    display: flex;
    gap: 20px;

    button {
      padding: 2px;
      border-radius: 6px;
      border: 2px solid rgba(0, 0, 0, 1);
      color: var(--text-color, black);
      background-color: transparent;
    }

    svg {
      font-size: 22px;
      width: 22px;
    }
  }

  svg,
  button {
    cursor: pointer;
    transition: 0.3s;
  }

  svg:hover {
    color: brown;
  }

  button:hover {
    color: brown;
    border-color: brown;
  }
`;

export const FooterDiv = styled.div`
  padding-top: 100px;
`;
