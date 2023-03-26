import styles from './Features.module.css';

import { m } from 'framer-motion';

import { CiDeliveryTruck, MdOutlinePayment, GiMoneyStack } from '../../utils/index';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const Features = () => {
    const commonAnimationProperties = {
        viewport: { once: true, amount: 'some' },
        transition: { type: 'spring', stiffness: 200, delay: 0.3 },
    };

    return (
        <section
            className={`relative mt-[170vh] z-[var(--z-index-400)] bg-[var(--primary-background-900)] clipped_polygon_section pt-48 pb-8 px-8`}
        >
            <div className={`section_wrapper ${styles.features_section_wrapper}`}>
                <h2 className="intro_title mb-6">Seamless Shopping</h2>
                <div className={`${styles.features_cont}`}>
                    <m.div
                        className={`${styles.feature_cont} ${styles.first_feature_cont}`}
                        initial={{ x: '100%' }}
                        whileInView={{ x: 0 }}
                        {...commonAnimationProperties}
                    >
                        <div className="m-auto h-16 w-16 rounded-[50%] bg-[var(--secondary-background-300)] text-4xl flex justify-center items-center">
                            <CiDeliveryTruck />
                        </div>
                        <h3 className="font-extrabold tracking-[var(--letter-spacing-smallest)] text-lg">
                            Lightning fast delivery
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eius dolorem
                            asperiores accusamus aspernatur. Sequi ea ab consectetur voluptatum nam.
                        </p>
                    </m.div>
                    <m.div
                        className={`${styles.feature_cont} ${styles.second_feature_cont}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 'some' }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="m-auto h-16 w-16 rounded-[50%] bg-[var(--secondary-background-300)] text-4xl flex justify-center items-center">
                            <MdOutlinePayment />
                        </div>
                        <h3 className="font-extrabold tracking-[var(--letter-spacing-smallest)] text-lg">
                            All forms of payment accepted
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eius dolorem
                            asperiores accusamus aspernatur. Sequi ea ab consectetur voluptatum nam.
                        </p>
                    </m.div>
                    <m.div
                        className={`${styles.feature_cont} ${styles.third_feature_cont}`}
                        initial={{ x: '-100%' }}
                        whileInView={{ x: 0 }}
                        {...commonAnimationProperties}
                    >
                        <div className="m-auto h-16 w-16 rounded-[50%] bg-[var(--secondary-background-300)] text-4xl flex justify-center items-center">
                            <GiMoneyStack />
                        </div>
                        <h3 className="font-extrabold tracking-[var(--letter-spacing-smallest)] text-lg">
                            Guaranteed money back
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eius dolorem
                            asperiores accusamus aspernatur. Sequi ea ab consectetur voluptatum nam.
                        </p>
                    </m.div>
                </div>
                <Link to="/products">
                    <Button classes={`block bg-blue-gradient m-auto`}>Check our products</Button>
                </Link>
            </div>
        </section>
    );
};

export default Features;
