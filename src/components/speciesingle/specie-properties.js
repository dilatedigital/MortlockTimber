import React, { useState } from 'react';
import Img from 'gatsby-image';


const SpecieProperties = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  return (
    <div className="product-species specie-products specie-properties" id={id}>
      <div className="general-heading">
        <h2>{content.properties_heading}</h2>
      </div>
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.properties_description }} />
      <div className="species-boxes">
        <div className="row">
          <div className="product-table-container">
            <div className="features-column col-sm-3">
              <div className="feature feature-empty">

              </div>
              {content.properties_list ? content.properties_list.map((property,index) => (
              <div className="feature feature-block">
              <span className="feature-text" dangerouslySetInnerHTML={{ __html: property.property_heading }} />
              </div>
              )) : null }

            </div>
            <div className="products-column col-sm-9">
                <div className="product-stick">
                  <div className="product-block title-block">
                    <span className="title-text" dangerouslySetInnerHTML={{ __html: content.properties_table_heading }} />
                  </div>
                  {content.properties_list ? content.properties_list.map((property_detail,index) => (
                    <div className="product-block checbox-block text-block">
                      <span className="checkbox-text" dangerouslySetInnerHTML={{ __html: property_detail.property_description }} />
                    </div>
                  )) : null }
                </div>
            </div>	  
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecieProperties;