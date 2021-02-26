import React, { useState } from 'react';
import Img from 'gatsby-image';

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpandableContent;