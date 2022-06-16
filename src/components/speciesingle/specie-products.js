import React, { useState } from 'react';
import Img from 'gatsby-image';


const SpecieProducts = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  return (
    <div className="product-species specie-products" id={id}>
      <div className="general-heading">
        <h2>{content.products_heading}</h2>
      </div>
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.products_description }} />
      <div className="species-boxes">
        <div className="row">
          {content.products_list ? content.products_list.map((product, index) => (
            <div className="col-xs-6 col-sm-3" data-sal="slide-up" 
            data-sal-easing="ease"
            data-sal-delay="5" data-key={`${index}`} key={index}>
              <div className="species-box">
              <a href={ product.product_link }>
                <div className="image">
                  { product.product_image ? <Img fluid={product.product_image.localFile.childImageSharp.fluid} alt={product.product_image.alt_text || ''} /> : null }
                </div>
                <span className="title">{product.product_title}</span>
                <span className="description">{product.product_description}</span>
                </a>
              </div>
            </div>
          )) : null }
        </div>
      </div>
    </div>
  )
}

export default SpecieProducts;