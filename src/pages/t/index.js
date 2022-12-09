import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

class TagsPage extends React.Component {
  state = { alphabetical: true }

  render() {
    const { data } = this.props
    const { group } = data.allMarkdownRemark
    const groupSortedByCount = group.slice().sort((a, b) => {
      if (a.totalCount > b.totalCount) return -1
      if (a.totalCount < b.totalCount) return 1
      return 0
    })
    let { alphabetical } = this.state
    // console.dir(this.props.location)
    if (this.props.location.hash.includes('#popularity')) {
      alphabetical = false
    }
    return (
      <Layout>
        <section>
          <Helmet title={`tags - ${data.site.siteMetadata.title}`} />
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
                  <nav className="topnav">
                    <div className="link-target">
                      <span id="alphabetical"></span>
                      <span id="popularity"></span>
                    </div>
                    <ul>
                      <li>
                        <small>Sort tags:{` `}</small>
                      </li>
                      <li>
                        <a
                          onClick={() => this.setState({ alphabetical: true })}
                          href="#alphabetical"
                          className={
                            alphabetical ? 'button selected' : 'button'
                          }
                        >
                          Alphabetically
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => this.setState({ alphabetical: false })}
                          href="#popularity"
                          className={
                            alphabetical ? 'button' : 'button selected'
                          }
                        >
                          By Popularity
                        </a>
                      </li>
                    </ul>
                  </nav>
                </header>
                {alphabetical && (
                  <section className="section alphabetical">
                    <nav>
                      <ul className="taglist page">
                        {group.map((tag) => (
                          <li key={tag.fieldValue}>
                            <Link to={`/t/${kebabCase(tag.fieldValue)}/`}>
                              {tag.fieldValue} ({tag.totalCount})
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </section>
                )}
                {!alphabetical && (
                  <section className="section popularity">
                    <nav>
                      <ul className="taglist page">
                        {groupSortedByCount.map((tag) => (
                          <li key={tag.fieldValue}>
                            <Link to={`/t/${kebabCase(tag.fieldValue)}/`}>
                              {tag.fieldValue} ({tag.totalCount})
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
