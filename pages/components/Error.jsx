// components/Error.jsx

import React from 'react';
import styles from './css/Error.module.css'

const Error = ({message}) => {
    return (
        <div className={styles.errorBackground} role="alert">
            <div className={styles.errorMessage}>
                <div className={styles.info}>
                    <h1>啊~ 哦～～～</h1>
                    <p dangerouslySetInnerHTML={{__html: message}}></p>
                </div>
                <button onClick={() => window.location.href = '/'}>
                    <svg className={styles.icon}>
                        <use href="#close-one"></use>
                    </svg>
                </button>
                <svg className={styles.errorIcon}>
                    <use href="#erroe"></use>
                </svg>
            </div>
        </div>
    );
};

export default Error;
