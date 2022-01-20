import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Box from "../../components/Box/Box";
import FlexBox from "../../components/FlexBox/FlexBox";

import "../../globals/fonts.scss";
import "./home.scss";

export const HomeScene: React.FC<RouteComponentProps> = () => {
  return (
    <Box>
      <FlexBox>
        <div className="intro">
          <p>
            Sarah is a web developer and ex-designer based in Gothenburg,
            Sweden. She is currently working as a{" "}
            <strong>Senior Full-Stack Developer</strong> at Bokio.
            <br />
            Originally from Brisbane, Australia.
          </p>
          <a href="mailto:s.newton2990@gmail.com">Get in touch</a>
          <section className="experience">
            <h3>Work experience</h3>
            <span>
              Senior Full-Stack Developer &#8594; Bokio, Gothenburg, 2017 -
              Present
            </span>
            <span>
              Lead UI/UX Designer &amp; FE Developer &#8594; Venue10, London,
              2014 - 2015
            </span>
            <span>
              User Interface Designer &#8594; Flight Center, Brisbane, 2013 -
              2014
            </span>
          </section>
        </div>
        <div className="profile"></div>
      </FlexBox>
    </Box>
  );
};

export default HomeScene;
