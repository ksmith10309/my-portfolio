import React from 'react';

import codefellows from '../assets/about/codefellows.jpg';
import veterinary from '../assets/about/veterinary.jpg';
import airforce from '../assets/about/airforce.jpg';
import engineer from '../assets/about/engineer.jpg';
import matt from '../assets/about/matt.jpg';
import heroluna from '../assets/about/hero-luna.jpg';

import styles from '../styles/about.module.scss';

class About extends React.Component {
  render() {
    return (
      <div id='about' className={styles.about}>
        <h1>About Me</h1>
        <div>
          <div className={styles.text}>
            <h2>Web Developer</h2>
            <p>I started teaching myself how to code in January of 2018. After trying Codecademy, Khan Academy, and freeCodeCamp, I decided to go to Code Fellows in Seattle. At Code Fellows, I learned HTML, CSS, and JavaScript. I learned PostgreSQL and MongoDB. I learned git and GitHub. I learned how to code collaboratively on group projects. I learned how to pair program. I learned how to use Node.js on the back-end. I learned how to create a server with and without Express. I learned how to use React on the front-end, including how to use React-Redux. I am looking forward to using all of my newly acquired knowledge to develop amazing websites and web apps.</p>
            </div>
          <img src={codefellows} alt='Me at Code Fellows'/>
        </div>
        <div>
          <div className={styles.text}>
            <h2>Vet Assistant/Technician</h2>
            <p>From June of 2014 until November of 2017, I was in the veterinary field. I decided to become a veterinary technician because I wanted to work with animals so I enrolled in the Veterinary Technician Program at Pima Medical Institute in Las Vegas. While in the program, I worked part time as a vet assistant at Desert Inn Animal Hospital. After completing the program, I moved up to Washington and worked as a vet assistant at the Center for Bird and Exotic Animal Medicine in Bothell. While working there, I studied for the Veterinary Technician National Exam. After I passed the VTNE, I got my first job as a vet tech in the neurology department at Veterinary Specialty Center of Seattle. Being a vet tech was not easy and I truly respect every single vet tech out there.
            </p>
          </div>
          <img src={veterinary} alt='Me as a vet assistant'/>
        </div>
        <div>
          <div className={styles.text}>
            <h2>Weather Forecaster</h2>
            <p>I decided to join the Air Force in 2009. I applied to get into Officer Training School, but found out months later that I did not get accepted. After speaking to a recruiter, I was convinced that my chances of getting into OTS would be higher if I enlisted first. I enlisted and got chosen to become a weather forecaster. I enjoyed forecasting the weather when I got it right, not so much when I got it wrong. While I was in the Air Force, I also served in the Honor Guard at Nellis Air Force Base. Serving in the Honor Guard and providing military funeral honors for those who have served is something I am proud to have done in my lifetime.</p>
            </div>
          <img src={airforce} alt='Me in the Air Force'/>
        </div>
        <div>
          <div className={styles.text}>
            <h2>Design Engineer</h2>
            <p>I went to the University of California, Davis. I started out as a Physics major, but ended up changing my major to Aeronautical Science and Engineering / Mechanical Engineering. After graduating in 2007, I got my first engineering job at Cessna Aircraft Company in Wichita, Kansas. I worked in the propellers division, also known as McCauley Propeller Systems. At the time, all the propellers were made of aluminum. I spent the majority of my time at McCauley manufacturing composite propellers for experimental testing. McCauley composite propellers have now received FAA certification.</p>
          </div>
          <img src={engineer} alt='Me at Cessna'/>
        </div>
        <div>
          <div className={styles.text}>
            <h2>Matt Smith</h2>
            <p>I met my husband when I was in the Air Force. We actually went to weather tech school together, which started in August of 2010. After studying weather together for 8 months, we managed to get stationed at the same duty location in Germany. We flew back to Pennsylvania in September of 2012 and got married in his parents' backyard. We both decided to get out of the Air Force in 2014 after our enlistment was up. After getting out of the Air Force, Matt studied to become a 3D artist and has been one ever since.</p>
          </div>
          <img src={matt} alt='Me and Matt'/>
        </div>
        <div>
          <div className={styles.text}>
            <h2>My Dogs</h2>
            <p>I have two dogs. Their names are Hero and Luna. Hero is the one on the right and Luna is on the left. I decided to volunteer at the animal shelter in June of 2014 because I wanted to get into the veterinary field. That was when I saw Hero. After I finally convinced my husband that he is perfect for us, we went back a week later and adopted him. </p>
            <p>A year later, I was in vet tech school. One of our assignments was to practice triaging the dogs at the shelter. I decided to practice with Luna. After I put her back in her kennel, she whimpered at me. That was when I realized I couldn't leave without her so she's ours now.</p>
          </div>
          <img src={heroluna} alt='My dogs'/>
        </div>
      </div>
    );
  }
}

export default About;
