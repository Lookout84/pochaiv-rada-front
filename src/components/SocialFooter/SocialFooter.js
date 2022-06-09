import React from "react";
// import {  } from '../../data/social.json';
import s from './SocialFooter.module.css';

const SocialFooter = ({ link, title, icon }) => {
    return (
        <a className={s.Social_footer_item} href={link} aria-label={title} target="_blank" rel="noopener noreferrer">
            <img src={icon} className={s.Footer_icon} width="20px" height="20px" alt={title} />
        </a>
    )
}


export default SocialFooter;