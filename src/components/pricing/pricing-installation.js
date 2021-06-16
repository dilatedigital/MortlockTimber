import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Button from "../global/button";

const PricingInstallation = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }

  return (
			<div className="installation__block">
			  <div className="row">
				<div className="col-sm-6">
				  <div className="installation__text">
					<h2 dangerouslySetInnerHTML={{ __html: content.installation_title }} />
					{ content.installation_description && <div  className="installation_content" dangerouslySetInnerHTML={{ __html: content.installation_description }} /> }
					{ (content.installation_expanded_description && readMoreActive) && <div className="extra__content" dangerouslySetInnerHTML={{ __html: content.installation_expanded_description }} /> }
					{content.installation_expanded_description && <span className="button readmore-nobg" tabIndex={0} role="button" onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span> }
					<div className="installation-buttons">
						{ content.installation_buttons ?
						  <div className="inner__bannerbuttons">
							{content.installation_buttons.map((button, index) =>
								<button
								  className={'button ' + button.installation_button_style}
								  key={index}
								  data-id={button.installation_button_link}
								  onClick={() =>
									scrollTo(`${button.installation_button_link}`)
								  }
								>
								  {button.installation_button_text}
								</button>
							)}
						  </div> : null }
					</div>
				  </div>
				</div>
				<div className="col-sm-6">
				  <div className="installation__image" data-sal="slide-up" 
			  data-sal-easing="ease"
			  data-sal-delay="5">
					<Img fluid={content.installation_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
				  </div>
				</div>
			  </div>
			</div>
  )
}

export default PricingInstallation;