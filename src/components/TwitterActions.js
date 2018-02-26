// TwitterActions.js
// https://www.stevenmercatante.com/how-to-add-twitter-buttons-to-a-gatsby-site/
import React from 'react'

export default () => (
  <ul
    className="twitter-actions"
    style={{
      listStyle: 'none',
      marginBottom: '3rem',
      marginLeft: '0',
      marginRight: '1.5rem',
      marginTop: '3rem',
    }}
  >
    <li
      style={{ marginBottom: '1.5rem' }}
    >
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?via=voidcluster`}
        data-size="large"
      >
        Tweet
      </a>
    </li>
    <li>
      <a
        className="twitter-follow-button"
        href="https://twitter.com/voidcluster"
        data-show-count="false"
        data-size="large"
      >
        Follow @voidcluster
      </a>
    </li>
  </ul>
)
