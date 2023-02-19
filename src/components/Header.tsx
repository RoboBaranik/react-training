import reactLogo from '../assets/react.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.title}>
        <img src={reactLogo}></img>
        <h3>React training</h3>
      </div>
      <button>Time</button>
    </header>
  );
}

export default Header;
