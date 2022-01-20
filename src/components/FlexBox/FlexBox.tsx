import * as React from "react";
import { FunctionComponent } from "react";
import "./flexBox.scss";

interface FlexBoxProps {}

const FlexBox: FunctionComponent<FlexBoxProps> = (props) => {
  return <div className="flexBox">{props.children}</div>;
};

export default FlexBox;
