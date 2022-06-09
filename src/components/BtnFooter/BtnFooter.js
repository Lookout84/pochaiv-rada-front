import React from 'react';
import s from './BtnFooter.module.css';
import iconSend from '../../images/icons/icon-send.png';

const BtnFooter = () => {
    return (
        <button className={s.Btn_subscription} type="submit">
            <span className={s.Btn_text}>Підписатись</span>
            <img className={s.Icon_send} width="24" height="24" alt="" src={iconSend} />
        </button>
    )
};

export default BtnFooter;