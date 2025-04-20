/**
 * 新闻滚动系统 3.0 - CSS动画版
 * 使用CSS动画实现滚动，简化JavaScript逻辑
 */
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有新闻区域
    prepareNewsTickerContent('tickerWrapper');
    prepareNewsTickerContent('tickerWrapperEn');
    
    // 添加科技风格元素
    addTechFlares();
});

/**
 * 准备滚动新闻内容 - 复制内容以支持无缝滚动
 * @param {string} wrapperId - 滚动容器的ID
 */
function prepareNewsTickerContent(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    
    // 先获取所有原始项目
    const originalItems = wrapper.innerHTML;
    
    // 将原始项目复制一遍，实现无缝滚动效果
    wrapper.innerHTML = originalItems + originalItems;
}

/**
 * 添加科技风格元素
 */
function addTechFlares() {
    // 获取所有新闻容器
    const containers = document.querySelectorAll('.news-ticker');
    containers.forEach(container => {
        // 添加装饰光点
        for (let i = 0; i < 3; i++) {
            const flare = document.createElement('div');
            flare.className = 'tech-flare';
            
            // 随机位置和大小
            const top = 10 + Math.random() * 80; 
            const left = 10 + Math.random() * 80;
            const size = 2 + Math.random() * 4;
            const delay = Math.random() * 5;
            
            // 设置光点样式
            flare.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                top: ${top}%;
                left: ${left}%;
                background-color: rgba(59, 130, 246, 0.4);
                border-radius: 50%;
                filter: blur(2px);
                opacity: 0;
                pointer-events: none;
                z-index: 1;
                animation: flickerFlare 4s infinite;
                animation-delay: ${delay}s;
            `;
            
            container.appendChild(flare);
        }
    });
}

// 添加动画样式
if (!document.getElementById('tech-animations')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'tech-animations';
    styleSheet.textContent = `
        @keyframes flickerFlare {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 0.5; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.8); }
        }
    `;
    document.head.appendChild(styleSheet);
}
