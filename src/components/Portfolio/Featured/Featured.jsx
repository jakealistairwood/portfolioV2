import React from 'react';
import styles from './Featured.module.scss';
import { featured } from '../../../projects';
import uuid from 'react-uuid';
import CodeIcon from '../../../assets/img/code-icon.svg';
import EyeIcon from '../../../assets/img/eye-icon.svg';

const Featured = () => {
    return (
        <div className={styles.featured} id={styles.featured}>
            <div className={styles.featured__content}>
                <h4>Featured Project</h4>
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <div className={styles.featured__footer}>
                    <div className={styles.featured__footerLeft}>
                        {featured.skills.map(skill => (
                            <div className={styles.skillContainer} key={uuid()}>
                                <span className={styles.skill}>{skill}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.featured__footerRight}>
                        <a href={featured.code} target="_blank" rel="noreferrer">
                            <img src={EyeIcon} alt="preview-project-icon" />
                            <span>Preview</span>
                        </a>
                        <a href={featured.preview} target="_blank" rel="noreferrer">
                            <img src={CodeIcon} alt="preview-codebase-icon" />
                            <span>Code</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.featured__img}>
                <div className={styles.designDetail}>
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle3}></div>
                </div>
                <img src={featured.img} alt="dada-mockup" />
            </div>
        </div>
    )
}

export default Featured;
