// components/Navbar.js
import React from 'react'; 
//importing styles for letters
import { Poppins, Roboto, Inter } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const popins = Poppins ({
  weight: "400",
  style: "italic",
  subsets: ["devanagari"],
});
const iter = Inter ({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
//importing useState React component 
import { useState } from 'react';
//import Lik component 
import Link from 'next/link';
//import CSS module for styling
import styles from './navbar.module.css';
import utilStyles from '../styles/utils.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = true;

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

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <nav>
      

      
      <ul className={styles.menu}>
        <Link href="/">
          <svg 
        className={styles.hexagonIconOuter}
        viewBox="0 0 173.20508075688772 200" 
        height="200" 
        width="174" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg">

          <path 
          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
          // className={clicked ? styles.clickedIcon : styles.defaultIcon}
          // onClick={handleClick}
          fill="#1e2530">

          </path>

          <svg 
              className={styles.hexagonIcon}
              x="12" 
              y="13" 
              width="159" 
              height="183"
              version="1.1"xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>

          <FontAwesomeIcon
          icon={faUniversalAccess}
          x="49"
          y="60"
          width="50"
          height="50"
          />
</svg>
          <text 
          className={styles.title}
          x="50%" 
          y="69%" 
          dominant-baseline="middle" 
          text-anchor="middle" 
          fill="white">WELCOME/HOME</text>

          

          </svg></Link>

          <Link href="/about/about">

            <svg 
            className={styles.hexagonIconOuter}
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
              className={clicked ? styles.clickedIcon : styles.defaultIcon}
              onClick={handleClick}
              fill="#1e2530">



                
                </path>

                <svg 
              className={styles.hexagonIcon}
              x="12" 
              y="13" 
              width="159" 
              height="183"
              version="1.1"xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>
                
                <FontAwesomeIcon
          icon={faBullseye}
          x="60"
          y="70"
          width="50"
          height="50"
          />
          </svg>

                <text 
                className={styles.title}
                x="50%" 
                y="69%" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                fill="white">ABOUT</text>
            
                </svg></Link>

          <Link href="/projects/project">
            


            <svg 
            className={styles.hexagonIconOuter}
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              className={clicked ? styles.clickedIcon : styles.defaultIcon}
              onClick={handleClick}
              fill="#1e2530">
                </path>
                <svg 
              className={styles.hexagonIcon}
              x="12" 
              y="13" 
              width="159" 
              height="183"
              version="1.1"xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>
                <FontAwesomeIcon
          icon={faLifeRing}
          x="60"
          y="70"
          width="50"
          height="50"
          />
          </svg>
                <text 
                className={styles.title}
                x="50%" 
                y="69%" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                fill="white">PROJECTS</text>

                </svg></Link>

          <Link href="/cv/cv">
            <svg 
            className={styles.hexagonIconOuter}
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              // className={clicked ? styles.clickedIcon : styles.defaultIcon}
              // onClick={handleClick}
              fill="#1e2530"></path>

<svg 
              className={styles.hexagonIcon}
              x="12" 
              y="13" 
              width="159" 
              height="183"
              version="1.1"xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>
        

              <FontAwesomeIcon
               icon={faIdBadge}
               x="60"
                y="70"
              width="50"
              height="50"
               />
               </svg>

              <text 
              className={styles.title}
              x="50%" 
              y="69%" 
              dominant-baseline="middle" 
              text-anchor="middle" 
              fill="white">CV</text></svg></Link>

          <Link href="/contact/contact">
            <svg 
            className={styles.hexagonIconOuter}
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              className={clicked ? styles.clickedIcon : styles.defaultIcon}
              onClick={handleClick}
              fill="#1e2530"></path>

<svg 
              className={styles.hexagonIcon}
              x="12" 
              y="13" 
              width="159" 
              height="183"
              version="1.1"xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>

                    <FontAwesomeIcon
          icon={faMapSigns}
          x="60"
          y="70"
          width="50"
          height="50"
          />
          </svg>
         
              <text 
              className={styles.title}
              x="50%" 
              y="69%" 
              dominant-baseline="middle" 
              text-anchor="middle" 
              fill="white">CONTACT</text></svg></Link>

          <Link href="/blog/blog">
            <svg 
            className={styles.hexagonIconOuter}
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174"  
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">

              <path 
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              // className={clicked ? styles.clickedIcon : styles.defaultIcon}
              // onClick={handleClick}
              fill="#1e2530">
                </path>

                <svg 
              className={styles.hexagonIcon}
              x="12" 
              y="13" 
              width="159" 
              height="183"
              version="1.1"xmlns="http://www.w3.org/2000/svg"> 
{/* <!-- Adjust width and height for the inner hexagon --> */}
    <path 
      d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
    //   <!-- Adjust the path for the smaller hexagon -->
    >

    </path>
                

                <FontAwesomeIcon
          icon={faBook}
          x="60"
          y="70"
          width="50"
          height="50"/>
          </svg>
                <text 
                className={styles.title}
                x="50%" 
                y="69%" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                fill="white">BLOG</text>
                </svg>
                </Link> 
    </ul>
    
    </nav>
    
  );
};

 export default Navbar;

//  className={styles.container}>

// const Navbar = () => { 
//     return ( 
//         <nav>
// <div class="hexagon-menu clear">
//                                     <div className={styles.hexagon-item}>
//                                         <div className={styles.hex-item}>
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div className={styles.hex-item}>
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  className={styles.hex-content}>
//                                             <span className={styles.hex-content-inner}>
//                                                 <span className={styles.icon}>
//                                                     <i className={styles.fa fa-universal-access}></i>
//                                                 </span>
//                                                 <span className={styles.title}>Welcome</span>
                                            
//                                             {/* <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a>
//                                     </div>
//                                     <div class="hexagon-item">
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  class="hex-content">
//                                             <span class="hex-content-inner">
//                                                 <span class="icon">
//                                                     <i class="fa fa-bullseye"></i>
//                                                 </span>
//                                                 <span class="title">About</span>
//                                             </span>
//                                             <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a>
//                                     </div>
//                                     <div class="hexagon-item">
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  class="hex-content">
//                                             <span class="hex-content-inner">
//                                                 <span class="icon">
//                                                     <i class="fa fa-braille"></i>
//                                                 </span>
//                                                 <span class="title">Services</span>
//                                             </span>
//                                             <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a>    
//                                     </div>
//                                     <div class="hexagon-item">
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  class="hex-content">
//                                             <span class="hex-content-inner">
//                                                 <span class="icon">
//                                                     <i class="fa fa-id-badge"></i>
//                                                 </span>
//                                                 <span class="title">Resume</span>
//                                             </span>
//                                             <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a>
//                                     </div>
//                                     <div class="hexagon-item">
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  class="hex-content">
//                                             <span class="hex-content-inner">
//                                                 <span class="icon">
//                                                     <i class="fa fa-life-ring"></i>
//                                                 </span>
//                                                 <span class="title">Works</span>
//                                             </span>
//                                             <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a>
//                                     </div>
//                                     <div class="hexagon-item">
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  class="hex-content">
//                                             <span class="hex-content-inner">
//                                                 <span class="icon">
//                                                     <i class="fa fa-clipboard"></i>
//                                                 </span>
//                                                 <span class="title">Testimonials</span>
//                                             </span>
//                                             <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a>
//                                     </div>
//                                     <div class="hexagon-item">
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <div class="hex-item">
//                                             <div></div>
//                                             <div></div>
//                                             <div></div>
//                                         </div>
//                                         <a  class="hex-content">
//                                             <span class="hex-content-inner">
//                                                 <span class="icon">
//                                                     <i class="fa fa-map-signs"></i>
//                                                 </span>
//                                                 <span class="title">Contact</span>
//                                             </span>
//                                             <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
//                                         </a> */}
//                                     </div>
//                                 </div>
//                                 </nav>
//                                   );
//     };

//     export default Navbar;

{/* <main class="site-wrapper">
  <div class="pt-table desktop-768">
    <div class="pt-tablecell page-home relative" style="background-image: url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
    background-position: center;
    background-size: cover;">
                    <div class="overlay"></div>

                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div class="page-title  home text-center">
                                  <span class="heading-page"> Welcome to My Page
                                  </span> */}
