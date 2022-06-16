import React, { useState } from 'react';
import Img from 'gatsby-image';
import Button from "../global/button"


const SpecieFinishes = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  return (
    <div className="product-species specie-products specie-finishes" id={id}>
      <div className="general-heading">
        <h2>{content.finishes_heading}</h2>
      </div>
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.finishes_description }} />
      <div className="species-boxes">
        <div className="row">
          {content.finishes_list ? content.finishes_list.map((finish, index) => (
            <div className="col-xs-6 col-sm-3" data-sal="slide-up" 
            data-sal-easing="ease"
            data-sal-delay="5" data-key={`${index}`} key={index}>
              <div className="species-box">
                <div className="image">
                  { finish.finishes_image ? <Img fluid={finish.finishes_image.localFile.childImageSharp.fluid} alt={finish.finishes_image.alt_text || ''} /> : null }
                </div>
                <span className="title">{finish.finish_title}</span>
                <span className="description">{finish.finish_description}</span>
              </div>
            </div>
          )) : null }
        </div>
      </div>
               <div class="row cta_buttons">
              <div class="col-sm-12 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5"><div class="btn__wrap mr-45"><a href={ content.finishes_button_one_link.link } class="button-learn">{ content.finishes_button_one_text }<span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></a></div>
             <div class="btn__wrap mr-45"><a href={ content.finishes_button_two_link } class="button-learn">{ content.finishes_button_two_text }<span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></a></div>
             </div>
              </div>
    </div>
  )
}

export default SpecieFinishes;