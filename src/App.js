import React from 'react';
import './styles/app.module.scss';

import Nav from './components/nav.js';
import Hero from './components/hero.js';
import Portfolio from './components/portfolio.js';
import About from './components/about.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: true
    };
  }

  showPortfolio = () => {
    this.setState({ portfolio: true });
  }

  showAbout = () => {
    this.setState({ portfolio: false });
  }

  render() {
    if (this.state.portfolio) {
      return (
        <React.Fragment>
          <Nav showPortfolio={this.showPortfolio} showAbout={this.showAbout}/>
          <Hero />
          <Portfolio />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Nav showPortfolio={this.showPortfolio} showAbout={this.showAbout}/>
          <Hero />
          <About />
        </React.Fragment>
      );
    }
  }
}

export default App;
