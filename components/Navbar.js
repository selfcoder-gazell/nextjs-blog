import React from 'react';
import { useRouter } from 'next/router';
import HexagonIcon from './HexagonIcon';
import {
  faUniversalAccess,
  faBullseye,
  faIdBadge,
  faLifeRing,
  faMapSigns,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
// import styles from 'styles/global.css'
import styles from './Navbar.module.css';

const navItems = [
  { label: 'HOME', icon: faUniversalAccess, outerFill: '#3498db', innerFill: '#2980b9', link: '/' },
  { label: 'ABOUT', icon: faBullseye, outerFill: '#e74c3c', innerFill: '#c0392b', link: '/about/about' },
  { label: 'PROJECTS', icon: faIdBadge, outerFill: '#2ecc71', innerFill: '#27ae60', link: '/projects/projects' },
  { label: 'CV', icon: faLifeRing, outerFill: '#f1c40f', innerFill: '#f39c12', link: '/cv/cv' },
  { label: 'CONTACT', icon: faMapSigns, outerFill: '#44474d', innerFill: '#44474d', link: '/contact/contact' },
  { label: 'BLOG', icon: faBook, outerFill: '#44474d', innerFill: '#44474d', link: '/blog/blog' },
];

const Navbar = () => {
  const router = useRouter();

  console.log('Current Path:', router.pathname);

  return (
    <div className={styles.navbar}>
      {navItems.map((item, index) => {
        // console.log('Nav Item Link:', item.link);
        return (
          <HexagonIcon
            key={index}
            label={item.label}
            icon={item.icon}
            outerFill={item.outerFill}
            innerFill={item.innerFill}
            link={item.link}
            isActive={router.pathname === item.link} // Check if this is true
          />
        );
      })}
    </div>
  );
};

export default Navbar;