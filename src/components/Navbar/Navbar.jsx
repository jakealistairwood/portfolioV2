import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../assets/img/portfolio-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/img/resume.pdf';
import uuid from 'react-uuid';

const Navbar = () => {

    const navLinks = [
        { name: 'Work', href: '#featured' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className={styles.navbar}>
            <a href="" className={styles.linkWrapper}>
                <img src={Logo} alt=""/>
            </a>
            <ul className={styles.navbar__links}>
                {navLinks.map(link => (
                    <a className={styles.navbar__link} key={uuid()} href={link.href}>
                        <li>{link.name}</li>
                    </a>
                ))}
                <a className={styles.navbar__link} href={CV}><li>Resume</li></a>
            </ul>
            <div className={styles.navbar__icons}>
                <a href="https://github.com/jakealistairwood">
                    <FontAwesomeIcon className={styles.navbar__socialIcon} icon={faGithub} /> 
                </a>
                <a href="https://www.linkedin.com/in/jake-wood-726141114/">
                    <FontAwesomeIcon className={styles.navbar__socialIcon} icon={faLinkedin} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
