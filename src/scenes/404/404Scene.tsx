import * as React from "react";
import Box from "../../components/Box/Box";
import FlexBox from "../../components/FlexBox/FlexBox";
import Button from "../../components/Button/Button";
import { RouteComponentProps } from "react-router-dom";

import "./scene404.scss";
import "../../globals/fonts.scss";

export const Scene404: React.FC<RouteComponentProps> = () => {
  return (
    <Box>
      <div className="wrapper404">
        <h1>404</h1>
        <div className="image404"></div>
        <p>I'm not sure what happened, but there's nothing to see here.</p>
        <Button className="btn404" type="buttonLink" href={"./"}>
          Go home
        </Button>
      </div>
    </Box>
  );
};

export default Scene404;
