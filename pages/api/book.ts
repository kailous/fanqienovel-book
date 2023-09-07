// pages/api/book.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            // 获取查询参数中的 bookId
            const { bookId } = req.query;

            // 发送 GET 请求以获取书籍信息
            const response = await axios.get(`http://1693395060501.fqapi.jilulu.cn/catalog?book_id=${bookId}`);

            console.log('API Response:', response.data); // 添加日志

            if (response.status === 200) {
                // 提取所需的书籍信息和 item_data_list
                const bookInfo = response.data.data.data.book_info;
                const itemDataList = response.data.data.data.item_data_list.map((item) => ({
                    chapter_word_number: item.chapter_word_number,
                    item_id: item.item_id,
                    title: item.title,
                }));

                // 返回所需字段，包括 item_data_list
                const bookData = {
                    data: {
                        data: {
                            book_info: {
                                audio_thumb_uri: bookInfo.audio_thumb_uri,
                                author: bookInfo.author,
                                abstract: bookInfo.abstract,
                                book_name: bookInfo.original_book_name,
                                last_chapter_item_id: bookInfo.last_chapter_item_id,
                                last_chapter_title: bookInfo.last_chapter_title,
                                original_book_name: bookInfo.original_book_name,
                                pure_category_tags: bookInfo.pure_category_tags,
                                tags: bookInfo.tags,
                            },
                            item_data_list: itemDataList, // 包括 item_data_list
                        },
                    },
                };

                res.status(200).json(bookData);
            } else {
                res.status(500).json({ error: 'Failed to fetch book data.' });
            }
        } catch (error) {
            console.error('API Error:', error); // 添加错误日志
            res.status(500).json({ error: 'An error occurred while fetching book data.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
    }
};
