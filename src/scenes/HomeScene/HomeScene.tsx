import * as React from "react";
import Box from "../../components/Box/Box";
import FlexBox from "../../components/FlexBox/FlexBox";
import BoxContent from "../../components/BoxContent/BoxContent";
const profilePicture = "../../public/assets/images/sarah.png"

import '../../globals/fonts.scss';
import './home.scss';

export interface HomeSceneProps { }

export const HomeScene = (props: HomeSceneProps) => {
  
  const [state, setState] = React.useState<string>("");

return (
      <Box>
        <FlexBox>
          <div className="intro">
            <p>
              Sarah is a web developer and ex-designer based in Gothenburg, Sweden. 
              She is currently working as a <strong>Senior Full-Stack Developer</strong> at Bokio. 
              <br/> 
              Originally from Brisbane, Australia.
          </p>
          <a href="mailto:s.newton2990@gmail.com">Get in touch</a>
          <p className="experience">
            <h3>Work experience</h3>
          <span>Senior Full-Stack Developer &#8594; Bokio, Gothenburg, 2017 - Present</span>
          <span>Lead UI/UX Designer &amp; FE Developer &#8594; Venue10, London, 2014 - 2015</span>
          <span>User Interface Designer &#8594; Flight Center, Brisbane, 2013 - 2014</span>
          </p>
          </div>
          <div className="profile"><img src={profilePicture} /></div>
        </FlexBox>           
      </Box>
  );
}

export default HomeScene;