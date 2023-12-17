import footerLogo from "../assets/Footerlogo.png";
import { Link } from "react-router-dom";
import { FooterDiv, Navigation } from "./components";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollToTop from "../hooks/useScrollToTop";

const Footer = () => {
  const { handleClick } = useScrollToTop();
  
  return (
    <FooterDiv>
      <div className="navHeader">
        <Link onClick={handleClick} >
          <img src={footerLogo} alt="Logo" />
        </Link>
        <div className="navMenu">
          <Navigation>
            <li><Link>About Us</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Return Policy</Link></li>
            <li><Link>Privacy Policy</Link></li>
          </Navigation>
        </div>
      </div>
      <div className="socials">
        <Link><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link><FontAwesomeIcon icon={faInstagram} /></Link>
      </div>
    </FooterDiv>
  );
};

export default Footer;
