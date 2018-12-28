import React from 'react';

import foodriver from '../assets/portfolio/foodriver.jpg';
import hitormiss from '../assets/portfolio/hitormiss.jpg';
import moodfellows from '../assets/portfolio/moodfellows.jpg';
import raccooncity from '../assets/portfolio/raccooncity.jpg';
import simon from '../assets/portfolio/simon.jpg';
import tictactoe from '../assets/portfolio/tictactoe.jpg';
import pomodoro from '../assets/portfolio/pomodoro.jpg';
import calculator from '../assets/portfolio/calculator.jpg';
import twitch from '../assets/portfolio/twitch.jpg';
import wikipedia from '../assets/portfolio/wikipedia.jpg';
import weather from '../assets/portfolio/weather.jpg';
import asteroids from '../assets/portfolio/asteroids.jpg';

import styles from '../styles/portfolio.module.scss';

class Portfolio extends React.Component {
  render() {
    return (
      <div id='portfolio' className={styles.portfolio}>
        <div className={styles.deck}>
          <h1>Code Fellows</h1>
          <div className={styles.card}>
            <h3>fooDriver</h3>
            <img src={foodriver} alt='fooDriver screen shot' />
            <p>Created: December 2018</p>
            <p>Built a web application for mobile food pantries to facilitate donations</p>
            <p>Used: JavaScript, Node.js, Express, SuperAgent, MongoDB, Babel, bcrypt, jsonwebtoken, CORS, React, react-router-dom, react-cookies, react-google-maps, Google Maps API, SCSS, GitHub</p>
            <p>Worked collaboratively on a team of 5</p>
            <a rel="noopener noreferrer" target="_blank" href='http://www.foodriver.org'>Visit Site</a>
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/fooDriver/app'>Visit GitHub</a>
          </div>
          <div className={styles.card}>
            <h3>Hit or Miss!</h3>
            <img src={hitormiss} alt='Hit or Miss! screen shot' />
            <p>Created: November 2018</p>
            <p>Built a back-end/command-line version of the classic game Battleship</p>
            <p>Used: JavaScript, Node.js, Express, MongoDB, Babel, bcrypt, jsonwebtoken, HTTPie, Postman, GitHub</p>
            <p>Worked collaboratively on a team of 5</p>
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/hit-or-miss/hit-or-miss'>Visit GitHub</a>
          </div>
          <div className={styles.card}>
            <h3>Mood Fellows</h3>
            <img src={moodfellows} alt='Mood Fellows screen shot' />
            <p>Created: September 2018</p>
            <p>Built a website that evaluates posts using the Google Natural Language API</p>
            <p>Used: JavaScript, Node.js, Express, SuperAgent, PostgreSQL, EJS, Node Schedule, Google Natural Language API, Jokes API, CSS, HTML, GitHub</p>
            <p>Worked collaboratively on a team of 3</p>
            <a rel="noopener noreferrer" target="_blank" href='http://www.moodfellows.org'>Visit Site</a>
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/ksmith10309/mood-fellows'>Visit GitHub</a>
          </div>
          <div className={styles.card}>
            <h3>Raccoon City</h3>
            <img src={raccooncity} alt='Raccoon City screen shot' />
            <p>Created: August 2018</p>
            <p>Built a website to teach users about how expensive it is to live in a big city</p>
            <p>Used: JavaScript, CSS, HTML, GitHub</p>
            <p>Worked collaboratively on a team of 4</p>
            <a rel="noopener noreferrer" target="_blank" href='https://ksmith10309.github.io/raccoon-city'>Visit Site</a>
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/ksmith10309/raccoon-city'>Visit GitHub</a>
          </div>
        </div>

        <div className={styles.deck}>
          <h1>freeCodeCamp</h1>
          <div className={styles.card}>
            <h3>Build a Simon Game</h3>
            <img src={simon} alt='Build a Simon Game screen shot' />
            <p>Created: April 2018</p>
            <p>Built a game where users can test their memory skill</p>
            <p>Used: JavaScript, jQuery, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/jxBqRB'>Visit CodePen</a>
          </div>
          <div className={styles.card}>
            <h3>Build a Tic Tac Toe Game</h3>
            <img src={tictactoe} alt='Build a Tic Tac Toe Game screen shot' />
            <p>Created: April 2018</p>
            <p>Built a game of Xs and Os against a computer or a friend</p>
            <p>Used: JavaScript, jQuery, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/MGjXQX'>Visit CodePen</a>
          </div>
          <div className={styles.card}>
            <h3>Build a Pomodoro Clock</h3>
            <img src={pomodoro} alt='Build a Pomodoro Clock screen shot' />
            <p>Created: April 2018</p>
            <p>Built a timer that allows users to follow the Pomodoro Time Management Technique</p>
            <p>Used: JavaScript, jQuery, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/BxzJbz'>Visit CodePen</a>
          </div>
          <div className={styles.card}>
            <h3>Build a JavaScript Calculator</h3>
            <img src={calculator} alt='Build a JavaScript Calculator screen shot' />
            <p>Created: April 2018</p>
            <p>Built a calculator that performs multiplication, division, addition, and subtraction</p>
            <p>Used: JavaScript, jQuery, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/jxWZog'>Visit CodePen</a>
          </div>
          <div className={styles.card}>
            <h3>Use the Twitchtv JSON API</h3>
            <img src={twitch} alt='Use the Twitchtv JSON API screen shot' />
            <p>Created: April 2018</p>
            <p>Built a web app that displays the status of a set of Twitch streamers</p>
            <p>Used: JavaScript, jQuery, Twitch API, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/KoEJzJ'>Visit CodePen</a>
          </div>
          <div className={styles.card}>
            <h3>Build a Wikipedia Viewer</h3>
            <img src={wikipedia} alt='Build a Wikipedia Viewer screen shot' />
            <p>Created: April 2018</p>
            <p>Built a web app that enables users to search Wikipedia with a search box</p>
            <p>Used: JavaScript, jQuery, Wikipedia API, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/VXggRB'>Visit CodePen</a>
          </div>
          <div className={styles.card}>
            <h3>Show the Local Weather</h3>
            <img src={weather} alt='Show the Local Weather screen shot' />
            <p>Created: April 2018</p>
            <p>Built a web app that allows users to find out the weather based on current location</p>
            <p>Used: JavaScript, jQuery, Weather API, CSS, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://codepen.io/ksmith10309/pen/qoLLWB'>Visit CodePen</a>
          </div>
        </div>

        <div className={styles.deck}>
          <h1>Khan Academy</h1>
          <div className={styles.card}>
            <h3>Asteroids Spaceship</h3>
            <img src={asteroids} alt='Asteroids Spaceship screen shot' />
            <p>Created: March 2018</p>
            <p>Built a game where users control a spaceship using the arrow keys and space bar to destroy other spaceships</p>
            <p>Used: JavaScript, Processing.js, HTML</p>
            <a rel="noopener noreferrer" target="_blank" href='https://ksmith10309.github.io/asteroids-spaceship'>Visit Site</a>
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/ksmith10309/asteroids-spaceship'>Visit GitHub</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
