import React from 'react';
import styles from './Header.less';
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <header className={styles.hd}>
      <ul>
        <li className={styles.logo}><Link to="/">Tiny-Dva-Demo</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </header>
  );

}
