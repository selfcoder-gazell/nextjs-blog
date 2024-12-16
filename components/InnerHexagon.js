// import React from 'react';
// import styles from './InnerHexagon.module.css';


// const InnerHexagon = ({ fill }) => {
//   return (
//     <svg
//       className={styles.hexagonIcon}
//       x="12"
//       y="13"
//       width="159"
//       height="183"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M75 0L150 43.30127018922193L150 129.9038105676658L75 173.20508075688772L0 129.9038105676658L0 43.30127018922193Z"
//         fill={fill || '#4CAF50'}
//       />
//     </svg>
//   );
// };

// export default InnerHexagon;

// import React from 'react';
// import styles from './InnerHexagon.module.css';

// const InnerHexagon = ({ fill }) => {
//   return (
//     <polygon
//       points="100,30 170,60 170,140 100,170 30,140 30,60"
//       fill={fill}
//       style={{ position: 'absolute' }}
//     />
//   );
// };

// export default InnerHexagon;

import React from 'react';
import styles from './InnerHexagon.module.css';

const InnerHexagon = ({ fill }) => {
  return (
    <polygon
    className={styles.InnerHexagon}
      points="100,30 170,60 170,140 100,170 30,140 30,60"
      fill={fill}
    />
  );
};

export default InnerHexagon;



