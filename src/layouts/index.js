import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

import 'typeface-source-code-pro'
import 'typeface-source-sans-pro'
import 'typeface-source-serif-pro'

class TemplateWrapper extends React.Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const { children } = this.props
    return (
      <div>
        <Helmet title={siteMetadata.title} />
        <Navbar />
        <section style={{ marginBottom: '6rem' }}>{children()}</section>
      </div>
    )
  }
}

export default TemplateWrapper

export const defaultTemplateQuery = graphql`
  query defaultTemplate {
    site {
      siteMetadata {
        title
      }
    }
  }
`
