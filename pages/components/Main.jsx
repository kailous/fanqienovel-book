import React from 'react';
import styles from './css/Main.module.css'; // 使用相对路径导入CSS文件
const Main = ({ chapterData }) => {
    return (
        <div className={styles.main}>
            <p
                dangerouslySetInnerHTML={{
                    __html: chapterData.content.replace(/\n/g, '<br />').replace(/　　/g, ''),
                }}
            />
        </div>
    );
};

export default Main;