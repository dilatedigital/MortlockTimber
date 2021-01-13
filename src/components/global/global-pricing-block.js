import React from 'react';
import Img from 'gatsby-image';

import ProductPricingForm from "../forms/product-pricing-form-4360";
import ProductPricingFormClassicplank from "../forms/product-pricing-form-classicplank-8490";

const PricingBlock = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  return (
    <div className="pricing__block" id={ id ? id : null }>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="pricing__text" >
              <h2 dangerouslySetInnerHTML={{ __html: content.pricing_title }} />
              <p dangerouslySetInnerHTML={{ __html: content.pricing_description }} />
              {props.pageID == 573 ? ( <ProductPricingFormClassicplank gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> ) 
              : props.pageID == 57444444 ? ( <ProductPricingForm gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )			  
              : ( <ProductPricingForm gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )  }
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="price__image" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
              {content.pricing_image ? <Img fluid={content.pricing_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingBlock;
