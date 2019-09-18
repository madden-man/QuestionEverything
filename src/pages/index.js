import React from 'react';

import wave from '../img/wave.gif';
import BasicLayout from '../components/Layout';
import Menu from '../components/Menu';

const IndexPage = () =>
  <BasicLayout styles={{textAlign: 'center'}}>
    <h1>Question Everything</h1>
    <Menu styles={{position: 'absolute', top: '1rem', right: '2rem'}}/>
    <div style={{textAlign: 'left'}}>
      <h3 style={{fontWeight: 'normal'}}>Hey there!</h3>
      <img src={wave} style={{border: '2px ridge black', borderRadius: 8}} alt="forrest gump waving" />
      <p style={{margin: '1.5rem 0', lineHeight: '1.4rem'}}>
        If you've found this site, you're either in an existential crisis,
        a period of deconstructing your faith, or...maybe I just really trust 
        you and wanted you to see some of my deepest, darkest thoughts/feelings
        about God, my life, and the universe! Feel free to explore...if you dare.
      </p>

    </div>
  </BasicLayout>;

export default IndexPage;
