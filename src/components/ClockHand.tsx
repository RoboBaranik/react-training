import styles from './ClockHand.module.scss';
const ClockHand = ({ type, timeValue }: { type: ClockHandType; timeValue: number }) => {
  const rotation = (360 / (type === ClockHandType.Hour ? 120 : 600)) * timeValue;
  const handTransform = `translateY(50%) rotate(${rotation}deg) translateY(-50%)`;
  return (
    <div
      style={{ transform: handTransform }}
      className={`${styles.clockHand} ${styles[type]}`}
      data-value={timeValue}
    ></div>
  );
};
enum ClockHandType {
  Hour = 'hour',
  Minute = 'minute',
  Second = 'second'
}

export { ClockHand, ClockHandType };
