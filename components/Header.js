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
import Navbar from './Navbar';
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
      </div>
      <Navbar />
    </header>
  );
};

export default Header;


