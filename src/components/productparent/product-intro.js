import React, { useState } from 'react';
import Img from 'gatsby-image';


const ProductApplication = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }

    return (
      <div className="application__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 product-intro-content">
              <div className="application__text">
			  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.video_heading }} />
            { content.video_description && <div dangerouslySetInnerHTML={{ __html: content.video_description }} /> }
            { (content.video_expand_description && readMoreActive) && <div className="extra__content" dangerouslySetInnerHTML={{ __html: content.video_expand_description }} /> }
            {content.video_expand_description && <span className="button" tabIndex={0} role="button" onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span> }
              </div>
            </div>
            <div className="col-sm-7 product-intro-image">
              <Img fluid={content.video_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductApplication;