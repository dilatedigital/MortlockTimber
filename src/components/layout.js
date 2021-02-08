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
    if (!sessionStorage.getItem("mtServerdownPopup")) {
      sessionStorage.setItem("mtServerdownPopup", "seen")
  document.getElementById("mt-popup-overlay").style.display = 'block';
  document.getElementById("mt-popup-container").style.display = 'block';	  
    }
document.getElementById("mt-popup-close").addEventListener('click', function() {
  document.getElementById("mt-popup-overlay").style.display = 'none';
  document.getElementById("mt-popup-container").style.display = 'none';
})	

document.getElementById("mt-popup-overlay").addEventListener('click', function() {
  document.getElementById("mt-popup-overlay").style.display = 'none';
  document.getElementById("mt-popup-container").style.display = 'none';
})	
	
    //console.log(sessionStorage.getItem("referrer"))
    //console.log(window.location)
  }, [])
  //console.log(props)
  return (
    <div id="wrapper">
      <Header color={props.headerColor} />
      <main id="main">{children}</main>
      <Footer />
	  <div id="mt-popup-overlay"></div>
	  <div id="mt-popup-container">
			<span id="mt-popup-close">x</span>
			<div class="mt-popup-content">
			<h5>ATTENTION CUSTOMERS</h5>
			<p>If you submitted an enquiry with Mortlock Timber on the <strong>30th or 31st of January</strong>, your enquiry did not reach our Sales team despite the success message due to a technical malfunction.</p>
			<p>Please re-submit your enquiry again below and we will get back to your enquiry urgently.</p>
			<a href="/resubmit-enquiry/" class="button" tabindex="0" role="button">Resubmit Enquiry</a>
			</div>
	  </div>
    </div>
  )
}

export default Layout
