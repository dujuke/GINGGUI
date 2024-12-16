// 如果您以后有JavaScript功能需要实现，您可以在这里添加相应的脚本。

// 示例：处理悬浮效果和动态显示
document.addEventListener("DOMContentLoaded", function() {
    const companyIntro = document.querySelector('.company-intro');
    const hoverInfo = document.querySelector('.hover-info');

    companyIntro.addEventListener('mouseover', function() {
        hoverInfo.style.display = 'block';
    });

    companyIntro.addEventListener('mouseout', function() {
        hoverInfo.style.display = 'none';
    });
});
