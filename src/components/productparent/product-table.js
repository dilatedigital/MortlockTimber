import React, { useState } from 'react';
import Img from 'gatsby-image';


const ProductTable = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }

    return (
      <div className="application__wrapper">
        <div className="container">
		<div className="top-content">
					  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.products_table_title }} />
            { content.products_table_description && <div className="products-table-description" dangerouslySetInnerHTML={{ __html: content.products_table_description }} /> }
            { (content.products_table_expand_description && readMoreActive) && <div className="products-table-description extra__content" dangerouslySetInnerHTML={{ __html: content.products_table_expand_description }} /> }
            {content.products_table_expand_description && <span className="read-more-btn button" tabIndex={0} role="button" onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span> }
	  </div>
	  <div className="product-table-container">
		  <div className="features-column col-sm-3">
			  <div className="feature feature-empty">
			  
			  </div>
			  {content.products_table_features ? content.products_table_features.map((products_table_feature,index) => (
			  <div className="feature feature-block">
			  <span className="feature-text" dangerouslySetInnerHTML={{ __html: products_table_feature.feature_item_title }} />
			  </div>
			  )) : null }
			  
		  </div>
		  <div className="products-column col-sm-9">
			  {content.products_table_items ? content.products_table_items.map((products_table_item,index) => (
          <div className="product-stick">
            <div className="product-block title-block">
              <span className="title-text" dangerouslySetInnerHTML={{ __html: products_table_item.product_item_title }} />
            </div>
            {products_table_item.product_item_checkbox ? products_table_item.product_item_checkbox.map((product_item_checkbox,index) => (
              <div className={"product-block checbox-block" + (product_item_checkbox.product_item_text.length ? ' text-block' : '')}>
                {product_item_checkbox.product_item_tick == true ? ( <span className="checkbox-icon tick-icon">
                <svg class="icon" viewBox="0 0 64 64">
                    <path d="M24 54L3 32.491l5.28-5.04L24 43l31.773-32L61 17 24 54z"></path>
                  </svg>
                  </span> ) : ( <span className="checkbox-icon cross-icon">
                <svg class="icon" viewBox="0 0 64 64">
                    <path d="M51 17.25L46.75 13 32 27.75 17.25 13 13 17.25 27.75 32 13 46.75 17.25 51 32 36.25 46.75 51 51 46.75 36.25 32 51 17.25z"></path>
                  </svg></span> )}
                <span className="checkbox-text" dangerouslySetInnerHTML={{ __html: product_item_checkbox.product_item_text }} />
              </div>
            )) : null }
            <div className="product-block button-block">
              <a class="button white" href={products_table_item.product_item_button_link}>{products_table_item.product_item_button_text}</a><br/>
            </div> 
            <div className="product-block button-block minHeightAuto">
              <a href="/request-a-quote" class="button primary">request a quote</a>
            </div> 
          </div>
			  )) : null }
		  </div>	  
	  </div>
	  {content.product_item ? content.product_item.map((product_item,index) => (
          <div className="row product-item">
            <div className="col-sm-4 product-content">
              <div className="application__text">
			  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: product_item.product_title }} />
            <div dangerouslySetInnerHTML={{ __html: product_item.product_description }} />
			<a class="button white" href={product_item.button_link}>{product_item.button_text}</a>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-7 product-image">
              <Img fluid={product_item.product_aside_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
            </div>
          </div>
		  )) : null }
        </div>
      </div>
    )
}

export default ProductTable;