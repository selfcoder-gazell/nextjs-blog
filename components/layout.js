import Head from 'next/head';
import Image from 'next/image'; //importing image from ???
import React from 'react'; // importing react from react
import Header from './Header'; //importing header from components

import styles from './layout.module.css'; //import layout specific styles
//import styles for HTML elements all pages
import utilStyles from '../styles/utils.module.css'; 
//import the Font Awesome core styles and config
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Footer from './footer'; //importing footer components
//   Third, open components/layout.js and replace its 
//   content with the following code, 
//   changing Your Name to an actual name:
const name = 'Květa Mooney';
export const siteTitle = 'Next.js Kveta M. page';

// export default function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>;
//   }
//the component children and home are rendered in this function Layout
export default function Layout({ children, home }) {
  return (

      <section className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
          lang="en"
          name="description"
          content="Kveta Mooney personal website in Next.js"/>
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      <Header/>

        {/* <header className={styles.navbarContainer}>
          <div className={styles.navContainer}>
          {home ? (
            <>
              <Image
              priority
              src="/image/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="profileimage"
/>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
              ) 
            : (
            <>
              <Link href="/">
                <Image
                priority
                src="/image/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Home"/>
              </Link>

              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                {name}
                </Link>
              </h2>
          
            </>
          )}

        <navMenu>

        </navMenu>
        </div>
      </header> */}
      
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}

<Footer></Footer>
    </section>
  );
}