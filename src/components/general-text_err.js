import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GeneralText = ({ ...props}) =>  {
  const content = props.contentData;
  

  
  
  return (
    

    
    <div className={"generaltext " + (props.addClass ? props.addClass : '')}>

      <div className="container">
        <div className={`row middle-md ${(content.alignImage === "right") ? props.reverseClass : `reverse ${props.reverseClass}`}`}>
          <div className={props.col2}>
            <div className="textBox" 
                data-sal="slide-up" 
                data-sal-easing="ease"
                data-sal-delay="5">
              <div dangerouslySetInnerHTML={{ __html: content.description }} />
              {(() => {
                if(props.contentData.showButton) return (
                  <div className="btnWrap">
                    <Link to={ content.buttonLink } className="button-learn">{ content.buttonText } <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></Link>
                  </div>
                )
              })()}
            </div>
          </div>
          <div className={props.col1}>
            <div className="image__wrap"
                data-sal="slide-up" 
                data-sal-easing="ease"
                data-sal-delay="85">
              <Img fluid={content.image.localFile.childImageSharp.fluid} />
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralText;

