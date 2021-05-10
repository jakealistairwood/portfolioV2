import React from 'react';
import styles from './Designs.module.scss';
import { designs } from '../../../projects';
import EyeIcon from '../../../assets/img/eye-icon.svg';
import uuid from 'react-uuid';

const Designs = () => {
    return (
        <div className={styles.designs}>
            {designs.map(design => (
                <div className={styles.design} key={uuid()}>
                    <div className={styles.design__left}>
                        <div className={styles.design__header}>
                            <h3>{design.title}</h3>
                            <p className={styles.design__description}>{design.description}</p>    
                        </div>
                        <div className={styles.design__footer}>
                            <a href={design.preview} target="_blank" rel="noreferrer">
                                <img src={EyeIcon} alt="preview-design-icon" />
                                <span>Preview</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.design__right}>
                        <a href={design.preview} target="_blank" rel="noreferrer">
                            <div className={styles.design__designImg}>
                                <img src={design.img} alt="design-preview"/>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Designs;
