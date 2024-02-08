// components/Navbar.js
import React from 'react';
import { useState } from 'react';
//import Lik component 
import Link from 'next/link';
//import CSS module for styling
import styles from './navbar.module.css';
import utilStyles from '../styles/utils.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';

//importing icons for my menu nav bar
import { faUniversalAccess } from '@fortawesome/free-regular-svg-icons';
import { faBullseye } from '@fortawesome/free-regular-svg-icons';
import { faBraille } from '@fortawesome/free-regular-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import { faLifeRing } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faMapSigns } from '@fortawesome/free-regular-svg-icons';


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
        viewBox="0 0 173.20508075688772 200" 
        height="200" 
        width="174" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg">
          <path 
          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
          className={clicked ? styles.clickedIcon : styles.defaultIcon}
          onClick={handleClick}
          fill="#1e2530"></path>
          <text 
          x="50%" 
          y="50%" 
          dominant-baseline="middle" 
          text-anchor="middle" 
          fill="white">HOME</text>
          </svg></Link>
          <Link href="/about/about">
            <svg 
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
                <text 
                x="50%" 
                y="50%" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                fill="white">ABOUT</text>
                </svg></Link>
          <Link href="/projects/project">
            <svg 
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
                <text 
                x="50%" 
                y="50%" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                fill="white">PROJECTS</text>
                </svg></Link>
          <Link href="/cv/cv">
            <svg 
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
              d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              className={clicked ? styles.clickedIcon : styles.defaultIcon}
              onClick={handleClick}
              fill="#1e2530"></path>
              <text 
              x="50%" 
              y="50%" 
              dominant-baseline="middle" 
              text-anchor="middle" 
              fill="white">CV</text></svg></Link>
          <Link href="/contact/contact">
            <svg 
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              className={clicked ? styles.clickedIcon : styles.defaultIcon}
              onClick={handleClick}
              fill="#1e2530"></path>
              <text 
              x="50%" 
              y="50%" 
              dominant-baseline="middle" 
              text-anchor="middle" 
              fill="white">CONTACT</text></svg></Link>
          <Link href="/blog/blog">
            <svg 
            viewBox="0 0 173.20508075688772 200" 
            height="200" 
            width="174" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
              className={clicked ? styles.clickedIcon : styles.defaultIcon}
              onClick={handleClick}
              fill="#1e2530">
                </path>
                <text 
                x="50%" 
                y="50%" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                fill="white">BLOG</text></svg></Link> 
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
