import * as React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { mergeClassNames } from "../helpers";

import "./button.scss";

interface ButtonProps {
  type?: "button" | "download" | "buttonLink";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  switch (props.type) {
    case "download":
      return (
        <a
          className={mergeClassNames([props.className, "button"])}
          target="_blank"
          // download
          href={props.href}
        >
          {props.children}
        </a>
      );
    case "button":
      return (
        <button
          className={mergeClassNames([props.className, "button"])}
          type="button"
          onClick={() => props.onClick()}
        >
          {props.children}
        </button>
      );
    case "buttonLink":
      return (
        <Link to={props.href}>
          <button
            className={mergeClassNames([props.className, "button"])}
            type="button"
          >
            {props.children}
          </button>
        </Link>
      );
    default:
      return (
        <button
          className={mergeClassNames([props.className, "button"])}
          type="button"
          onClick={() => props.onClick()}
        >
          {props.children}
        </button>
      );
  }
};

export default Button;
