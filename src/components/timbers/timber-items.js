import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
	
const TimberItems = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  
  var readMoreActive0 = false;
  var readMoreActive1 = false;
  var readMoreActive2 = false;

  function expandContent(value){
	  console.log(value);
	  var displayValue = document.getElementById("extra__content_"+value).style.display;
	  if(displayValue == "none"){
		  document.getElementById("extra__content_"+value).style.display = "block";
		  document.getElementById("products_section_button_"+value).textContent = "Read Less";
	  }
	  else{
	  document.getElementById("extra__content_"+value).style.display = "none";
	  document.getElementById("products_section_button_"+value).textContent = "Read More";
	  }
  }  
 

    return (
      <div className="application__wrapper">
        <div className="container">
	  {content.timber_item ? content.timber_item.map((timber_specie,index) => (
          <div className="row product-item timber-item">
            <div className="col-sm-5 product-image timber-image">
			{ timber_specie.timber_aside_image && <Img fluid={timber_specie.timber_aside_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> }
            </div>
            <div className="col-sm-7 product-content timber-content">
              <div className="application__text">
			  <h2 className="main-heading" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: timber_specie.timber_title }} />
      { timber_specie.timber_qualities && <div dangerouslySetInnerHTML={{ __html: timber_specie.timber_qualities }} /> }
			{ timber_specie.timber_description && <div dangerouslySetInnerHTML={{ __html: timber_specie.timber_description }} /> }
            { (timber_specie.timber_expand_description) && <div id={"extra__content_"+index} className={"extra__content"+" hide"} style={{ display: `none` }} dangerouslySetInnerHTML={{ __html: timber_specie.timber_expand_description }} /> }
            {timber_specie.timber_expand_description && <span id={"products_section_button_"+index} className="button product_read_more" tabIndex={0} role="button" onKeyDown={() => expandContent(index)} onClick={() => expandContent(index)}>Read more</span> }
			<a class="button white" href={timber_specie.button_link}>{timber_specie.button_text}</a>
      <a class="button primary" href={timber_specie.button_link_two}>{timber_specie.button_text_two}</a>
              </div>
            </div>
          </div>
		  )) : null }
        </div>
      </div>
    )
}

export default TimberItems;