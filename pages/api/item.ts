// pages/api/item.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

const stripHtmlTagsAndNewlines = (html: string) => {
    // 移除 HTML 标签并将多余的连续换行符替换为单个换行符
    let filteredText = html.replace(/<\/?[^>]+(>|$)/g, '').replace(/\n+/g, '\n').replace(/\n\s*\n/g, '\n');

    // 去掉开头的换行符
    if (filteredText.startsWith('\n')) {
        filteredText = filteredText.substring(1);
    }

    // 在最后添加一个换行符
    if (!filteredText.endsWith('\n')) {
        filteredText += '\n';
    }

    return filteredText;
};


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

                // 使用 cheerio 解析 HTML 内容并过滤掉标签和多余的换行符
                const $ = cheerio.load(chapterData.content);
                const filteredContent = stripHtmlTagsAndNewlines($.text());

                // 构建返回的数据结构
                const responseData = {
                    data: {
                        data: {
                            content: filteredContent,
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
