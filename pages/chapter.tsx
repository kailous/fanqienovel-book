// pages/chapter.tsx
// 章节详情页

// 导入依赖
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './styles/chapter.module.css';

// 导入组件
import TopBar from './components/TopBar'; // 顶部栏
import BottomBar from './components/BottomBar'; // 底部栏
import Main from './components/Main'; // 主体
import Error from './components/Error'; // 导入 Error 组件
import MyHead from './components/MyHead'; // 导入 MyHead 组件
import LoadingPage from './components/LoadingPage'; // 导入 LoadingPage 组件

// 定义组件
const Chapter = () => {
    const router = useRouter();
    const { itemId } = router.query; // 从路由参数中获取 itemId
    const [error, setError] = useState<string | null>(null); // 错误消息
    const [chapterData, setChapterData] = useState<any>(null); // 章节数据
    const [bookInfo, setBookInfo] = useState<any>(null); // 书籍信息
    const [loading, setLoading] = useState(true); // 控制加载页面显示

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
                            setLoading(false); // 请求成功后停止显示加载页面
                        })
                        .catch((bookError) => {
                            console.error('获取书籍信息失败:', bookError);
                            // 处理书籍信息获取失败的情况
                            setLoading(false); // 请求失败后停止显示加载页面
                        });
                })
                .catch((error) => {
                    console.error('获取章节内容失败:', error);
                    setError('获取章节内容失败，来到了没有内容的荒原，请返回目录重试！'); // 设置错误消息
                    // const href = '/';
                    setLoading(false); // 请求失败后停止显示加载页面
                });
        }
    }, [itemId]);

    useEffect(() => {
        // 在组件加载时应用 body 样式
        document.body.classList.add(styles.chapterBody);

        // 在组件卸载时删除 body 样式
        return () => {
            document.body.classList.remove(styles.chapterBody);
        };
    }, []);

    // 渲染
    return (
        <div className={styles.chapter}>
            {loading ? (
                <LoadingPage /> // 根据 loading 状态来决定是否显示加载页面
            ) : (
                <>
                    <MyHead bookInfo={bookInfo} chapterData={chapterData} />
                    {error && <Error message={error} href="/" />}
                    {chapterData && (
                        <>
                            <TopBar chapterData={chapterData} bookInfo={bookInfo} />
                            <Main chapterData={chapterData} />
                            <BottomBar chapterData={chapterData} />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Chapter;
