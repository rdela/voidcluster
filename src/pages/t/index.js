import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section>
      <Helmet title={`Tags - ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <header>
              <h1
                className="title is-size-2 is-bold-light"
                style={{
                  padding: '2.5rem 1.5rem 0',
                  textAlign: 'center',
                }}
              >
                tags
              </h1>
            </header>
            <section className="section">
              <nav>
                <ul
                  className="taglist"
                  style={{
                    fontSize: '1.625rem',
                    margin: '0 auto',
                    maxWidth: '40rem',
                    textAlign: 'left',
                  }}
                >
                  {group.map(tag => (
                    <li key={tag.fieldValue}>
                      <Link to={`/t/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
