import React from 'react';
import s from './BtnFooter.module.css';

const BtnFooter = () => {
    return (
        <button className={s.Btn_subscription} type="submit">
            <span className={s.Btn_text}>Подписаться</span>
            <svg className={s.Icon_send} width="24" height="24">
                <use href="./images/icons/sprite.svg#icon-send"></use>
            </svg>
        </button>
    )
};

export default BtnFooter;