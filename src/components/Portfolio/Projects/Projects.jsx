import React from 'react';
import styles from './Projects.module.scss';
import { projects } from '../../../projects';
import CodeIcon from '../../../assets/img/code-icon.svg';
import EyeIcon from '../../../assets/img/eye-icon.svg';

const Projects = () => {

    console.log(projects);

    return (
        <div className={styles.projects}>
            {projects.map(project => (
                <div className={styles.project}>
                    <div className={styles.project__left}>
                        <div className={styles.project__header}>
                            <h3>{project.title}</h3>
                            <p className={styles.project__description}>{project.description}</p>
                        </div> 
                        <div className={styles.project__footer}>
                            <div className={styles.project__skills}>
                                {project.skills.map((skill) => (
                                    <div className={styles.skillContainer}>
                                        <span className={styles.skill}>{skill}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.project__links}>
                                <a href={project.preview} target="_blank">
                                    <img src={EyeIcon} alt="preview-project-icon" />
                                    <span>Preview</span>
                                </a>
                                <a href={project.code} target="_blank">
                                    <img src={CodeIcon} alt="preview-codebase-icon" />
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    </div>    
                </div>
            ))}
        </div>
    )
}

export default Projects;
