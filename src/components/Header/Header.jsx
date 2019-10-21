import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Prestations</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery / Fracebook</Link>
        </li>
        <li>
          <Link to="/contact">Contact / RDV</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
