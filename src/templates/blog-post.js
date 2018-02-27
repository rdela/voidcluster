import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import TwitterActions from '../components/TwitterActions'

class BlogPostTemplate extends React.Component {
  render(content, contentComponent, description, tags, title, helmet) {
    const postData = this.props
    const PostContent = contentComponent || HTMLContent
    const tagGroup = postData.tags

    return (
      <section className="section">
        {postData.helmet || ''}
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">
                {postData.title}
              </h1>
              <p className="description">{postData.description}</p>
              <PostContent content={postData.content} />
              {tagGroup && tagGroup.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tagGroup.map(tag => <li key={tag + `tag`}><Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link></li>)}
                  </ul>
                </div>
              ) : null}
              <TwitterActions />
            </div>
          </div>
        </div>
      </section>
    )
  }

  componentDidMount() {
    if (typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
  }
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | voidcluster`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

export const blogPostQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        description
        path
        tags
        title
      }
    }
  }
`
