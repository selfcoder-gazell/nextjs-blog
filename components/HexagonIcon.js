// import React from 'react';
// import OuterHexagon from './OuterHexagon';
// import InnerHexagon from './InnerHexagon';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
// import styles from './HexagonIcon.module.css';



// const HexagonIcon = ({ outerFill, innerFill, label }) => {
//   return (
//     <OuterHexagon fill={outerFill}>
//       <InnerHexagon fill={innerFill} />
//       <FontAwesomeIcon
//         icon={faUniversalAccess}
//         className={styles.icon}
//         style={{ position: 'absolute', top: '60px', left: '62px' }}
//       />
//       <text
//         className={styles.title}
//         x="50%"
//         y="80%"
//         dominantBaseline="middle"
//         textAnchor="middle"
//         fill="white"
//       >
//         {label}
//       </text>
//     </OuterHexagon>
//   );
// };

// export default HexagonIcon;

// import React from 'react';
// import OuterHexagon from './OuterHexagon';
// import InnerHexagon from './InnerHexagon';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styles from './HexagonIcon.module.css';

// const HexagonIcon = ({ outerFill, innerFill, label, icon }) => {
//   return (
//     <OuterHexagon fill={outerFill}>
//       <InnerHexagon fill={innerFill} />
//       <FontAwesomeIcon
//         icon={icon}
//         className={styles.icon}
//         style={{ position: 'absolute', top: '60px', left: '62px' }}
//       />
//       <text
//         className={styles.title}
//         x="50%"
//         y="80%"
//         dominantBaseline="middle"
//         textAnchor="middle"
//         fill="white"
//       >
//         {label}
//       </text>
//     </OuterHexagon>
//   );
// };

// export default HexagonIcon;

import React from 'react';
import Link from 'next/link';
import OuterHexagon from './OuterHexagon';
import InnerHexagon from './InnerHexagon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HexagonIcon.module.css';

const HexagonIcon = ({ outerFill, innerFill, label, icon, link }) => {
  return (
    <Link href={link}>
      <OuterHexagon fill={outerFill}>
        <InnerHexagon fill={innerFill} />
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          width={50}
          height={50}
          x="49"
          y="60"
          // style={{ position: 'absolute', top: '49px', left: '60px' }}
        />
        <text
          className={styles.title}
          x="50%"
          y="70%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
        >
          {label}
        </text>
      </OuterHexagon>
    </Link>
  );
};

export default HexagonIcon;


// import React from 'react';
// import OuterHexagon from './OuterHexagon';
// import InnerHexagon from './InnerHexagon';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styles from './HexagonIcon.module.css';

// const HexagonIcon = ({ outerFill, innerFill, label, icon, link }) => {
//   return (
//     <a href={link} className={styles.link}>
//       <OuterHexagon fill={outerFill}>
//         <InnerHexagon fill={innerFill} />
//         <FontAwesomeIcon
//           icon={icon}
//           className={styles.icon}
//           style={{ position: 'absolute', top: '60px', left: '62px' }}
//         />
//         <text
//           className={styles.title}
//           x="50%"
//           y="80%"
//           dominantBaseline="middle"
//           textAnchor="middle"
//           fill="white"
//         >
//           {label}
//         </text>
//       </OuterHexagon>
//     </a>
//   );
// };

// export default HexagonIcon;
