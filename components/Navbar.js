// import React from 'react';
// import HexagonIcon from './HexagonIcon';
// import { faHome, faUser, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';
// import styles from './Navbar.module.css';

// const navItems = [
//   { label: 'Home', icon: faHome, outerFill: '#3498db', innerFill: '#2980b9' },
//   { label: 'About', icon: faUser, outerFill: '#e74c3c', innerFill: '#c0392b' },
//   { label: 'Contact', icon: faEnvelope, outerFill: '#2ecc71', innerFill: '#27ae60' },
//   { label: 'Blog', icon: faBlog, outerFill: '#f1c40f', innerFill: '#f39c12' },
// ];

// const Navbar = () => {
//   return (
//     <div className={styles.navbar}>
//       {navItems.map((item, index) => (
//         <HexagonIcon
//           key={index}
//           label={item.label}
//           icon={item.icon}
//           outerFill={item.outerFill}
//           innerFill={item.innerFill}
//         />
//       ))}
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import HexagonIcon from './HexagonIcon';
import {
  faUniversalAccess,
  faBullseye,
  faIdBadge,
  faLifeRing,
  faMapSigns,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'HOME', icon: faUniversalAccess, outerFill: '#3498db', innerFill: '#2980b9', link: '/' },
  { label: 'ABOUT', icon: faBullseye, outerFill: '#e74c3c', innerFill: '#c0392b', link: '.pages/about.js' },
  { label: 'PROJECTS', icon: faIdBadge, outerFill: '#2ecc71', innerFill: '#27ae60', link: '.pages/projects/projects.js' },
  { label: 'CV', icon: faLifeRing, outerFill: '#f1c40f', innerFill: '#f39c12', link: '.pages/cv.js' },
  { label: 'CONTACT', icon: faMapSigns, outerFill: '#9b59b6', innerFill: '#8e44ad', link: '.pages/contact.js' },
  { label: 'BLOG', icon: faBook, outerFill: '#34495e', innerFill: '#2c3e50', link: '.pages/blog/blog.js' },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {navItems.map((item, index) => (
        <HexagonIcon
          key={index}
          label={item.label}
          icon={item.icon}
          outerFill={item.outerFill}
          innerFill={item.innerFill}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import HexagonIcon from './HexagonIcon';
// import Link from 'next/link';
// import styles from './Navbar.module.css';

// const Navbar = () => {
//   return (
//     <ul className={styles.navbar}>
//       <li className={styles.navLink}>
//         <Link href="/">
//           <HexagonIcon
//             outerFill="#1e2530"
//             innerFill="#4CAF50"
//             label="HOME"
//           />
//         </Link>
//       </li>
//       {/* Add more links with HexagonIcon as needed */}
//     </ul>
//   );
// };

// export default Navbar;
