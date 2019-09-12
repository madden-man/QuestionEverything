import React from 'react';
import { Link } from 'gatsby';
import BasicLayout from '../components/Layout';

const IndexPage = () =>
  <BasicLayout>
    <h1>Taste Tracker!</h1>
    <p>Hi there! Would you like to browse Tommy's Taste Tracker? Here are a few options for you!</p>
    <ul>
      <Link to="/movies"><li>Movies</li></Link>
      <Link to="/music"><li>Music</li></Link>
    </ul>
  </BasicLayout>;

export default IndexPage;
