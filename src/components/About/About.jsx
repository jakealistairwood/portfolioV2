import React from 'react';
import styles from './About.module.scss';
import Photo from '../../assets/img/selfie.png';
import CV from '../../assets/img/resume.pdf';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={`${styles.about__header} ${styles.section__header}`}>
                <h2>About</h2>
                <div className={styles.designDetail}></div>
            </div>
            <div className={styles.about__overview}>
                <div className={styles.overview__img}>
                    <img className={styles.overview__selfie} src={Photo} alt="photo-of-me"/>
                </div>    
                <div className={styles.overview__content}>
                    <div className={styles.content__header}>
                        <h3>I'm Jake, a Front-End Developer with a love for building engaging UI's.</h3>
                        <div className={styles.designDetail}></div>
                    </div>
                    <div className={styles.content__body}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat quam omnis nobis at iusto temporibus accusamus iure mollitia voluptates.</p>
                        <button class={styles.secondaryBtn}>
                            <a href={CV} target="_blank">View Resume</a>
                            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 21L11 11L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>     
                        </button>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default About;
