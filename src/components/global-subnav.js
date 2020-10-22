import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const GlobalSubNav = ({ ...props }) => {
  return (
    <div className="subnav__holder">
      <div className="container">
        <ul className="subnav">
          {props.data
            ? props.data.map((item, index) => (
                <li key={index}>
                  <button
                    data-id={`#${item}`}
                    onClick={() => scrollTo(`#${item}`)}
                  >
                    {item.replace("-", " ")}
                  </button>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default GlobalSubNav
