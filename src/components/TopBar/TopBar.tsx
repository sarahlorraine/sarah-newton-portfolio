import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { mergeClassNames } from "../helpers";

import "./topBar.scss";

import cv from "../../../public/assets/files/cv-sarah-newton.pdf";

const TopBar = () => {
  const [mobileNavActive, setMobileNavActive] = React.useState<boolean>(false);

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (mobileNavActive) setTimeout(() => setMobileNavActive(false), 100);
  };

  return (
    <div
      className={mergeClassNames([
        mobileNavActive && "topBarWrapperActive",
        "topBarWrapper",
      ])}
    >
      <div className="innerContent">
        <Link to="/" className={"logo"}>
          arah Newton
        </Link>
        <div onBlur={onBlur} className="navigationMobile">
          <button
            className={mergeClassNames([
              mobileNavActive && "burgerBtnActive",
              "headerBurgerBtn",
            ])}
            onClick={() => setMobileNavActive(!mobileNavActive)}
          >
            <div className="burgerBox">
              <div className="topBun"></div>
              <div className="bottomBun"></div>
            </div>
          </button>
        </div>
        <div
          className={mergeClassNames([
            mobileNavActive && "mobileShow",
            "navigation",
          ])}
        >
          <Link to="/design-portfolio">Design Portfolio</Link>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sarah-newton-66077553/"
          >
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/sarahlorraine">
            GitHub
          </a>
          <Button type="download" className="cvBtn" href={cv}>
            CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
