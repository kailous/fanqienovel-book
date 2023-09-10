import Head from 'next/head';
import Script from "next/script";

const MyHead = ({bookInfo,chapterData}) => {
    // 检查是否存在bookInfo以及book_info属性
    const bookName = bookInfo && bookInfo.book_info && bookInfo.book_info.book_name;
    const bookTitle = chapterData && chapterData.novel_data && chapterData.novel_data.book_name;
    const author = bookInfo && bookInfo.book_info && bookInfo.book_info.author;
    const icon = bookInfo && bookInfo.book_info && bookInfo.book_info.audio_thumb_uri;
    const currentURL = typeof window !== 'undefined' ? window.location.href : '';

    // 填充description内容，你可以根据实际需要选择适当的属性
    const description = bookInfo && bookInfo.book_info && bookInfo.book_info.abstract.replace(/\n　　/g, ' ');
    // 动态生成 manifest.json 内容
    const manifest = {
        name: bookName,
        short_name: bookName,
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: icon || 'URL to Default Icon Image (192x192)',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: icon || 'URL to Default Icon Image (512x512)',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
    return (
        <Head>
            <title>{bookName || bookTitle || '番茄阅读器'}</title>
            <meta name="description" content={description || '番茄小说第三方阅读器，输入bookId即可阅读。'}/>
            <meta name="author" content={author} />
            <link rel="icon" href={icon} />
            <meta name="manifest" content={`data:application/manifest+json,${JSON.stringify(manifest)}`} />

            {/* 其他 */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />

            {/* 添加社交媒体平台的 meta */}
            <meta property="og:title" content={bookName || bookTitle || '番茄阅读器'} />
            <meta property="og:description" content={description || '番茄小说第三方阅读器，输入bookId即可阅读。'} />
            <meta property="og:image" content={icon} />
            <meta property="og:url" content={currentURL} /> {/* 替换成你的网站 URL */}

            <meta name="twitter:title" content={bookName || bookTitle || '番茄阅读器'} />
            <meta name="twitter:description" content={description || '番茄小说第三方阅读器，输入bookId即可阅读。'} />
            <meta name="twitter:image" content={icon} />

            {/* 更多社交媒体平台的 meta 标签 */}


            {/* 字节图标库 */}
            <Script src="./icons.js" strategy="lazyOnload" />
            <script src="./icons.js" async></script>
        </Head>
    );
};

export default MyHead;
