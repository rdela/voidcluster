import React from 'react'

export default ({ content, className }) => (
  <article className={className}>{content}</article>
)
export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)
