// components/Error.jsx

import React from 'react';
import styles from './css/Error.module.css'

const Error = ({message}) => {
    return (
        <div className={styles.errorBackground} role="alert">
            <div className={styles.errorMessage}>
                <div>
                <h1>-    出错了    -</h1>
                    <p dangerouslySetInnerHTML={{ __html: message }}></p>
                </div>
                <button onClick={() => window.location.href = '/'}>确定</button>
            </div>
        </div>
    );
};

export default Error;
