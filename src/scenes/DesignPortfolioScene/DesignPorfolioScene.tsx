import * as React from "react";
import Box from "../../components/Box/Box";
import FlexBox from "../../components/FlexBox/FlexBox";
const portfolio = "../../../public/assets/files/Design-Portfolio-Sarah-Newton.pdf"

import Button from "../../components/Button/Button";

import "./designPortfolioScene.scss"
import '../../globals/fonts.scss';

export interface DesignPortfolioSceneProps { }

export const DesignPortfolioScene = (props: DesignPortfolioSceneProps) => {
  
  const [state, setState] = React.useState<string>("");

return (
    <Box>
        <FlexBox>
        <div className="main">
          <h2>Make it simple, but significant.</h2>
            <p>
              Design has always been at the forefront of my development process. 
              Without a sound design foundation, technical application can fall short.
            </p>
            <Button type="download" href={portfolio}>Download portfolio</Button>
          </div>
          <div className="image"></div>
        </FlexBox>           
    </Box>
  );
}

export default DesignPortfolioScene;