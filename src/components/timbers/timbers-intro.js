import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';


const TimbersIntro = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

    return (
      <div className="application__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 product-intro-content timber-intro-heading">
              <div className="application__text">
			  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.intro_heading }} />
              </div>
            </div>
            <div className="col-sm-7 product-intro-image timber-intro-description">
            { content.intro_description && <div dangerouslySetInnerHTML={{ __html: content.intro_description }} /> }
            </div>
          </div>
        </div>
      </div>
    )
}

export default TimbersIntro;