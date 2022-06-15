import React from 'react';
import s from './Footer.module.css';
import BtnFooter from '../BtnFooter/BtnFooter';
import FormFooter from '../FormFooter/FormFooter';
import SocialFooter from '../SocialFooter/SocialFooter';
console.log({ s });

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
                                        <p><span className={s.Logo_white}>офіційна сторінка</span></p>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <span className={s.Addr}>47025, м. Почаїв, Тернопільська область, Кременецький район, вул. Возз'єдання, 16</span>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <a href="mailto:pochaiv_rada@ukr.net" className={s.Contacts_footer}>pochaiv_rada@ukr.net</a>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <a href="mailto:14052785@mail.gov.ua" className={s.Contacts_footer}>14052785@mail.gov.ua</a>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <a href="tel:380354661168" className={s.Contacts_footer}>+38 03546 611 68</a>
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