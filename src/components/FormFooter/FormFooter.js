import React from "react";
import s from './FormFooter.module.css';

const FormFooter = () => {
    return (
        <form className={s.Footer_form}>
            <input className={s.Subscription_field} id="subscription-mail" type="email" placeholder="E-mail" />
        </form>
    )
}


export default FormFooter;