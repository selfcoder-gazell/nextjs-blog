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
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }