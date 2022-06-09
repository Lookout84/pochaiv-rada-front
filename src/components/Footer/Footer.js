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
                                        <span className={s.Logo_web}>Web </span>
                                        <span className={s.Logo_white}>Studio</span>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <span className={s.Addr}>г. Киев, пр-т Леси Украинки, 26</span>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <a href="mailto:info@devstudio.com" className={s.Contacts_footer}>info@devstudio.com</a>
                                    </li>
                                    <li className={s.Addr_footer}>
                                        <a href="tel:380961111111" className={s.Contacts_footer}>+38 096 111 11 11</a>
                                    </li>
                                </ul>
                            </address>
                        </div>
                        <div className={s.Footer_box_list}>
                            <h2 className={s.Footer_title}>Присоединяйтесь</h2>
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
                            <h2 className={s.Footer_title}>Подпешитесь на рассылку</h2>
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