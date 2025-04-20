// 新闻头条滚动效果
document.addEventListener('DOMContentLoaded', function() {
    // 获取新闻头条元素
    const newsTicker = document.querySelector('.news-ticker-wrapper');
    const newsItems = document.querySelectorAll('.news-ticker-item');
    
    if (!newsTicker || newsItems.length === 0) return;
    
    let isHovered = false;
    let scrollPosition = 0;
    let scrollHeight = newsTicker.scrollHeight;
    let containerHeight = newsTicker.clientHeight;
    
    // 当鼠标悬停在新闻头条上时，暂停滚动
    newsTicker.addEventListener('mouseenter', function() {
        isHovered = true;
    });
    
    // 当鼠标离开新闻头条时，继续滚动
    newsTicker.addEventListener('mouseleave', function() {
        isHovered = false;
    });
    
    // 自动滚动函数
    function autoScroll() {
        if (!isHovered && newsItems.length > 2) {
            scrollPosition += 1;
            
            // 如果滚动到底部，重置滚动位置
            if (scrollPosition >= scrollHeight - containerHeight) {
                // 平滑地回到顶部
                scrollPosition = 0;
                newsTicker.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // 正常滚动
                newsTicker.scrollTo({
                    top: scrollPosition,
                    behavior: 'auto'
                });
            }
        }
    }
    
    // 每50毫秒滚动一次
    const scrollInterval = setInterval(autoScroll, 50);
    
    // 如果有新的新闻项目添加，更新滚动高度
    function updateScrollHeight() {
        scrollHeight = newsTicker.scrollHeight;
        containerHeight = newsTicker.clientHeight;
    }
    
    // 监听窗口大小变化，更新滚动高度
    window.addEventListener('resize', updateScrollHeight);
    
    // 初始化后延迟更新一次滚动高度，确保所有内容都已加载完成
    setTimeout(updateScrollHeight, 500);
});
