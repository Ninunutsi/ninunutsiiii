import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../components";

const SubmitBtn = ({ name, nav }) => {
  const navigate = useNavigate();
  return (
    <SubmitButton onClick={() => navigate(`/${nav}`)}>{name}</SubmitButton>
  );
};

export default SubmitBtn;
