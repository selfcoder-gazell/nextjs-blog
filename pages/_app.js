import React from "react";
// to load global CSS to the application, create a file called pages/_app.js with the following content
// The default export of _app.js is a top-level React component that wraps all the pages in the application
// You can use this component to keep state when navigatin between pages, or to add global styles
// You can add gloal CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else
// The reason that global CSS cant be imported outside of pages/_app.js is that global CSS affects all elements on teh page. 
// If you were to navigate from the hoepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally. 

//Finally, import the CSS file inside the pages/_app.js file you've created earlier on:
import "../styles/global.css"
// Any styles imported in _app.js will be applied globally, to all pages of the application.
// i can import global.css into the pages/_app.js file ONLY

// Let's assume that you have a standard install and that pages is in the root.

//To do this you'll start by creating a pages/_app.js. 
//If you already have one, you can modify it so that 
//it includes the extra bits you need.


import { config } from '@fortawesome/fontawesome-svg-core'

//Next.js allows you to import CSS directly in .js files. It handles 
//optimization and all the necessary Webpack configuration to make this work.
import '@fortawesome/fontawesome-svg-core/styles.css'
//You change this configuration value to false so that the 
//Font Awesome core SVG library will not try and insert <style> elements into the <head> of the page. Next.js blocks this from happening anyway so you might as well not even try.
config.autoAddCss = false


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }