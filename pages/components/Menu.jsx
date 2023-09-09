import React from 'react';
import styles from './css/Menu.module.css'; // 引入css文件

const Menu = ({ itemDataList, sortOrder }) => {
    // 使用条件运算符检查 itemDataList 是否存在，如果不存在则返回一个空数组
    const items = itemDataList ? itemDataList : [];

    // 创建一个排序函数，根据章节标题中的数字进行排序
    const compareChapters = (a, b) => {
        const regex = /第(\d+)章/;
        const aMatch = a.title.match(regex);
        const bMatch = b.title.match(regex);

        if (!aMatch || !bMatch) {
            return 0; // 如果无法提取章节数字，则不进行排序
        }

        const aChapter = parseInt(aMatch[1]);
        const bChapter = parseInt(bMatch[1]);

        if (sortOrder === 'descending') {
            return bChapter - aChapter; // 降序排序
        } else {
            return aChapter - bChapter; // 默认升序排序
        }
    };

    // 根据排序函数对章节进行排序
    items.sort(compareChapters);

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
