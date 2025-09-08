import "../../style/applicationLayout.css";
import Logo from "./Logo";
import Slogan from "./Slogan";
import type { PropsWithChildren } from "react";

function ApplicationLayout(props : PropsWithChildren) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Logo />
        <Slogan />
      </header>
    {props.children}
    </div>
  );
}

export default ApplicationLayout;
