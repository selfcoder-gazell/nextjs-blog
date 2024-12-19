import React from 'react';
import styles from './OuterHexagon.module.css'; // Your CSS module

const OuterHexagon = ({ fill, children }) => {
  return (
    <svg
    className={styles.hexagonIconOuter}
      viewBox="0 0 200 200"
      width="180"
      height="180"
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
