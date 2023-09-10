import React from 'react';
import styles from './css/LoadingPage.module.css';

const LoadingPage = () => {
    return (
        <div className={styles.loadingPage}>
            <div className={styles.spinner}></div>
            <p>加载中</p>
        </div>
    );
};

export default LoadingPage;
