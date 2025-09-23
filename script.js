// script.js
// 获取按钮和联系信息的元素
const contactBtn = document.getElementById('contactBtn');
const contactInfo = document.getElementById('contactInfo');

// 给按钮添加一个点击事件监听器
contactBtn.addEventListener('click', () => {
    // 切换联系信息的显示状态
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
        contactBtn.textContent = '隐藏联系方式';
    } else {
        contactInfo.style.display = 'none';
        contactBtn.textContent = '点我显示联系方式';
    }
});