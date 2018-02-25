import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ textAlign: 'center' }}
        >
          <header className="content">
            <h1 className="title is-size-2 is-bold-light">Not Found</h1>
          </header>
          <article>
            <h2>
              <Link to="/">Take me home!</Link>
            </h2>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default NotFoundPage
