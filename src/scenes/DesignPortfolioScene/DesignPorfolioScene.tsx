import * as React from "react";
import Box from "../../components/Box/Box";
import FlexBox from "../../components/FlexBox/FlexBox";
import Button from "../../components/Button/Button";
import { RouteComponentProps } from "react-router-dom";

import "./designPortfolioScene.scss";
import "../../globals/fonts.scss";

import portfolio from "../../../public/assets/files/Design-Portfolio-Sarah-Newton.pdf";

export const DesignPortfolioScene: React.FC<RouteComponentProps> = () => {
  return (
    <Box>
      <FlexBox>
        <div className="main">
          <h2>Make it simple, but significant.</h2>
          <p>
            Design has always been at the forefront of my development process.
            Without a sound design foundation, technical application can fall
            short.
          </p>
          <Button type="download" href={portfolio}>
            Download portfolio
          </Button>
        </div>
        <div className="image"></div>
      </FlexBox>
    </Box>
  );
};

export default DesignPortfolioScene;
