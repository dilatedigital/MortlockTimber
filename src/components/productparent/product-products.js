import React, { useState } from 'react';
import Img from 'gatsby-image';


const ProductProducts = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

    return (
      <div className="application__wrapper">
        <div className="container">
					  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.products_title }} />
	  {content.product_item ? content.product_item.map((product_item,index) => (
          <div className="row product-item">
            <div className="col-sm-5 product-content">
              <div className="application__text">
			  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: product_item.product_title }} />
            <div dangerouslySetInnerHTML={{ __html: product_item.product_description }} />
			<a class="button white" href={product_item.button_link}>{product_item.button_text}</a>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-6 product-image">
              <Img fluid={product_item.product_aside_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
            </div>
          </div>
		  )) : null }
        </div>
      </div>
    )
}

export default ProductProducts;