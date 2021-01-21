import React, { useState } from 'react';
import Img from 'gatsby-image';

const ProductOverview = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;

  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }

  return (
    <div className="product__overview" id={id}>
    { content.product_overview_aside_title ? <div className="aside__text" dangerouslySetInnerHTML={{ __html: content.product_overview_aside_title }} /> : null }
      <div className="container">
        <div className="row">
          <div className="col-sm-4 newheight">
            <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.product_title }} />
            <div className="aside__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="10">
              <Img fluid={content.product_aside_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            { content.product_description && <div dangerouslySetInnerHTML={{ __html: content.product_description }} /> }
            { (content.product_expand_description && readMoreActive) && <div className="extra__content" dangerouslySetInnerHTML={{ __html: content.product_expand_description }} /> }
            {content.product_expand_description && <span className="button" tabIndex={0} role="button" onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview;