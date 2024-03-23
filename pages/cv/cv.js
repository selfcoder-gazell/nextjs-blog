import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from '/styles/utils.module.css';
import Image from "next/image";
import styles from './cv.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";

export default function CV() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        <div>
        {/* <div style={{ height: '100vh', overflow:'auto' }}> */}

        <Link href="/image/cv.pdf">

            

                <div className={styles.iconContainer}>
            <svg 
            className={styles.hexagonIcon}
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            >



              <path 
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              
              
              fill="#1e2530"></path>

<svg 
className={styles.hexagonIcon2}
x="11" 
y="13" 
width="159" 
height="183"
version="1.1"
xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>
    <FontAwesomeIcon
      icon={faIdBadge}
      x="46"  
      y="60" 
      width="60"
      height="60"
    />
  </svg>
              <text 
              className={styles.title}
              x="50%" 
              y="75%" 
              dominant-baseline="middle" 
              text-anchor="middle" 
              fill="white">CV .pdf</text>

              </svg>
              
              </div>
              
              </Link>

        
            
            {/* <iframe src="/image/cv.pdf" style={{ width: '100%', height: '100rem', border: 'none' }}></iframe> */}
        
            
        </div>

        </Layout>
        );
    }
