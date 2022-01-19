import * as React from 'react';
import { FunctionComponent } from 'react';
import { mergeClassNames } from '../helpers';

import "./button.scss"

interface ButtonProps {
  type?: "button" | "download";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    props.type == "download" ?
      <a 
        className={mergeClassNames([props.className, "button"])}
        target="_blank"
        // download
        href={props.href}
      >
          {props.children}
      </a>
    :
      <button 
        className={mergeClassNames([props.className, "button"])} 
        type="button" 
        onClick={() => props.onClick()}>
          {props.children}
        </button>
    )
}

export default Button;
