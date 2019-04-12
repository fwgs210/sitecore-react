import {
    addComponent,
    CommonFieldTypes,
  } from "@sitecore-jss/sitecore-jss-manifest"
  
  export default manifest => {
    addComponent(manifest, {
      name: "HelloWorld",
      displayName: "HelloWorld",
    })
  }