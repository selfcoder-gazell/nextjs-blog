// import React from 'react';
// import styles from './OuterHexagon.module.css'; // Your CSS module

// const OuterHexagon = ({ fill, children }) => {
//   return (
//     <svg
//       className={styles.hexagonIconOuter}
//       viewBox="0 0 173.20508075688772 200"
//       height="200"
//       width="174"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
//         fill={fill || '#1e2530'}
//       />
//       {children}
//     </svg>
//   );
// };

// export default OuterHexagon;


// import React from 'react';
// import styles from './OuterHexagon.module.css'; // Your CSS module

// const OuterHexagon = ({ fill, children }) => {
//   return (
//     <svg
//     className={styles.hexagonIconOuter}
//       viewBox="0 0 200 200"
//       width="100"
//       height="100"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ position: 'relative', display: 'inline-block' }}
//     >
//       <polygon
//         points="100,10 190,50 190,150 100,190 10,150 10,50"
//         fill={fill}
//       />
//       {children}
//     </svg>
//   );
// };

// export default OuterHexagon;

import React from 'react';
import styles from './OuterHexagon.module.css'; // Your CSS module

const OuterHexagon = ({ fill, children }) => {
  return (
    <svg
    className={styles.hexagonIconOuter}
      viewBox="0 0 200 200"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <polygon
      className={styles.OuterHexagon}
        points="100,10 190,50 190,150 100,190 10,150 10,50"
        fill={fill}
      />
      {children}
    </svg>
  );
};

export default OuterHexagon;
