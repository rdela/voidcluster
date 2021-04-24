import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <Helmet title={title} />
      <div className="container">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <header className="content" style={{ textAlign: 'center' }}>
              <h1
                className="title is-size-2 is-bold-light"
                style={{
                  padding: '2.5rem 1.5rem 0',
                }}
              >
                {title}
              </h1>
            </header>
            <section className="section">
              <article
                style={{
                  fontSize: '1.625rem',
                  margin: '0 auto',
                  maxWidth: '40rem',
                  textAlign: 'left',
                }}
              >
                <PageContent className="content" content={content} />
              </article>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
