import { ScrollRestoration } from 'react-router-dom';

import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import MainNavbar from '../components/Navbar/MainNavbar';
import Footer from '../components/Footer';

import { useState } from 'react';

const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
};

const RootLayout = () => {
    const location = useLocation();

    return (
        <LazyMotion features={domAnimation} strict>
            <MainNavbar />
            <main className="main">
                <AnimatePresence mode="wait">
                    <m.section
                        key={location.pathname}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AnimatedOutlet />
                    </m.section>
                </AnimatePresence>
            </main>
            <Footer />
            <ScrollRestoration />
        </LazyMotion>
    );
};

export default RootLayout;
