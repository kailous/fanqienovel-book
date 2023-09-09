// pages/index.js
// 首页 - 书籍目录页

import {useEffect, useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';

import Menu from './components/Menu'; // 导入 Menu 组件
import Info from './components/Info'; // 导入 Info 组件
import Error from './components/Error'; // 导入 Error 组件
import MyHead from './components/MyHead'; // 导入 MyHead 组件
import NullPage from './components/NullPage'; // 导入 NullPage 组件
import Sort from './components/Sort'; // 导入 Sort 组件

const BookShelf = () => {
    const router = useRouter();
    const {bookId} = router.query; // 从路由参数中获取 bookId
    const [error, setError] = useState(null); // 错误消息
    const [bookInfo, setBookInfo] = useState(null); // 书籍信息

    useEffect(() => {
        if (bookId) {
            // 发送请求获取书籍信息
            axios.get(`/api/book?bookId=${bookId}`)
                .then((response) => {
                    setBookInfo(response.data.data.data);
                })
                .catch((error) => {
                    console.error('获取图书信息失败：', error);
                    setError('获取图书信息失败，请检查<span>bookId</span>是否正确，或者稍后再试。'); // 设置错误消息
                    //     创建一个变量，用于存放报错关闭后跳转的链接，这里是跳转到首页
                    const href = '/';
                });
        }
    }, [bookId]);
    const [sortOrder, setSortOrder] = useState('ascending'); // 初始排序顺序
    // 创建一个状态来保存排序方式，初始值可以是默认的排序方式
    const handleSortChange = () => {
        // 根据当前排序方式进行切换
        if (sortOrder === 'ascending') {
            setSortOrder('descending'); // 切换到降序
        } else {
            setSortOrder('ascending'); // 切换到升序
        }
    };
    // 渲染
    return (
        <div>
            <MyHead bookInfo={bookInfo}/>
            {error && <Error message={error} href="/"/>}

            {bookInfo ? (
                <>
                    <Info bookInfo={bookInfo}/>
                    {bookInfo.item_data_list && (
                        <>
                            <Sort sortOrder={sortOrder} onSortChange={handleSortChange}/>
                            <Menu sortOrder={sortOrder} itemDataList={bookInfo.item_data_list}/>
                        </>
                    )}
                </>
            ) : (
                <>
                    <NullPage/>
                </>
            )}
        </div>

    );
};

export default BookShelf;
