import React from 'react';
import styles from './Digit.module.scss';

function Digit({ value }: { value: number }) {
  const segmentActive = [
    [0, 2, 3, 5, 6, 7, 8, 9],
    [0, 4, 5, 6, 8, 9],
    [0, 1, 2, 3, 4, 7, 8, 9],
    [2, 3, 4, 5, 6, 8, 9],
    [0, 2, 6, 8],
    [0, 1, 3, 4, 5, 6, 7, 8, 9],
    [0, 2, 3, 5, 6, 8, 9]
  ];
  const segments = Array(7)
    .fill(0)
    .map((_, index) => <span key={index} className={segmentActive[index].includes(value) ? styles.active : ''}></span>);
  return (
    <span className={styles.digit} data-digit={value.toString()}>
      {segments}
    </span>
  );
}

export default Digit;
