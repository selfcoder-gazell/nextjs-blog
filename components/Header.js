
//import React, { Component } from 'react';
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
  subsets: ["latin"],
});
const iter = Inter ({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

import React from 'react';
import Navbar from './NavBar';
import styles from './Header.module.css';
import Image from 'next/image'; //importing image from ???
import utilStyles from '../styles/utils.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.avatarContainer}>
        {/* Avatar Image */}
        <Image
                    
          src="/image/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="profileimage"
          loading="lazy"
        />
        <img src="/profile.jpg" alt="Avatar" className={styles.avatar} />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;



//importing useState React component 
// import { useState } from 'react';
//import Lik component 
// import Link from 'next/link';
//import CSS module for styling
// import styles from './Header.module.css'

// import utilStyles from '../styles/utils.module.css';
//import { library } from '@fortawesome/fontawesome-svg-core';
// import Image from 'next/image'; //importing image from ???
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = true;

// //importing icons for my nav bar 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import {
//   faUniversalAccess,
//   faBullseye,
//   faIdBadge,
//   faLifeRing,
//   faMapSigns,
//   faBook
// } from "@fortawesome/free-solid-svg-icons";

// const name = 'Květa Mooney';

// const Header = () => {

//   //   const [clicked, setClicked] = useState(false);
    
//   //      const handleClick = () => {
//   //     setClicked(!clicked);
//   // }

//     return (
//         <header className={styles.header}>
//             <div className={styles.container}>
//                 <div className={styles.logoBrand}>
//                     <Image
                    
//                     src="/image/profile.jpg"
//                     className={utilStyles.borderCircle}
//                     height={144}
//                     width={144}
//                     alt="profileimage"
//                     loading="lazy"
//                     />
//                     <h1 className={utilStyles.heading2Xl}>{name}</h1>
//                 </div>
            

//                 <div className={styles.nav}>

//                 <ul>
//                     <li className={styles.navLink}>
//                     <Link href="/">
//                         <svg 
//                         className={styles.hexagonIconOuter}
//                         viewBox="0 0 173.20508075688772 200" 
//                         height="200" 
//                         width="174" 
//                         version="1.1" 
//                         xmlns="http://www.w3.org/2000/svg">

//                             <path 
//                             d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
//                             //className={clicked ? styles.clickedIcon : styles.defaultIcon}
//                             //onClick={handleClick}
//                             fill="#1e2530">

//                             </path>

//                         <svg 
//                         className={styles.hexagonIcon}
//                         x="12" 
//                         y="13" 
//                         width="159" 
//                         height="183"
//                         version="1.1"xmlns="http://www.w3.org/2000/svg"> 
//                 {/* <!-- Adjust width and height for the inner hexagon --> */}
//                             <path 
//                             d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//                             //   <!-- Adjust the path for the smaller hexagon -->
//                             >

//                             </path>

//                                 <FontAwesomeIcon
//                                 icon={faUniversalAccess}
//                                 x="49"
//                                 y="60"
//                                 width="50"
//                                 height="50"
//                                 />
//                         </svg>

//                         <text 
//                         className={styles.title}
//                         x="50%" 
//                         y="69%" 
//                         dominantBaseline="middle" 
//                         textAnchor="middle" 
//                         fill="white">WELCOME/HOME</text>
//                         </svg>
//                     </Link></li>


//                     <li className={styles.menuLink}>
//                       <Link href="/about/about">

//                       <svg 
//                       className={styles.hexagonIconOuter}
//                       viewBox="0 0 173.20508075688772 200" 
//                       height="200" 
//                       width="174" 
//                       version="1.1" 
//                       xmlns="http://www.w3.org/2000/svg">
//                         <path 
//                           d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
//                           //className={clicked ? styles.clickedIcon : styles.defaultIcon}
//                           //onClick={handleClick}
//                           fill="#1e2530">
                
//                 </path>

//                 <svg 
//               className={styles.hexagonIcon}
//               x="12" 
//               y="13" 
//               width="159" 
//               height="183"
//               version="1.1"xmlns="http://www.w3.org/2000/svg"> 
// {/* <!-- Adjust width and height for the inner hexagon --> */}
//     <path 
//       d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//     //   <!-- Adjust the path for the smaller hexagon -->
//     >

//     </path>
                
//                 <FontAwesomeIcon
//           icon={faBullseye}
//           x="49"
//           y="60"
//           width="50"
//           height="50"
//           />
//           </svg>

//                 <text 
//                 className={styles.title}
//                 x="50%" 
//                 y="69%" 
//                 dominantBaseline="middle" 
//                 textAnchor="middle" 
//                 fill="white">ABOUT</text>
            
//                 </svg></Link>
//                 </li>

//                 <li className={styles.menuLink}>

//           <Link href="/projects/project">
            


//             <svg 
//             className={styles.hexagonIconOuter}
//             viewBox="0 0 173.20508075688772 200" 
//             height="200" 
//             width="174" 
//             version="1.1" 
//             xmlns="http://www.w3.org/2000/svg">
//               <path 
//               d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
//               //className={clicked ? styles.clickedIcon : styles.defaultIcon}
//               //onClick={handleClick}
//               fill="#1e2530">
//                 </path>
//                 <svg 
//               className={styles.hexagonIcon}
//               x="12" 
//               y="13" 
//               width="159" 
//               height="183"
//               version="1.1"xmlns="http://www.w3.org/2000/svg"> 
// {/* <!-- Adjust width and height for the inner hexagon --> */}
//     <path 
//       d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//     //   <!-- Adjust the path for the smaller hexagon -->
//     >

//     </path>
//                 <FontAwesomeIcon
//           icon={faLifeRing}
//           x="49"
//           y="60"
//           width="50"
//           height="50"
//           />
//           </svg>
//                 <text 
//                 className={styles.title}
//                 x="50%" 
//                 y="69%" 
//                 dominantBaseline="middle" 
//                 textAnchor="middle" 
//                 fill="white">PROJECTS</text>

//                 </svg></Link></li>
//             <li className={styles.menuLink}>
//                 <Link href="/cv/cv">
//                     <svg 
//                         className={styles.hexagonIconOuter}
//                         viewBox="0 0 173.20508075688772 200" 
//                         height="200" 
//                         width="174" 
//                         version="1.1" 
//                         xmlns="http://www.w3.org/2000/svg">
//                     <path 
//                     d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
//                     //className={clicked ? styles.clickedIcon : styles.defaultIcon}
//                     //onClick={handleClick}
//                     fill="#1e2530"></path>

//                     <svg 
//                         className={styles.hexagonIcon}
//                         x="12" 
//                         y="13" 
//                         width="159" 
//                         height="183"
//                         version="1.1"xmlns="http://www.w3.org/2000/svg"> 
// {/* <!-- Adjust width and height for the inner hexagon --> */}
//                     <path 
//                     d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//     //   <!-- Adjust the path for the smaller hexagon -->
//     ></path>
        

//                         <FontAwesomeIcon
//                             icon={faIdBadge}
//                             x="49"
//                             y="60"
//                             width="50"
//                             height="50"/>
//                     </svg>

//                         <text 
//                         className={styles.title}
//                         x="50%" 
//                         y="69%" 
//                         dominantBaseline="middle" 
//                         textAnchor="middle" 
//                         fill="white">CV</text></svg></Link></li>
// <li className={styles.menuLink}>
//           <Link href="/contact/contact">
//             <svg 
//             className={styles.hexagonIconOuter}
//             viewBox="0 0 173.20508075688772 200" 
//             height="200" 
//             width="174" 
//             version="1.1" 
//             xmlns="http://www.w3.org/2000/svg">
//               <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
//               //className={clicked ? styles.clickedIcon : styles.defaultIcon}
//               //onClick={handleClick}
//               fill="#1e2530"></path>

// <svg 
//               className={styles.hexagonIcon}
//               x="12" 
//               y="13" 
//               width="159" 
//               height="183"
//               version="1.1"xmlns="http://www.w3.org/2000/svg"> 
// {/* <!-- Adjust width and height for the inner hexagon --> */}
//     <path 
//       d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//     //   <!-- Adjust the path for the smaller hexagon -->
//     >

//     </path>

//                     <FontAwesomeIcon
//           icon={faMapSigns}
//           x="49"
//           y="60"
//           width="50"
//           height="50"
//           />
//           </svg>
         
//               <text 
//               className={styles.title}
//               x="50%" 
//               y="69%" 
//               dominantBaseline="middle" 
//               textAnchor="middle" 
//               fill="white">CONTACT</text></svg></Link></li>

//             <li className={styles.menuLink}>
//           <Link href="/blog/blog">
//             <svg 
//             className={styles.hexagonIconOuter}
//             viewBox="0 0 173.20508075688772 200" 
//             height="200" 
//             width="174"  
//             version="1.1" 
//             xmlns="http://www.w3.org/2000/svg">

//               <path 
//               d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" 
//               // className={clicked ? styles.clickedIcon : styles.defaultIcon}
//               // onClick={handleClick}
//               fill="#1e2530">
//                 </path>

//                 <svg 
//               className={styles.hexagonIcon}
//               x="12" 
//               y="13" 
//               width="159" 
//               height="183"
//               version="1.1"xmlns="http://www.w3.org/2000/svg"> 
// {/* <!-- Adjust width and height for the inner hexagon --> */}
//     <path 
//       d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//     //   <!-- Adjust the path for the smaller hexagon -->
//     >

//     </path>
                

//                 <FontAwesomeIcon
//           icon={faBook}
//           x="49"
//           y="60"
//           width="50"
//           height="50"/>
//           </svg>
//                 <text 
//                 className={styles.title}
//                 x="50%" 
//                 y="69%" 
//                 dominantBaseline="middle" 
//                 textAnchor="middle" 
//                 fill="white">BLOG</text>
//                 </svg>
//                 </Link> </li>
//     </ul>
//     </div>

    
// </div>



//         </header>
//     )
// }
// export default Header;

