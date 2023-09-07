import React from 'react';
import styles from './css/Menu.module.css'; // 引入css文件

const Menu = ({ itemDataList }) => {
    // 使用条件运算符检查 itemDataList 是否存在，如果不存在则返回一个空数组
    const items = itemDataList ? itemDataList : [];

    return (
        <ul className={styles.menu}>
            {items.map((item) => (
                <li key={item.item_id}>
                    <a href={`/chapter?itemId=${item.item_id}`}>{item.title}</a>
                    <span>共计{item.chapter_word_number}字</span>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
