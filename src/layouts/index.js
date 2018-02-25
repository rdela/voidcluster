import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

import 'typeface-source-code-pro';
import 'typeface-source-sans-pro';
import 'typeface-source-serif-pro';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="voidcluster" />
    <Navbar />
    <section
      style={{ marginBottom: "6rem" }}
    >{children()}</section>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const defaultTemplateQuery = graphql`
  query defaultTemplate {
    site {
      siteMetadata {
        author
        blogTitle
        description
        github
        siteUrl
        title
        twitter
      }
    }
  }
`
