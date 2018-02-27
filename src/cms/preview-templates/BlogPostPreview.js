import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const entryTags = entry.getIn(['data', 'tags'])
  const tags = entryTags ? entryTags.toJS() : []

  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default BlogPostPreview
