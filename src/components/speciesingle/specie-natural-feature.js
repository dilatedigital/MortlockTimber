import React, { useState } from 'react';
import Img from 'gatsby-image';


const SpecieNaturalFeature = ({ ...props }) =>  {
  const content = props.data;
  
  return (
    <div className="product-species specie-products specie-natural-feature">
      <div className="general-heading">
        <h2>{content.natural_feature_heading}</h2>
      </div>
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.natural_feature_description }} />
      <div className="species-boxes">
        <div className="row">
          {content.natural_feature_list ? content.natural_feature_list.map((feature, index) => (
            <div className="col-xs-6 col-sm-2" data-sal="slide-up" 
            data-sal-easing="ease"
            data-sal-delay="5" data-key={`${index}`} key={index}>
              <div className="species-box">
                <div className="image">
                  { feature.natural_feature_item_image ? <Img fluid={feature.natural_feature_item_image.localFile.childImageSharp.fluid} alt={feature.natural_feature_item_image.alt_text || ''} /> : null }
                </div>
                  <span className="title">{feature.natural_feature_item_heading}</span>
              </div>
            </div>
          )) : null }
        </div>
      </div>
<div className="natural-feature-additional-content">
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.natural_feature_additional_description }} />
</div>
    </div>
  )
}

export default SpecieNaturalFeature;