import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loading_bar_container}>
            <div className={`${styles.bar} ${styles.bar_1}`}></div>
            <div className={`${styles.bar} ${styles.bar_2}`}></div>
            <div className={`${styles.bar} ${styles.bar_3}`}></div>
        </div>
    );
};

export default Loading;
