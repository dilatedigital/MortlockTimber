import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

const removePopupActiveClass = () => {
  document.body.classList.remove('popup__active');
}

const ProductFinishes = ({ ...props }) =>  {
  const content = props.data;

  return (
    <div className="popup__wrapper">
      <button className="popup__close" onClick={ () => removePopupActiveClass() }><span className="text">Close</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m54.168 50 32.477-32.582c1.125-1.1523 1.1016-2.9922-0.050781-4.1172-1.1523-1.1211-2.9922-1.0977-4.1133 0.054688l-32.48 32.477-32.582-32.477c-1.1367-1.0469-2.8906-1.0117-3.9844 0.078125-1.0898 1.0938-1.125 2.8477-0.078125 3.9844l32.477 32.582-32.477 32.582c-0.58203 0.53906-0.91406 1.293-0.91406 2.0859 0 0.78906 0.33203 1.5469 0.91406 2.082 0.53125 0.54688 1.2656 0.85938 2.0312 0.85938s1.4961-0.3125 2.0312-0.85938l32.582-32.582 32.582 32.477c0.53906 0.58203 1.293 0.91406 2.0859 0.91406 0.78906 0 1.5469-0.33203 2.082-0.91406 0.58203-0.53516 0.91406-1.2891 0.91406-2.082s-0.33203-1.5469-0.91406-2.082z"/></svg></button>
      <div className="popup__hold">
        <div className="container container__big">
          <div className="popup__heading">
          <h2>{props.title} Finishes</h2>
      
  <div class="row cta_buttons nomargin">
     <div class="col-sm-6 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
     <a href={props.link.link} className="button-learn" download={'${props.title} Finishes'} rel="noreferrer" target="_blank">Download all finishes <span className="btnArrow"><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"/></svg></span></a>
</div>
 <div class="col-sm-6 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
<a href="/request-a-quote" class="button-learn">request a quote <span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></a>
</div>
               
              </div>
          <div className="content__clear">
            <span className="small__info">As timber is a natural product it can vary in colour and other natural characteristics. The images may not be a true representation of the finished product. We recommend requesting samples and viewing images of projects before making your final decision.</span>
          </div>
          </div>
          <div className="popup__content">
            <div className="finishes__wrapper">
              <div className="row">
                { content ?
                  content.map((finish, index) => (
                    <div className="col-sm-3" key={index}>
                      <div className="finish__box">
                        <div className="finish__image">
                          {finish.finishes_image_thumbnail ? <Img fluid={finish.finishes_image_thumbnail.localFile.childImageSharp.fluid} alt={finish.alt_text} /> : null}
                        </div>
                        <span className="finish__title" dangerouslySetInnerHTML={{ __html: finish.finishes_title }} />
                        <span className="finish__subtitle" dangerouslySetInnerHTML={{ __html: finish.finishes_use }} />
                      </div>
                    </div>
                  ))
                : null }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFinishes;