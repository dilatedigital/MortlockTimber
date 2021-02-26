import React, { useState, useRef, useEffect } from 'react';
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props
  return (
    <button className={className} onClick={onClick}>
      <span className="text">Next</span>
      <svg
        className="icon"
        width="100pt"
        height="100pt"
        version="1.1"
        viewBox="0 0 100 100"
      >
        <path d="m12.5 45.832h64.582v8.332h-64.582z" />
        <path d="m59.168 77.918l-5.8359-5.8359 22.086-22.082-22.086-22.082 5.8359-5.8359 27.914 27.918z" />
      </svg>
    </button>
  )
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
    <button className={className} onClick={onClick}>
      <span className="text">Prev</span>
      <svg
        className="icon"
        width="100pt"
        height="100pt"
        version="1.1"
        viewBox="0 0 100 100"
      >
        <path d="m87.5 45.832h-58.75l17.918-17.914-5.8359-5.8359-27.914 27.918 27.914 27.918 5.8359-5.8359-17.918-17.914h58.75z" />
      </svg>
    </button>
  )
}

const ProductGallery = ({ ...props }) =>  {
	const content = props.data;
  const [playVideo, setPlayVideo] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState(1)
  const carouselRef = useRef(null)

  useEffect(() => {
    carouselRef.current.slickGoTo(selectedIndex)
  }, [selectedIndex])

  const setGalleryIndex = (num, title) => {
    togglePopupOverlay()
  }

  const togglePopupOverlay = num => {
    setSelectedIndex(num)
    document.body.classList.toggle("popup__active")
  }
  
  const funPlayVideo = () => {
    setPlayVideo(true)
  }

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: selectedIndex,
  }

  const [readMoreActive, setReadMoreActive ] = useState(false);

  const expandContent = () => {
    setReadMoreActive(!readMoreActive);
  }
  
    return (
	<>
          <div className="gallery__wrapper">
		  <div className="top-content">
            <h2 dangerouslySetInnerHTML={{ __html: content.gallery_title }} />
            { content.gallery_description && <div dangerouslySetInnerHTML={{ __html: content.gallery_description }} /> }
            { (content.gallery_expand_description && readMoreActive) && <div className="extra__content" dangerouslySetInnerHTML={{ __html: content.gallery_expand_description }} /> }
            {content.gallery_expand_description && <span className="button" tabIndex={0} role="button" onKeyDown={ () => expandContent() } onClick={ () => expandContent() }>{!readMoreActive ? 'Read more' : 'Read less' }</span> }
            </div>
			<div className="galley__image">
              {content.gallery_images
                ? content.gallery_images.map((image, index) => (
                    <div
                      className="image"
                      tabIndex={0}
                      role="button"
                      key={index}
                      onClick={() => togglePopupOverlay(index)}
                      onKeyDown={() => togglePopupOverlay(index)}
                    >
                      <span className="expand_icon">
                        <svg
                          className="icon"
                          width="100pt"
                          height="100pt"
                          version="1.1"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m99.93 2.9219c-0.023438-0.10547-0.0625-0.20703-0.09375-0.30859-0.035157-0.125-0.066407-0.24609-0.11328-0.36719-0.050781-0.12109-0.12109-0.23438-0.18359-0.35156-0.050781-0.089843-0.089843-0.18359-0.15234-0.27344-0.26562-0.39844-0.60547-0.74219-1.0078-1.0078-0.089844-0.0625-0.19141-0.10547-0.28516-0.15625-0.11328-0.0625-0.21875-0.12891-0.33984-0.17969-0.12109-0.050782-0.24609-0.078125-0.37109-0.11719-0.10156-0.027344-0.19922-0.066406-0.30469-0.089844-0.23438-0.042969-0.47656-0.070312-0.71484-0.070312h-21.816c-2.0078 0-3.6367 1.6289-3.6367 3.6367 0 2.0078 1.6289 3.6367 3.6367 3.6367h13.039l-26.52 26.52c-1.4219 1.418-1.4219 3.7227 0 5.1406 0.70703 0.71094 1.6406 1.0664 2.5703 1.0664 0.92969 0 1.8633-0.35547 2.5703-1.0664l26.52-26.52v13.039c0 2.0078 1.6289 3.6367 3.6367 3.6367 2.0078 0 3.6367-1.6289 3.6367-3.6367v-21.816c0-0.23828-0.027344-0.47656-0.070312-0.71484" />
                          <path d="m33.793 61.066l-26.52 26.52v-13.039c0-2.0078-1.6289-3.6367-3.6367-3.6367-2.0078 0-3.6367 1.6289-3.6367 3.6367v21.816c0 0.23828 0.027344 0.47656 0.074219 0.71484 0.019531 0.10547 0.058593 0.20703 0.089843 0.30859 0.035157 0.125 0.066407 0.24609 0.11328 0.36719 0.050781 0.12109 0.12109 0.23438 0.18359 0.34766 0.050781 0.09375 0.089843 0.1875 0.15234 0.27734 0.26562 0.39844 0.60547 0.74219 1.0078 1.0078 0.089844 0.0625 0.1875 0.10156 0.28125 0.15234 0.11328 0.0625 0.22266 0.13281 0.34375 0.18359 0.12109 0.046875 0.24609 0.078125 0.36719 0.11328 0.10547 0.03125 0.20312 0.070312 0.30859 0.089843 0.23828 0.046875 0.47656 0.074219 0.71484 0.074219h21.816c2.0078 0 3.6367-1.6289 3.6367-3.6367 0-2.0078-1.6289-3.6367-3.6367-3.6367h-13.039l26.52-26.52c1.4219-1.418 1.4219-3.7227 0-5.1406-1.418-1.4219-3.7227-1.4219-5.1406 0" />
                          <path d="m3.6367 29.09c2.0078 0 3.6367-1.6289 3.6367-3.6367v-13.039l26.516 26.52c0.71094 0.70703 1.6406 1.0625 2.5742 1.0625 0.92578 0 1.8594-0.35547 2.5703-1.0625 1.418-1.4219 1.418-3.7227 0-5.1445l-26.52-26.516h13.039c2.0078 0 3.6367-1.6289 3.6367-3.6367 0-2.0078-1.6289-3.6367-3.6367-3.6367h-21.816c-0.23828 0-0.47656 0.027344-0.71484 0.070312-0.10547 0.023438-0.20312 0.0625-0.30469 0.089844-0.125 0.039063-0.25 0.066406-0.37109 0.11719-0.12109 0.050781-0.22656 0.11719-0.33984 0.17969-0.097656 0.050781-0.19531 0.09375-0.28516 0.15625-0.40234 0.26562-0.74219 0.60938-1.0078 1.0078-0.0625 0.089844-0.10156 0.18359-0.15234 0.27344-0.0625 0.11719-0.13281 0.23047-0.18359 0.35156-0.046875 0.12109-0.078125 0.24219-0.11328 0.36719-0.03125 0.10156-0.070312 0.20312-0.089843 0.30859-0.046875 0.23828-0.074219 0.47656-0.074219 0.71484v21.816c0 2.0078 1.6289 3.6367 3.6367 3.6367" />
                          <path d="m96.363 70.91c-2.0078 0-3.6367 1.6289-3.6367 3.6367v13.039l-26.52-26.523c-1.418-1.418-3.7227-1.418-5.1445 0-1.418 1.4219-1.418 3.7266 0 5.1445l26.523 26.52h-13.039c-2.0078 0-3.6367 1.6289-3.6367 3.6367 0 2.0078 1.6289 3.6367 3.6367 3.6367h21.816c0.23828 0 0.47656-0.027344 0.71484-0.074219 0.10547-0.019531 0.20312-0.058593 0.30859-0.089843 0.12109-0.035157 0.24609-0.066407 0.36719-0.11328 0.12109-0.050781 0.23047-0.12109 0.34375-0.18359 0.09375-0.050781 0.19141-0.089843 0.28125-0.15234 0.40234-0.26562 0.74219-0.60938 1.0078-1.0078 0.0625-0.089844 0.10156-0.18359 0.15234-0.27734 0.0625-0.11328 0.13281-0.22656 0.18359-0.34766 0.046875-0.12109 0.078125-0.24219 0.11328-0.36719 0.03125-0.10156 0.070312-0.20312 0.09375-0.30859 0.042968-0.23828 0.070312-0.47656 0.070312-0.71484v-21.816c0-2.0078-1.6289-3.6367-3.6367-3.6367" />
                        </svg>
                      </span>
					  { image.gallery_image && <Img fluid={ image.gallery_image.localFile.childImageSharp.fluid } alt="Mortlock Timber" /> }
                    </div>
                  ))
                : null}
            </div>
			<a class="button white" href={content.gallery_button_link}>{content.gallery_button_text}</a>
          </div>
      <div className="popup__wrapper gallery--popup">
        <button
          className="popup__close"
          onClick={() => setGalleryIndex()}
          onKeyDown={() => setGalleryIndex()}
        >
          <span className="text">Close</span>
          <svg
            className="icon"
            width="100pt"
            height="100pt"
            version="1.1"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m54.168 50 32.477-32.582c1.125-1.1523 1.1016-2.9922-0.050781-4.1172-1.1523-1.1211-2.9922-1.0977-4.1133 0.054688l-32.48 32.477-32.582-32.477c-1.1367-1.0469-2.8906-1.0117-3.9844 0.078125-1.0898 1.0938-1.125 2.8477-0.078125 3.9844l32.477 32.582-32.477 32.582c-0.58203 0.53906-0.91406 1.293-0.91406 2.0859 0 0.78906 0.33203 1.5469 0.91406 2.082 0.53125 0.54688 1.2656 0.85938 2.0312 0.85938s1.4961-0.3125 2.0312-0.85938l32.582-32.582 32.582 32.477c0.53906 0.58203 1.293 0.91406 2.0859 0.91406 0.78906 0 1.5469-0.33203 2.082-0.91406 0.58203-0.53516 0.91406-1.2891 0.91406-2.082s-0.33203-1.5469-0.91406-2.082z" />
          </svg>
        </button>
        <div className="container">
          <div className="popup__content">
            <Slider
              className="gallery__slider"
              {...sliderSettings}
              ref={carouselRef}
            >
              {content.gallery_images
                ? content.gallery_images.map((image, index) => (
                    <div className="image" key={index}>
					  { image.gallery_image && <Img fluid={ image.gallery_image.localFile.childImageSharp.fluid } alt="Mortlock Timber" /> }
                    </div>
                  ))
                : null}
            </Slider>
          </div>
        </div>
      </div>
	  </>
    )
}

export default ProductGallery;