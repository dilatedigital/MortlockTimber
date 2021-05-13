import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const ExpandableContent = ({ ...props }) =>  {
  const content = props.data;
  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }

  return (
    <div className="expand__content">
      <div className="container container__small" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
        <div className="row">
          <div className="col-sm-offset-1 col-sm-5">
            <div className="price__image" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
			  { content.text_section_image && <Img fluid={content.text_section_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> }
            </div>
          </div>
          <div className="col-sm-6">
            <div className="pricing__text" >
              <h2 dangerouslySetInnerHTML={{ __html: content.text_section_title }} />
        <div dangerouslySetInnerHTML={{ __html: content.text_section_description }} />
        {readMoreActive ? <div className="addedBox" dangerouslySetInnerHTML={{ __html: content.text_section_expand_description }} /> : null }
        <div className="btn__wrap">
          <span className="button" role="button" tabIndex={0} onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span>
        </div>

   <div class="row cta_buttons">
              <div class="col-sm-12 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5"><div class="btn__wrap mr-45"><a href="/request-a-quote" class="button-learn">request a quote <span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></a></div>
             <div class="btn__wrap"><button class="button-learn"  onClick={() => scrollTo('#request-a-sample')}>request a SAMPLE <span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></button></div>
             </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpandableContent;