import React, { useState } from 'react';
import Img from 'gatsby-image';


const SpecieLatestProjects = ({ ...props }) =>  {
  const content = props.data;
  
  return (
    <div className="product-species specie-products specie-latest-projects">
      <div className="general-heading">
        <h2>{content.latest_projects_heading}</h2>
      </div>
    <div className="specie-products__textbox" data-sal="slide-up"  data-sal-easing="ease" data-sal-delay="5" dangerouslySetInnerHTML={{ __html: content.latest_projects_description }} />
      <div className="species-boxes">
        <div className="row">
          {content.latest_projects_list ? content.latest_projects_list.map((project, index) => (
            <div className="col-xs-6 col-sm-4" data-sal="slide-up" 
            data-sal-easing="ease"
            data-sal-delay="5" data-key={`${index}`} key={index}>
              <div className="species-box">
              <a href={ project.project_link }>
                <div className="image">
                  { project.project_image ? <Img fluid={project.project_image.localFile.childImageSharp.fluid} alt={project.project_image.alt_text || ''} /> : null }
                </div>
                <span className="title">{project.project_title}</span>
                <span className="description">{project.project_description}</span>
                </a>
              </div>
            </div>
          )) : null }
        </div>
      </div>
    </div>
  )
}

export default SpecieLatestProjects;