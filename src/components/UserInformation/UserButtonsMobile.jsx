import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollToTop from "../../hooks/useScrollToTop";
import { faHeart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UsersContent } from "./UserInformation";

const UserButtonsMobile = ({ goBack }) => {
  const { handleClick } = useScrollToTop("smooth");

  return (
    <UsersContent>
      <div>
        <div id="BurgerIcon" onClick={goBack}>
          <FontAwesomeIcon className="BurgerIcon" icon={faUserCircle} />
        </div>
      </div>
      <div onClick={handleClick}>
        <Link to="/favorites">
          <FontAwesomeIcon className="BurgerIcon" icon={faHeart} />
        </Link>
      </div>
    </UsersContent>
  );
};

export default UserButtonsMobile;

// const styles = {
//   svg: {
//     color: "black",
//     fontSize: "20px",
//     marginTop: "5px",

//     "&:hover": {
//       color: "red",
//     }
//   },
// };
