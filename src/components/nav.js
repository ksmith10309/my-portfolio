import React from 'react';

import styles from '../styles/nav.module.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false
    };
  }

  showEmail = () => {
    this.setState({ email: true });
  }

  hideEmail = () => {
    this.setState({ email: false });
  }

  render() {
    if (this.state.email) {
      return (
        <React.Fragment>
          <nav className={styles.navtop}>
            <ul>
              <li onClick={this.props.showPortfolio}><a href='#portfolio'>Portfolio</a></li>
              <li className={styles.divider} onClick={this.props.showAbout}><a href='#about'>About</a></li>
            </ul>
          </nav>
          <nav className={styles.navbottom}>
            <ul>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/ksmith10309">GitHub</a></li>
              <li className={styles.divider}><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ksmith10309/">LinkedIn</a></li>
              <li className={styles.divider} onClick={this.showEmail}><span>Email</span></li>
            </ul>
          </nav>
          <div className={styles.show}>
            <div className={styles.modal}>
              <h3>Feel free to email me at:</h3>
              <h3>katherine.lo.smith@gmail.com</h3>
              <button onClick={this.hideEmail}>Close</button>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav className={styles.navtop}>
            <ul>
              <li onClick={this.props.showPortfolio}><a href='#portfolio'>Portfolio</a></li>
              <li className={styles.divider} onClick={this.props.showAbout}><a href='#about'>About</a></li>
            </ul>
          </nav>
          <nav className={styles.navbottom}>
            <ul>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/ksmith10309">GitHub</a></li>
              <li className={styles.divider}><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ksmith10309/">LinkedIn</a></li>
              <li className={styles.divider} onClick={this.showEmail}><span>Email</span></li>
            </ul>
          </nav>
        </React.Fragment>
      );
    }
  }
}

export default Nav;
