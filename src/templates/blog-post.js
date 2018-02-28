import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import TwitterActions from '../components/TwitterActions'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  helmet,
  siteTwitter,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">{title}</h1>
            <p className="description">{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <TwitterActions account={siteTwitter} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  const siteTwitter = data.site.siteMetadata.twitter

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | voidcluster`} />}
      siteTwitter={siteTwitter}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

export const blogPostQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        twitter
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        description
        tags
        title
      }
    }
  }
`
