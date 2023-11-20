import footerLogo from '../assets/logo-2-min.png';

import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineFacebook } from '../utils/index';

import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="relative bg-black z-[var(--z-index-400)]">
            <footer className={`max-w-7xl m-auto ${styles.footer_container}`}>
                <div className={`${styles.footer} ${styles.footer_first_cont}`}>
                    <div className={styles.footer_logo_cont}>
                        <img src={footerLogo} alt="X-Mart logo" />
                    </div>
                    <ul className={styles.social_links_container}>
                        <li className={`gradient_border ${styles.social_link_cont}`}>
                            <Link to="https://www.instagram.com/being_exception_/" target="_blank">
                                <AiOutlineInstagram />
                            </Link>
                        </li>
                        <li className={`gradient_border ${styles.social_link_cont}`}>
                            <Link
                                to="https://www.youtube.com/channel/UCz7gPFmInQ9oOpL_wW0s8rw"
                                target="_blank"
                            >
                                <AiOutlineYoutube />
                            </Link>
                        </li>
                        <li className={`gradient_border ${styles.social_link_cont}`}>
                            <Link
                                to="https://www.linkedin.com/in/pravin-mudaliyar-022498224/"
                                target="_blank"
                            >
                                <AiOutlineLinkedin />
                            </Link>
                        </li>
                        <li className={`gradient_border ${styles.social_link_cont}`}>
                            <Link to="#" target="_blank">
                                <AiOutlineFacebook />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footer} ${styles.footer_second_cont}`}>
                    <form
                        className={styles.newsletter_form}
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                    >
                        <h4 className={styles.newsletter_title}>JOIN OUR NEWSLETTER</h4>
                        <label htmlFor="newsletter" className={styles.newsletter_label}>
                            Stay up to date with all of our updates.
                        </label>
                        <input
                            id="newsletter"
                            type="email"
                            placeholder="email@example.com"
                            className={styles.newsletter_input}
                        />
                        <button className={styles.newsletter_join_btn}>Join</button>
                    </form>
                    <div className={styles.site_links_container}>
                        <ul className={styles.site_link_cont}>
                            <h3 className={styles.site_link_title}>Explore</h3>
                            <li>
                                <a href="#">Reserve</a>
                            </li>
                            <li>
                                <a href="#">Menu</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Gallery</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                        <ul className={styles.site_link_cont}>
                            <h3 className={styles.site_link_title}>Community</h3>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Guidelines</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.address_container}>
                        <h4 className={styles.address_title}>Address</h4>
                        <p className={styles.address_content}>
                            <span>222 222 5555</span>
                            <span>123 Demo Eve</span>
                            <span>Mum, MH</span>
                            <span className="cursor-not-allowed select-none"> Google Maps →</span>
                        </p>
                    </div>
                </div>
                <div className={`${styles.footer} ${styles.footer_last_cont}`}>
                    {/* <p className={styles.footer_copyright}>© X-MART 2019 - {new Date().getFullYear()}</p> */}
                    <p className={styles.footer_copyright}>
                        All rights reserved <sup>&copy;</sup>{' '}
                        <span
                            style={{ fontFamily: 'var(--ff-secondary)' }}
                            className="font-bold text-[var(--font-color-300)]"
                        >
                            Pravin
                        </span>
                    </p>
                    <ul className={styles.additional_links_container}>
                        <li>
                            <a href="#" className="white_hover_underline">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="#" className="white_hover_underline">
                                Cookie policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="white_hover_underline">
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="white_hover_underline">
                                License
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
