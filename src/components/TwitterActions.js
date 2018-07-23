// TwitterActions.js
// https://www.stevenmercatante.com/how-to-add-twitter-buttons-to-a-gatsby-site/
import React from 'react'

class TwitterActions extends React.Component {
  render() {
    const account = this.props.account

    return (
      <ul
        className="twitter-actions"
        style={{
          listStyle: 'none',
          marginBottom: '3rem',
          marginLeft: '0',
          marginRight: '1.5rem',
          marginTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <li
          style={{
            padding: '1rem 2rem 1rem 0',
            marginBottom: '1.5rem',
            marginTop: '0',
          }}
        >
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?via=${account}`}
            data-size="large"
          >
            Tweet
          </a>
        </li>
        <li
          style={{
            padding: '1rem 2rem 1rem 0',
            marginBottom: '1.5rem',
            marginTop: '0',
          }}
        >
          <a
            className="twitter-follow-button"
            href={`https://twitter.com/${account}`}
            data-show-count="false"
            data-size="large"
          >
            Follow @{account}
          </a>
        </li>
      </ul>
    )
  }

  componentDidMount() {
    if (typeof twttr !== 'undefined' && typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
  }
}

export default TwitterActions
