import React from 'react';
import Img from 'gatsby-image';

import SampleRequest from '../forms/timber-guide-request-form-30668';

const RequestSample = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="request__block" id="download-timber-guide">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="request__text">
              {content.request_block_heading ? <h2 dangerouslySetInnerHTML={{ __html: content.request_block_heading }} /> : null }
              {content.request_sample_description ? <div className="request__content" dangerouslySetInnerHTML={{ __html: content.request_sample_description }} /> : null }
              { content.request_sample_image ? 
                <div className="request__image timber-guide-image" data-sal="slide-up" 
                data-sal-easing="ease"
                data-sal-delay="5">
                  <Img fluid={content.request_sample_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
                </div>
                : null }
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-7">
            <SampleRequest pageID={props.wpPageId} data={content} location={props.location} gtag={props.gtag} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestSample;