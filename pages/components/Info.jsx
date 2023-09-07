import React from 'react';
import Image from 'next/image';
import styles from './css/Info.module.css'; // 使用相对路径导入CSS文件

const Info = ({ bookInfo }) => {
    // 使用条件运算符检查 bookInfo 是否存在，如果不存在则创建一个空对象
    const bookData = bookInfo ? bookInfo : { book_info: {} };

    return (
        <div className={styles.info}>
            <Image
                src={bookData.book_info.audio_thumb_uri}
                alt="书籍封面"
                width="128" // 根据需要设置宽度
                height="128" // 根据需要设置高度
            />
            <div className={styles.text}>
                <div className={styles.title}>
                    <h1>{bookData.book_info.book_name}</h1>
                    <h3>作者: {bookData.book_info.author}</h3>
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: bookData.book_info.abstract ? bookData.book_info.abstract.replace(/\n　　/g, ' ') : '',
                }}
                />
                {/* 添加其他书籍信息字段 */}
            </div>
        </div>
    );
};

export default Info;
