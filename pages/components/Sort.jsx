// components/Sort.jsx

import React, { useState } from 'react';
import styles from './css/Sort.module.css';

const Sort = ({ onSortChange }) => {
    const [sortOrder, setSortOrder] = useState('default');

    const handleSortClick = () => {
        // 切换排序方式
        const newSortOrder = sortOrder === 'default' ? 'ascending' : 'descending';
        setSortOrder(newSortOrder);
        // 调用传递给组件的回调函数，将更新后的排序方式传递给父组件
        onSortChange(newSortOrder);
    };

    return (
        <div className={styles.surt}>
            {/* 按钮用于切换排序 */}
            <button onClick={handleSortClick}>
                <svg className="iconpark-icon">
                    <use href="#sort-two"></use>
                </svg>
                {/*切换排序顺序: {sortOrder === 'ascending' ? '升序' : '降序'}*/}
            </button>
        </div>
    );
};

export default Sort;
