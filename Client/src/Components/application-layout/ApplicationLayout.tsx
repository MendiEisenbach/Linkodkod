import "../../style/applicationLayout.css";
import Logo from "./Logo";
import Slogan from "./Slogan";
import { Link } from "react-router-dom";
import type { PropsWithChildren } from "react";

function ApplicationLayout(props: PropsWithChildren) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Logo />
        <Slogan />
        <nav className="navbar">
          <Link to="/">Home</Link>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default ApplicationLayout;
