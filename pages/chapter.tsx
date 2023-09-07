// pages/chapter.tsx
// 章节详情页

// 导入依赖
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// 导入组件
import TopBar from './components/topBar'; // 顶部栏
import BottomBar from './components/bottomBar'; // 底部栏
import Main from './components/main'; // 主体
import Error from './components/Error'; // 导入 Error 组件
import MyHead from './components/MyHead'; // 导入 MyHead 组件

// 定义组件
const Chapter = () => {
    const router = useRouter();
    const { itemId } = router.query; // 从路由参数中获取 itemId
    const [error, setError] = useState<string | null>(null); // 错误消息
    const [chapterData, setChapterData] = useState<any>(null); // 章节数据
    const [bookInfo, setBookInfo] = useState<any>(null); // 书籍信息

    useEffect(() => {
        if (itemId) {
            // 发送请求获取章节内容
            axios.get(`/api/item?itemId=${itemId}`)
                .then((response) => {
                    setChapterData(response.data.data.data);
                    // 获取书籍信息
                    const bookId = response.data.data.data.novel_data.book_id;
                    axios.get(`/api/book?bookId=${bookId}`)
                        .then((bookResponse) => {
                            setBookInfo(bookResponse.data.data.data);
                        })
                        .catch((bookError) => {
                            console.error('获取书籍信息失败:', bookError);
                            // 处理书籍信息获取失败的情况
                        });
                })
                .catch((error) => {
                    console.error('获取章节内容失败:', error);
                    setError('获取章节内容失败，来到了没有内容的荒原，请返回目录重试！'); // 设置错误消息
                });
        }
    }, [itemId]);

    // 渲染
    // @ts-ignore
    return (
        <div>
            <MyHead bookInfo={bookInfo} />
            {error && <Error message={error} />} {/*渲染错误消息*/}
            {chapterData && (
                <>
                    <TopBar chapterData={chapterData} bookInfo={bookInfo} />
                    <Main chapterData={chapterData} />
                    <BottomBar chapterData={chapterData} />
                </>
            )}
        </div>
    );
};

export default Chapter;
