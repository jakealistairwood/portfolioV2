import React from 'react';
import styles from './Hero.module.scss';
// import WaveSVG from '../../assets/img/wave.svg';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.planet1}></div>
            <div className={styles.planet2}></div>
            <div className={styles.planet3}></div>
            <div className={styles.hero__content}>
                <h1>
                    <span>Hello. I'm Jake.</span> 
                    <span>A Web Developer.</span>
                </h1>
                <p>Who loves nothing more than designing and developing beautiful, engaging
                    websites and applications.
                </p>
                <button className={styles.hero__btn}>View My Work</button>
            </div>
            {/* <div className={styles.wave}>
                <img src={WaveSVG} alt=""/>
            </div> */}
        </header>
    )
}

export default Hero;
