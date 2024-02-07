
// import styles from "./layout.module.css";

// export default function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>;
//   }

//   Third, open components/layout.js and replace its 
//   content with the following code, 
//   changing Your Name to an actual name:

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from '/components/navbar.js';


const name = 'Kveta Mooney';
export const siteTitle = 'Next.js Sample Website';

//the component children and home are rendered in this function Layout
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
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
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
            <Navbar />
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}