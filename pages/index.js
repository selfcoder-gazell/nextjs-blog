// Finally, let's update the homepage.
// Open pages/index.js and replace its content with:
//import React (not mandatory in modern React versions but good practice)

//import any necessary components from your project

 
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
//import Link component to be able to Link to another page
import Link from "next/link";
//import { navMenu } from '../components/navMenu';

//import navMenu from '../components/navMenu';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <siteTitle></siteTitle>
        <title>Květa Mooney website</title>
        <meta name="Květa Mooney portfolio" content="Květa Mooney portfolio"/>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <h1>The construction of this site has been put on hold while studying Google UX Design course.</h1>
        <p>Hello, I'm Květa. </p>
        <p>
        "You've just landed on my personal site. In the ABOUT section, 
        you can find more about my recent journey into tech. 
        Feel free to print out/download my resume in the CV section, 
        and if you'd like to contact me, click the CONTACT icon. Currently, 
        there is no content in the PROJECTS nor BLOG section as both are under construction." 
        
        </p>
      </section>
      
     
        
        
        {/*<navMenu></navMenu>*/}
          {/* Main content of the home page */}
       
     
      {/* <Link href="/posts/first-post">To First-post</Link> */}

    </Layout>
  );
}

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className={styles.title}>
//           Read <a href="/posts/first-post">this page!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
//         </a>
//       </footer>

//       <style jsx>{`
//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         footer img {
//           margin-left: 0.5rem;
//         }
//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           text-decoration: none;
//           color: inherit;
//         }
//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family:
//             Menlo,
//             Monaco,
//             Lucida Console,
//             Liberation Mono,
//             DejaVu Sans Mono,
//             Bitstream Vera Sans Mono,
//             Courier New,
//             monospace;
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family:
//             -apple-system,
//             BlinkMacSystemFont,
//             Segoe UI,
//             Roboto,
//             Oxygen,
//             Ubuntu,
//             Cantarell,
//             Fira Sans,
//             Droid Sans,
//             Helvetica Neue,
//             sans-serif;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   );
// }
