import React, { useEffect, useContext } from "react"

import Header from "./layout-header"
import Footer from "./layout-footer"

import "../assets/scss/global.scss"

const Layout = ({ children, ...props }) => {
  useEffect(() => {
    sessionStorage.setItem("referrer", document.referrer)
    if (!sessionStorage.getItem("landing")) {
      sessionStorage.setItem("landing", window.location.pathname)
    }
    //console.log(sessionStorage.getItem("referrer"))
    //console.log(window.location)
  }, [])
  //console.log(props)
  return (
    <div id="wrapper">
      <Header color={props.headerColor} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
