import "../../style/logo.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="logo-area">
      <img src={logo} alt="Linkodkod Logo" className="logo-img" />
    </div>
  );
}

export default Logo;