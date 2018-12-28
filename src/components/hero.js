import React from 'react';

import styles from '../styles/hero.module.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Katherine Smith</h1>
          <h2>Full-Stack Web Developer</h2>
        </div>
      </div>
    );
  }
}

export default Home;
