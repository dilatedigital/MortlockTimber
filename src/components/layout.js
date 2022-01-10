import React, { useEffect, useContext } from "react"

import Header from "./layout-header"
import Footer from "./layout-footer"

import "../assets/scss/global.scss"

const Layout = ({ children, ...props }) => {
  useEffect(() => {
    sessionStorage.setItem("presubmission", document.referrer)
    if (!sessionStorage.getItem("referrer")) {
      sessionStorage.setItem("referrer", document.referrer)
    }
    if (!sessionStorage.getItem("landing")) {
      sessionStorage.setItem("landing", window.location.pathname)
    }
document.addEventListener('copy', (event) => {
  const pagelink = ` Read more at: ${document.location.href}`;
  event.clipboardData.setData('text', document.getSelection() + pagelink);
  event.preventDefault();
});
    
  	/* Christmas popup message 1/2 - starts *x/
  	if (!sessionStorage.getItem("mtServerdownPopup")) {
  		sessionStorage.setItem("mtServerdownPopup", "seen");
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
	/x* Christmas popup message 1/2 - ends */
  
  /*
   <!--	<p>If you submitted an enquiry with Mortlock Timber on the <strong>30th or 31st of January</strong>, your enquiry did not reach our Sales team despite the success message due to a technical malfunction.</p> -->
		<!--	<p>Please re-submit your enquiry again below and we will get back to your enquiry urgently.</p> -->
		<!--	<a href="/resubmit-enquiry/" class="button" tabindex="0" role="button">Resubmit Enquiry</a> -->
        */
  
    //console.log(sessionStorage.getItem("referrer"))
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
			<p>Please note that we are closed for the Christmas break from the <strong>23rd of December</strong> up to the <strong>10th of January</strong>. We will respond to your enquiry as soon as possible in the new year.</p>
            <p>Merry Christmas and Happy New Year!</p>
		
			</div>
	  </div>
		<script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{ "@context": "https://schema.org", "@type": "WebSite", "name": "Mortlock Timber", "url": "https://www.mortlock.com.au/", "potentialAction": { "@type": "SearchAction", "query-input": "required name=query", "target": "https://www.mortlock.com.au/search?q={query}" } }'}}></script>
		<script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{ "@context": "https://schema.org", "@type": "Organization", "name": "Mortlock Timber", "url": "https://www.mortlock.com.au/", "logo": "https://site.mortlock.com.au/wp-content/uploads/2020/07/mortlock-timber-logo.svg", "contactPoint": { "@type": "ContactPoint", "telephone": "1800894400", "contactType": "customer service", "areaServed": "AU", "availableLanguage": "en" }, "sameAs": [ "https://www.facebook.com/mortlocktimber/", "https://www.instagram.com/mortlocktimber/", "https://www.linkedin.com/company/mortlock-timber-group/", "https://www.pinterest.com.au/mortlocktimber/", "https://www.youtube.com/channel/UCM9q-N6z8SAmiHEyVGCmqsg" ] }'}}></script>
	</div>
  )
}

export default Layout
