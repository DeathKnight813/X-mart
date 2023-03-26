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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid voluptatum
                            inventore eveniet sed quasi possimus sapiente? Quae sint nihil id vitae recusandae
                            eius exercitationem facere dolorum soluta ea maiores ipsa voluptatem, minus
                            repudiandae ratione ipsum magni deleniti voluptatum culpa omnis, eum hic unde
                            nulla quos?
                        </p>
                        <div className={`${styles.blob}`}></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
