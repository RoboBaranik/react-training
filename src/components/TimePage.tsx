import { useEffect, useState } from 'react';
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
    // console.log(currentTime.toISOString());
    setSeconds(currentTime.getSeconds() * 10 + Math.ceil((currentTime.getMilliseconds() / 1000) * 10));
    setMinutes(currentTime.getMinutes() * 10 + Math.ceil((currentTime.getSeconds() / 60) * 10));
    setHours(
      currentTime.getHours() * 10 +
        Math.ceil((currentTime.getMinutes() / 60) * 10) +
        Math.ceil((currentTime.getSeconds() / 3600) * 10)
    );
    // setSeconds((s) => s + 1);
    // setSeconds((s) => {
    //   if (s % 60 === 0)
    //     setMinutes((m) => {
    //       if (m % 60 === 0) setHours((h) => (h < 6000 ? h + 1 : 0));
    //       return m < 6000 ? m + 1 : 0;
    //     });
    //   return s < 6000 ? s + 1 : 0;
    // });
  };
  // setInterval(() => {
  //   setSeconds((s) => {
  //     if (s % 60 === 0)
  //       setMinutes((m) => {
  //         if (m % 60 === 0) setHours((h) => (h < 6000 ? h + 1 : 0));
  //         return m < 6000 ? m + 1 : 0;
  //       });
  //     return s < 6000 ? s + 1 : 0;
  //   });
  // }, 10);
  useEffect(() => {
    // if (seconds % 60 === 0)
    //   setMinutes((m) => {
    //     if (m % 60 === 0) setHours((h) => (h < 600 ? h + 1 : 0));
    //     return m < 600 ? m + 1 : 0;
    //   });
    // if (seconds >= 600) {
    //   setSeconds(0);
    // }
    const id = setInterval(timer, 20);
    return () => clearInterval(id);
  }, [seconds]);
  return (
    <div className={styles['time-page']}>
      <h1 className={styles['time-string']}>Real time: {time.toLocaleTimeString()}</h1>
      <div className={styles['clock-analog']}>
        <div
          style={{ transform: `translateY(50%) rotate(${(360 / 600) * seconds}deg) translateY(-50%)` }}
          className={`${styles['clock-analog-handle']} ${styles.seconds}`}
          data-value={seconds}
        ></div>
        <div
          style={{ transform: `translateY(50%) rotate(${(360 / 600) * minutes}deg) translateY(-50%)` }}
          className={`${styles['clock-analog-handle']} ${styles.minutes}`}
          data-value={minutes}
        ></div>
        <div
          style={{ transform: `translateY(50%) rotate(${(360 / 600) * hours}deg) translateY(-50%)` }}
          className={`${styles['clock-analog-handle']} ${styles.hours}`}
          data-value={hours}
        ></div>
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
