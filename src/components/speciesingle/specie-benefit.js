import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const ProductBenefit = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  return (
    <div className="product__benefit specie-benefit" id={id}>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="benefit__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
              <Img fluid={content.product_benefit_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="benefit__text">
              <h2 dangerouslySetInnerHTML={{ __html: content.product_benefit_title }} />
              <div className="row">
    <div className="col-sm-12 benefit-description" data-sal="slide-up" 
                  data-sal-easing="ease"
                  data-sal-delay="5">
    { content.product_benefit_description && <div dangerouslySetInnerHTML={{ __html: content.product_benefit_description }} /> }
    </div>
                {content.product_benefit_columns.map((benefit, index) => (
                  <div className="col-sm-6" key={index} data-sal="slide-up" 
                  data-sal-easing="ease"
                  data-sal-delay="5">
                  {(benefit.benefit_or_button === 'button') ?
                    <div className="btn__wrap">
                      { (benefit.button_link.includes('#')) ? <button className="button-learn sample-bt" key={index} data-id={benefit.button_link} onClick={() => scrollTo(`${benefit.button_link}`)}>{benefit.button_text} <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></button> :
                      <Link to={ benefit.button_link } className="button-learn">{ benefit.button_text } <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link> }
                    </div> :
                    <div className="icon__wrapper">
                      <div className="benefit_icon" dangerouslySetInnerHTML={{ __html: benefit.icon_svg }} />
                      <div className="benefit_text">
                        <h3>{ benefit.benefit_title }</h3>
                        <p>{ benefit.benefit_description }</p>
                      </div>
                    </div>
                  }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBenefit;