import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"

const ProductVideo = ({ data }) => {
  //console.log(data)
  const [playVideo, setPlayVideo] = useState(false)

  const funPlayVideo = () => {
    setPlayVideo(true)
  }
  return (
    <div className="project__detail single__product_video">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {data.video_heading || data.video_heading === undefined ? (
              <h2
                className="project_heading"
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-delay="5"
                dangerouslySetInnerHTML={{
                  __html: data.video_heading,
                }}
              />
            ) : null}
          </div>
          <div className="col-sm-8" style={{ display: "none" }}>
            {data.video_description ? (
              <div
                className="project_content"
                dangerouslySetInnerHTML={{
                  __html: data.video_description,
                }}
              />
            ) : null}
          </div>
        </div>
        {data.video_info.info_title && (
          <div className="project_infos">
            <div className="row">
              <div
                className="col-sm-4"
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-delay="5"
              >
                <span className="project__info">
                  <span className="title">{data.video_info.info_title}</span>
                  <span className="info">
                    {data.video_info.info_description}
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div
          className={
            playVideo ? "video__wrapper video--playing" : "video__wrapper"
          }
        >
          {playVideo && data.video_iframe_code ? (
            <div
              className="video__content"
              dangerouslySetInnerHTML={{
                __html: data.video_iframe_code,
              }}
            />
          ) : null}
          <div className="video__play">
            <div
              className="text__wrap"
              role="button"
              tabIndex={0}
              onClick={() => funPlayVideo()}
              onKeyDown={() => funPlayVideo()}
            >
              <svg
                className="icon"
                width="100pt"
                height="100pt"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m50 9c-22.633 0-41 18.367-41 41s18.367 41 41 41 41-18.367 41-41-18.367-41-41-41zm0 2c21.551 0 39 17.449 39 39s-17.449 39-39 39-39-17.449-39-39 17.449-39 39-39zm-10.625 18.969c-0.94531 0.019531-1.8672 0.28125-2.6562 0.75-1.5742 0.93359-2.6719 2.6836-2.7188 4.7812v28.906c0.046875 2.0977 1.1445 3.8398 2.7188 4.7812s3.6484 1.0664 5.5 0.0625l25-14.5c1.6484-0.95703 2.7812-2.7539 2.7812-4.8125s-1.1328-3.8242-2.7812-4.7812c-8.2266-4.9883-16.805-9.582-25-14.5-0.91797-0.51172-1.957-0.69922-2.8438-0.6875zm0.125 1.9688c0.54688 0.011719 1.1016 0.1875 1.75 0.5l24.969 14.438c1.0703 0.62109 1.7812 1.7305 1.7812 3.0625s-0.71094 2.4727-1.7812 3.0938c-8.3086 4.668-16.016 9.332-25 14.469-1.2461 0.66406-2.4805 0.55859-3.4688-0.03125s-1.707-1.6719-1.75-3.0938v-28.844c0.03125-1.4414 0.75391-2.5039 1.75-3.0938 0.66406-0.35156 1.2031-0.50781 1.75-0.5z" />
              </svg>
              <span className="text">Play Video</span>
            </div>
          </div>
          {data.video_image ? (
            <BackgroundImage
              className="bg__image"
              fluid={data.video_image.localFile.childImageSharp.fluid}
              alt="Mortlock Timber"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ProductVideo
