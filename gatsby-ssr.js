/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import ProjectsContext from "./src/context/ProjectsContext"
import { Location } from "@reach/router"

export const wrapPageElement = ({ element, props }) => {
  return (
    <ProjectsContext value={{ location: props.location }}>
      {element}
    </ProjectsContext>
  )
}

export function onRenderBody(
  { setHeadComponents }) {

setHeadComponents([
     <script
        type="text/javascript"
		async
        src="https://www.clickcease.com/monitor/stat.js"
      />,
]);

}