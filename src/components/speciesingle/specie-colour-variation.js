import React, { useState } from 'react';
import Img from 'gatsby-image';


const SpecieColourVariation = ({ ...props }) =>  {
  const content = props.data;
  
  return (
    <div className="product-species specie-products specie-colour-variation">
      <div className="general-heading">
        <h2>{content.colour_variation_heading}</h2>
      </div>
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.colour_variation_description }} />
      <div className="species-boxes">
        <div className="row">
          {content.colour_variation_list ? content.colour_variation_list.map((variation, index) => (
            <div className="col-xs-6 col-sm-2" data-sal="slide-up" 
            data-sal-easing="ease"
            data-sal-delay="5" data-key={`${index}`} key={index}>
              <div className="species-box">
                <div className="image">
                  { variation.colour_variation_image ? <Img fluid={variation.colour_variation_image.localFile.childImageSharp.fluid} alt={variation.colour_variation_image.alt_text || ''} /> : null }
                </div>
              </div>
            </div>
          )) : null }
        </div>
      </div>
    </div>
  )
}

export default SpecieColourVariation;