import React from 'react';
import styles from './Portfolio.module.scss';
import Featured from './Featured';
import { featured } from '../../projects';
import Projects from './Projects';

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
                    <a href="#about">
                        <button className={styles.secondaryBtn}>About me</button>
                    </a>
                    <span>or</span>
                    <a href="#contact">
                        <button class={styles.primaryBtn}>Get in Touch</button>
                    </a>
                </div>
            </div> 
        </section>
    )
}

export default Portfolio;
