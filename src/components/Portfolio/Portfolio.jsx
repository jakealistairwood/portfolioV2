import React from 'react';
import styles from './Portfolio.module.scss';
import Featured from './Featured';
import { featured } from '../../projects';
import Projects from './Projects';
import { Link } from 'react-scroll';

const Portfolio = () => {

    console.log(featured.title);

    return (
        <section className={styles.portfolio}>
            <div className={`${styles.portfolio__header} ${styles.section__header}`}>
                <h2>Portfolio</h2>
                <div className={styles.designDetail}></div>
            </div>
            <Featured />   
            <Projects />
            <div class={styles.portfolio__cta}>
                <p>For more information about me, see below:</p>
                <div>
                    <Link 
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        <button className={styles.secondaryBtn}>About me</button>
                    </Link>
                    <span>or</span>
                    <Link 
                        to="contact"
                        smooth={true}
                        duration={500}                       
                    >
                        <button class={styles.primaryBtn}>Get in Touch</button>
                    </Link>
                </div>
            </div> 
        </section>
    )
}

export default Portfolio;
