import "../../style/applicationLayout.css";
import logo from "../../assets/logo.png";

function ApplicationLayout() {
  return(
    <div className="layout">
      <header className="layout-header">
        <div className="logo-area">
          <img src={logo} alt="Linkodkod logo" className="logo-img" />
        </div>
        <div className="slogan-area">
          <p >Linkodkod</p>
        </div>
      </header>

      <main className="layout-content">
        <p>posts</p>
      </main>
    </div>
  );
}

export default ApplicationLayout;
