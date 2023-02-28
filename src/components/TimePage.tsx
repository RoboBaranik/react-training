import { useEffect, useState } from 'react';
import { ClockHand, ClockHandType } from './ClockHand';
import ClockLabel from './ClockLabel';
import Digit from './Digit';
import styles from './TimePage.module.scss';

function TimePage() {
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState(time.getSeconds() * 10);
  const [minutes, setMinutes] = useState(time.getMinutes() * 10 + Math.ceil((time.getSeconds() / 60) * 10));
  const [hours, setHours] = useState(
    time.getHours() * 10 + Math.ceil((time.getMinutes() / 60) * 10) + Math.ceil((time.getSeconds() / 3600) * 10)
  );
  const timer = () => {
    const currentTime = new Date();
    setTime(currentTime);
    const timeSeconds = currentTime.getSeconds() * 10 + Math.ceil((currentTime.getMilliseconds() / 1000) * 10);
    const timeMinutes = currentTime.getMinutes() * 10 + Math.ceil(timeSeconds / 60);
    const timeHours = currentTime.getHours() * 10 + Math.ceil(timeMinutes / 60);
    setSeconds(timeSeconds);
    setMinutes(timeMinutes);
    setHours(timeHours);
  };
  useEffect(() => {
    const id = setInterval(timer, 20);
    return () => clearInterval(id);
  }, [seconds]);
  return (
    <div className={styles['time-page']}>
      <h1 className={styles['time-string']}>Real time: {time.toLocaleTimeString()}</h1>
      <div className={styles['clock-analog']}>
        {Array(12)
          .fill(0)
          .map((label, index) => (
            <ClockLabel labelName={(index + 1).toString()} />
          ))}
        <ClockHand type={ClockHandType.Second} timeValue={seconds - 1} />
        <ClockHand type={ClockHandType.Minute} timeValue={minutes - 1} />
        <ClockHand type={ClockHandType.Hour} timeValue={hours - 1} />
        <div className={styles.joint}></div>
      </div>
      <div className={styles['clock-digital']}>
        <Digit value={Math.floor(((hours / 10) % 100) / 10)} />
        <Digit value={Math.floor((hours / 10) % 10)} />
        <span className={styles.separator}></span>
        <Digit value={Math.floor(((minutes / 10) % 100) / 10)} />
        <Digit value={Math.floor((minutes / 10) % 10)} />
        <span className={styles.separator}></span>
        <Digit value={Math.floor(((seconds / 10) % 100) / 10)} />
        <Digit value={Math.floor((seconds / 10) % 10)} />
      </div>
    </div>
  );
}

export default TimePage;
