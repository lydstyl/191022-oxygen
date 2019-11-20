import { Link } from "gatsby"
import React from "react"
import { scaleRotate as Menu } from "react-burger-menu"

import "./Menu.scss"

export default class TheMenu extends React.Component {
  componentDidMount() {
    document.querySelector("nav").style.height = "auto" // Todo: look for something better
  }

  render() {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Link to="/">Prestations</Link>
        <Link to="/gallery">Gallery / Fracebook</Link>
        <Link to="/contact">Contact / RDV</Link>
      </Menu>
    )
  }
}
