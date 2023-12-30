import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollToTop from "../../hooks/useScrollToTop";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { UsersContent } from "./UserInformation";

const UserButtonsMobile = ({ goBack }) => {
  const { handleClick } = useScrollToTop("smooth");

  return (
    <UsersContent>
      <div>
        <div onClick={goBack}>
          <FontAwesomeIcon style={styles.svg} icon={faUserCircle} />
        </div>
      </div>
      <div onClick={handleClick}>
        <Link to="/favorites">
          <FontAwesomeIcon style={styles.svg} icon={faHeart} />
        </Link>
      </div>
    </UsersContent>
  );
};

export default UserButtonsMobile;

const styles = {
  svg: {
    color: "black",
    fontSize: "20px",
    marginTop: "5px",
  },
};
