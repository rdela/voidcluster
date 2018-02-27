import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import TwitterActions from '../components/TwitterActions'

class BlogPostTemplate extends React.Component {
  render(content, contentComponent, description, title, helmet) {
    const postData = this.props
    // console.log(postData)
    const PostContent = contentComponent || HTMLContent

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
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        date(formatString: "DD MMMM YYYY")
        title
        description
      }
    }
  }
`
