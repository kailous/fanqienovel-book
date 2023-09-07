// components/Menu.jsx

import React from 'react';
import styles from './css/menu.module.css'; // 引入css文件
const Menu = ({ itemDataList }) => {
    return (
        <ul className={styles.menu}>
            {itemDataList.map((item) => (
                <li key={item.item_id}>
                    <a href={`/chapter?itemId=${item.item_id}`}>{item.title}</a>
                    <span>共计{item.chapter_word_number}字</span>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
