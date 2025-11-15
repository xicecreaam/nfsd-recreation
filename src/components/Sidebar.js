import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Most Wanted (2005)</h3>

      <ul className={styles.list}>
        <li>
          <Link href="/mw05/setup">Setting up for speedruns</Link>
        </li>
        <li>
          <Link href="/mw05/general">General information</Link>
        </li>
        <li>
          <Link href="/mw05/simple-any">Simple Career Any% guide</Link>
        </li>
        <li>
          <Link href="/mw05/inter-any">Intermediate Career Any% guide</Link>
        </li>
        <li>
          <Link href="/mw05/info">Advanced information</Link>
        </li>
        <li>
          <Link href="/mw05/expert-any">Expert Career Any% route</Link>
        </li>
      </ul>

      <hr className={styles.divider} />

      <ul className={styles.list}>
        <li>
          <a href="https://www.speedrun.com/nfsmw05">Speedrun.com</a>
        </li>
        <li>
          <a href="https://www.speedrun.com/nfsmw05_ce">Category Extensions</a>
        </li>
        <li>
          <a href="https://extrememostwantedracers.weebly.com/">Extreme Most Wanted Racers</a>
        </li>
      </ul>
    </div>
  );
}
