import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from 'react'; 
import { useState } from 'react';
import styles from './about.module.css';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//importing icons for my nav bar 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUniversalAccess,
  faBullseye,
  faBraille,
  faIdBadge,
  faLifeRing,
  faClipboard,
  faMapSigns,
  faAddressCard,
  faBook
} from "@fortawesome/free-solid-svg-icons";

    
export default function About() {
    return (
        <Layout>
        
        <Head>
            <title>About me</title>
        </Head>
{/* <Link href="/">
    <div className={styles.mainContainer}>
    

    <div className={styles.iconContainer}>
   
    <svg 
            
            viewBox="0 0 173.20508075688772 200" 
            height="100" 
            width="74" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg"
            
            >
              <path 
              
              className={styles.hexagonIcon}
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
            
              fill="#1e2530">

              </path>

           

             <text 
               className={styles.title}
               x="50%" 
               y="80%" 
               
               dominant-baseline="middle" 
               text-anchor="middle" 
               fill="white"> H O M E </text>

<svg 
            className={styles.middleIcon}
            viewBox="0 0 512 512" 
            x="35"
            y="50"
            height="100" 
            width="100" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">


<path 
                 d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
            //      className={clicked ? styles.clickedIcon : styles.defaultIcon}
            //   onClick={handleClick}
              fill="#F18">
            
               
              </path>  

            </svg>

           </svg>

   </div>
  
                 </div>
                 </Link> */}


        <div>
              <p>Diving headfirst into the world of software development was a decision born out of curiosity and a nudge from a friend back in 2022.
              I dismissed the idea, imagining a solitary existence glued to screens for endless hours - a prospect that felt isolating and disheartening.
              </p>
              <br></br>
              <p>
              But as I delved deeper into  he field, I discovered that I was wrong, soo.. wrong!
              As a social creature, I craved connections and collaboration, seeking a work environment similar to a second family.
              </p>
         <br></br>
         <p>I have been lost in the ocean of information and the amount of coding languages I could choose from. 
            When I came across School of Code I could not believe my luck. 
              My attempt to be accepted into the <Link href="https://www.schoolofcode.co.uk/">School of Code</Link> in January 2023 FAILED. 
              It is scary to change a career at any age and I felt exactly that.
              Fear of change, failure, shame ... ect. IMPOSTER SYNDROM written all over.</p>
              <br></br>
              <p> I applied again and I got accepted in September 2023 - SUCCESS at last. 
              Along with 90 like-minded individuals selected from a pool of over 3000 applications, 
              we delved straight into full-stack technologies. 
              We learned and worked in small groups of 4-6 during this intense 16 weeks long bootcamp.
              </p>
              <p><br></br>It felt as i was being a traveller in a foreign country without a map. 
              Feelings of disorientation at first, but as I explored and learned, 
              I started to recognize landmarks, understand the language, and find my way around. 
                </p>
                <p>I am still finding my way .... but now I got a MAP :-)  </p>


            </div>
        </Layout>
    
    ); 
}
