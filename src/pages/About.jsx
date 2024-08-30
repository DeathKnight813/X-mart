import styles from './About.module.css';

const AboutPage = () => {
    return (
        <>
            <div className="page_intro_background">About us</div>
            <section className={`bg-[#1f1f47]`}>
                <div className={`section_wrapper ${styles.about_container}`}>
                    <div className={`${styles.content_container} ${styles.content_container_styling}`}>
                        <h2 className={styles.title}>Our story</h2>
                        <p className={styles.content}>
                        The company itself is a very successful company. It will come from the finder of some pleasures, but as if we could be wise? What is the nothingness of this life of refusing to make the exercise of its pains freed from those greater pleasures, less the reason of repudiating the very pleasures of the great indulgence of all the guilt, whence there are none of him here?

                        </p>
                        <div className={`${styles.blob}`}></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
