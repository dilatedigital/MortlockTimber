import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';


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
            {content.video_expand_description && <span className="button readmore-nobg" tabIndex={0} role="button" onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span> }
              </div>
             
             <div class="row cta_buttons">
              <div class="col-sm-6 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5"><div class="btn__wrap"><a href="/request-a-quote" class="button-learn">request a quote <span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></a></div></div>
                
                <div class="col-sm-6 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5"><div class="btn__wrap"><button class="button-learn"  onClick={() => scrollTo('#request-a-sample')}>request a SAMPLE <span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></button></div></div>
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