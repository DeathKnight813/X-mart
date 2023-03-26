import { Link, NavLink } from 'react-router-dom';

import navbarLogo from '../../assets/logo-1.png';

import styles from './MainNavbar.module.css';
import Hamburger from './Hamburger';
import PrimaryNavbar from './PrimaryNavbar';
import { useGlobalContext } from '../../store/global-context';

const MainNavbar = () => {
    const { navHeaderPosition } = useGlobalContext();

    return (
        <header className={styles.header} style={{ position: navHeaderPosition }}>
            <div className={styles.header_content_container}>
                <Link className="sm:w-64 w-9/12" to="/">
                    <img src={navbarLogo} alt="Brand logo" />
                </Link>
                <nav className={styles.navbar_container}>
                    <PrimaryNavbar parentClass={styles.navbar} buttonClass={styles.nav_cart_btn} />
                </nav>
            </div>
            <Hamburger />
        </header>
    );
};

export default MainNavbar;
