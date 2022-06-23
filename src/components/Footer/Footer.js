import React from 'react';
import s from './Footer.module.css';
import BtnFooter from '../BtnFooter/BtnFooter';
import FormFooter from '../FormFooter/FormFooter';
import SocialFooter from '../SocialFooter/SocialFooter';
console.log({ s });
const mailIcon = "http://pochaiv-rada.gov.ua/images/icons/mail.svg";
const telIcon = "http://pochaiv-rada.gov.ua/images/icons/phone.svg";

const Footer = ({ socials }) => {
    return (
        <footer>
            <section className={`${s.Footer} ${s.Section}`}>
                <div className={`${s.Container} ${s.Footer_box} ${s.Flexbox}`}>
                    <div className={`${s.Footer_box_item} ${s.Footer_flexbox}`}>
                        <div className={s.Footer_box_list}>
                            <address className={s.Address}>
                                <ul className={s.List}>
                                    <li className={s.Logo_footer}>
                                        <span className={s.Logo_web}>Почаївська міська рада</span>
                                        <div className={s.Logo_white}>офіційна сторінка</div>
                                    </li>
                                    <li className={s.Addr_footer}><a href="https://www.google.com.ua/maps/place/Pochayivs%CA%B9ka+Mis%CA%B9ka+Rada/@50.0041187,25.5098075,384m/data=!3m1!1e3!4m5!3m4!1s0x472fe604c7c3927b:0x4164741d6b0e99af!8m2!3d50.0040922!4d25.50918?hl=ua" target="blank">
                                        <span className={s.Addr}>47025, м. Почаїв, Тернопільська область, Кременецький район, вул. Возз'єдання, 16</span></a>
                                    </li>
                                    <li className={s.Addr_footer}><img className={s.icon} src={mailIcon} alt="" />
                                        <a href="mailto:14052785@mail.gov.ua" className={s.Contacts_footer} target="blank">14052785@mail.gov.ua</a>
                                    </li>
                                    <li className={s.Addr_footer}><img className={s.icon} src={telIcon} alt="" />
                                        <a href="tel:380354661168" className={s.Contacts_footer} target="blank">+38 03546 611 68</a>
                                    </li>
                                </ul>
                            </address>
                        </div>
                        <div className={s.Footer_box_list}>
                            <h2 className={s.Footer_title}>Ми в соціальних мережах</h2>
                            <ul className={`${s.List} ${s.Social_footer}`}>
                                {socials.map((social) =>
                                    <li key={social.id} className={s.Social_footer_link}>
                                        <SocialFooter link={social.link} title={social.title} icon={social.icon} />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className={s.Footer_box_item}>
                        <div className={s.Footer_form_box}>
                            <h2 className={s.Footer_title}>Підписатись на новини</h2>
                            <div className={s.Footer_subscription_box}>
                                <FormFooter />
                                <BtnFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer >
    )
};

export default Footer;