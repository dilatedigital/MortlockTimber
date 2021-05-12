import React, { Component } from 'react';
import Img from 'gatsby-image';
import Slider from "react-slick";
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}><span className="text">Next</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m12.5 45.832h64.582v8.332h-64.582z"/><path d="m59.168 77.918l-5.8359-5.8359 22.086-22.082-22.086-22.082 5.8359-5.8359 27.914 27.918z"/></svg></button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}><span className="text">Prev</span><svg className="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100"><path d="m87.5 45.832h-58.75l17.918-17.914-5.8359-5.8359-27.914 27.918 27.914 27.918 5.8359-5.8359-17.918-17.914h58.75z"/></svg></button>
  );
}

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};


const navSliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false
};
class ProductApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="application__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="application__text">
                <div className="application__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: this.props.data.application_content }} />
          <div class="row cta_buttons margin-t-b">
              <div class="col-sm-12 sal-animate" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5"><div class="btn__wrap"><a href="/request-a-quote" class="button-learn">request a quote <span class="btnArrow"><svg class="icon" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z"></path></svg></span></a></div></div>
         
              </div>
            
                <div className="application__iconbox">
                  <Slider className="app__list" ref={slider => (this.slider2 = slider)} focusOnSelect={true} asNavFor={this.state.nav1} {...navSliderSettings}>
                    {this.props.data.application_gallery_image.map((list, index) => (
                      <div className="app_list" key={index}>
                        <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: list.image_icon }} />
                        <span className="text">{list.image_title}</span>
                      </div>
                    ))}
                  </Slider>
                  {/* <div className="app__list">
                    {content.application_gallery_image.map((list, index) => (
                      <div className="app_list" key={index} role="button" tabIndex={0} onKeyDown={() => slideToGo(index)} onClick={() => slideToGo(index)}>
                        {(() => {
                          if(list.image_application_tag === "exterior") { 
                            return (
                              <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: content.exterior_svg }} />
                            ) 
                          } else if(list.image_application_tag === "interior") {
                            return (
                              <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: content.interior_svg }} />
                            ) 
                          } else if(list.image_application_tag === "structural") {
                            return (
                              <div className="icon_wrap" dangerouslySetInnerHTML={{ __html: content.structural_svg }} />
                            )
                          }
                        })()}
                        <span className="text">{list.image_application_tag}</span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-7">
              <Slider className="gallery__wrapper" ref={slider => (this.slider1 = slider)} asNavFor={this.state.nav2} {...sliderSettings}>
                {this.props.data.application_gallery_image.map((slide, index) => (
                  <div className="slide" key={index}>
                    <div className="gallery__image">
                      {slide.gallery_image && <Img fluid={slide.gallery_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />}
                    </div>
                    <span className="gallery__text">{ slide.image_title }</span>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductApplication;