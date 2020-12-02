import styles from '../../styles/Home.module.css';
import React from 'react'

export default function Footer() {
  return <React.Fragment>
    <footer className={styles.footer}>
      <a
        href="https://syedzainjeelani.github.io/cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by{' Syed Zain Jeelani'}
      </a>
    </footer>
  </React.Fragment>;
};