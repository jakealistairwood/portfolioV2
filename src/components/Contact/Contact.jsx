import React from 'react';
import styles from './Contact.module.scss';
import LinkedinIcon from '../../assets/img/linkedin.svg'; 
import MailIcon from '../../assets/img/mail.svg'; 
import GithubIcon from '../../assets/img/github.svg'; 
import uuid from 'react-uuid';

const Contact = () => {

    const contactLinks = [
        {
            href: 'https://www.linkedin.com/in/jake-wood-726141114/',
            src: `${LinkedinIcon}`,
            alt: 'linkedin-button'
        },
        {
            href: 'https://github.com/jakealistairwood',
            src: `${GithubIcon}`,
            alt: 'github-codebase-button'
        },
        {
            href: 'mailto:jakealistairwood@gmail.com',
            src: `${MailIcon}`,
            alt: 'email-contact-button'
        }
    ]

    return (
        <footer className={styles.contact}>
            <div className={styles.contact__container}>
                <a className={styles.contact__mailWrapper} href="mailto:jakealistairwood@gmail.com">jakealistairwood@gmail.com</a>
                <div>
                    {contactLinks.map(link => (
                        <a href={link.href} key={uuid()}>
                            <button className={styles.contactBtn}>
                                <img src={link.src} alt={link.alt} />
                            </button>
                        </a>
                    ))}
                </div>
                <small className={styles.copyright}>Jake Wood | All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Contact;
