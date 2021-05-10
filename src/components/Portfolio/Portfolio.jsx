import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import Featured from './Featured';
import { featured } from '../../projects';
import Projects from './Projects';
import { Link } from 'react-scroll';
import Designs from './Designs';

const Portfolio = () => {

    const [ display, setDisplay ] = useState(1);

    const toggleDisplay = (index) => {
        setDisplay(index);
    }

    return (
        <section className={styles.portfolio}>
            <div className={`${styles.portfolio__header} ${styles.section__header}`}>
                <h2>Portfolio</h2>
                <div className={styles.designDetail}></div>
            </div>
            <Featured />
            <div className={styles.display__toggle}>
                <button
                    className={display === 1 ? `${styles.tabBtn} ${styles.active}` : `${styles.tabBtn}`} 
                    onClick={() => toggleDisplay(1)}
                >Development
                </button>
                <span>/</span>
                <button 
                    className={display === 2 ? `${styles.tabBtn} ${styles.active}` : `${styles.tabBtn}`}
                    onClick={() => toggleDisplay(2)}
                >Design
                </button>
            </div>
            {display === 1 ? <Projects /> : <Designs />}   
            {/* <Projects /> */}
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
