import React from 'react';
import styles from './css/info.module.css'; // 使用相对路径导入CSS文件

const Info = ({bookInfo}) => {
    return (
        <div className={styles.info}>
            <img
                src={bookInfo.book_info.audio_thumb_uri}
                alt="书籍封面"
            />
            <div className={styles.text}>
                <div className={styles.title}>
                    <h1>{bookInfo.book_info.book_name}</h1>
                    <h3>作者: {bookInfo.book_info.author}</h3>
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: bookInfo.book_info.abstract.replace(/\n　　/g, ' '),
                }}
                />
                {/* 添加其他书籍信息字段 */}
            </div>
        </div>
    );
};

export default Info;
