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
        </section>
    )
}

export default Portfolio;
