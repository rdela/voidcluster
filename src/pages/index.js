import React from 'react'
import Link from 'gatsby-link'
import Script from 'react-load-script'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <header className="content" style={{ textAlign: 'center' }}>
            <h1
              className="is-size-2 is-bold-light"
              style={{
                padding: '2.5rem 1.5rem 0',
              }}
            >
              {data.site.siteMetadata.blogTitle}
            </h1>
          </header>
          <section className="section">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{
                    margin: '0 auto 4.5rem',
                    maxWidth: '40rem',
                  }}
                  key={post.id}
                >
                  <p className="description">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Read On →
                    </Link>
                  </p>
                </div>
              ))}
          </section>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        blogTitle
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          id
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`
