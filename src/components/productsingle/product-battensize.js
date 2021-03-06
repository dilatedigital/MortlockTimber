import React from 'react';

const BattenShapeAndSize = ({ ...props }) =>  {
  const content = props.data;
  return (
    <div className="shapes__boxes">
      <div className="general-heading">
        <h2>{ content.shape_and_size_title }</h2>
      </div>
      <div className="row">
        {content.batten_shapes ? 
          content.batten_shapes.map((size, index) => (
            <div className="col-sm" key={index}>
              {(() => {
                if(content.batten_shapes.length > 1) {
                  return (
                    <div className="shape__column" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
                      <span className="title" dangerouslySetInnerHTML={{ __html: size.shape_and_size_title }} />
                      { size.shape_icons ? 
                          <ul className="block-icons">
                          { size.shape_icons.map((icon, index) => (
                            <li key={index}>
                              <div className="block-iconwrap" dangerouslySetInnerHTML={{ __html: icon.shape_svg }} />
                              <span className="text">{ icon.shape_title }</span>
                            </li>
                          ))}
                          </ul>
                      : null }
                    </div>
                  )
                } else {
                  return (
                    <div className="shape__column single__column" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
                      { size.shape_icons ? 
                          <ul className="block-icons">
                          { size.shape_icons.map((icon, index) => (
                            <li key={index}>
                              <div className="block-iconwrap" dangerouslySetInnerHTML={{ __html: icon.shape_svg }} />
                              <span className="text">{ icon.shape_title }</span>
                            </li>
                          ))}
                          </ul>
                      : null }
                    </div>
                  )
                }
              })()}
              
            </div>
          ))
        : null }
      </div>
    </div>
  )
}

export default BattenShapeAndSize;