import React, { useState } from 'react';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import BackgroundImage from 'gatsby-background-image';

import Button from "../global/button";

const PricingBanner = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  return (
        <div className={content.banner_type ? `inner__banner ${content.banner_type}` : 'inner__banner'}>
          <div className="bg__image has-overlay">
            { content.banner_image ? <BackgroundImage fluid={content.banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
              <div className="box">
                <h1 className={ !content.banner_heading ? "text-center" : null } dangerouslySetInnerHTML={{ __html: content.banner_heading }} />
                { content.banner_description ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: content.banner_description }} /> : null }
                { content.banner_buttons ?
                  <div className="inner__bannerbuttons">
                    {content.banner_buttons.map((button, index) =>
                        <button
                          className={'button ' + button.pricing_button_style}
                          key={index}
                          data-id={button.pricing_button_link}
                          onClick={() =>
                            scrollTo(`${button.pricing_button_link}`)
                          }
                        >
                          {button.pricing_button_text}
                        </button>
                    )}
                  </div> : null }
              </div>
            </div>
          </div>
        </div>
  )
}

export default PricingBanner;