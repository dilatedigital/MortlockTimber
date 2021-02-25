import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
	
const ProductProducts = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  var readMoreActive0 = false;
  var readMoreActive1 = false;
  var readMoreActive2 = false;

  function expandContent(value){
	  console.log(value);
	  var displayValue = document.getElementById("extra__content_"+value).style.display;
	  if(displayValue == "none"){
		  document.getElementById("extra__content_"+value).style.display = "block";
		  document.getElementById("products_section_button_"+value).textContent = "Read Less";
	  }
	  else{
	  document.getElementById("extra__content_"+value).style.display = "none";
	  document.getElementById("products_section_button_"+value).textContent = "Read More";
	  }
  }  
 

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
			{ product_item.product_description && <div dangerouslySetInnerHTML={{ __html: product_item.product_description }} /> }
            { (product_item.product_expand_description) && <div id={"extra__content_"+index} className={"extra__content"+" hide"} style={{ display: `none` }} dangerouslySetInnerHTML={{ __html: product_item.product_expand_description }} /> }
            {product_item.product_expand_description && <span id={"products_section_button_"+index} className="button product_read_more" tabIndex={0} role="button" onKeyDown={() => expandContent(index)} onClick={() => expandContent(index)}>Read more</span> }
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