// pages/api/item.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const itemHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            // 获取查询参数中的 itemId
            const { itemId } = req.query;

            // 发送 GET 请求以获取章节内容
            const response = await axios.get(`//list.fqapi.jilulu.cn/content?item_id=${itemId}`);

            if (response.status === 200) {
                // 提取所需的章节内容和相关信息
                const chapterData = response.data.data.data;

                // 构建返回的数据结构
                const responseData = {
                    data: {
                        data: {
                            content: chapterData.content,
                            novel_data: {
                                author: chapterData.novel_data.author,
                                abstract: chapterData.novel_data.abstract,
                                book_id: chapterData.novel_data.book_id,
                                book_name: chapterData.novel_data.book_name,
                                create_time: chapterData.novel_data.create_time,
                                next_item_id: chapterData.novel_data.next_item_id,
                                pre_item_id: chapterData.novel_data.pre_item_id,
                                order: chapterData.novel_data.order,
                                serial_count: chapterData.novel_data.serial_count,
                                title: chapterData.novel_data.title,
                            },
                        },
                    },
                };

                res.status(200).json(responseData);
            } else {
                res.status(500).json({ error: 'Failed to fetch chapter content.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching chapter content.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed.' });
    }
};

export default itemHandler;
