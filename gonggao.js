const data = {
    1: [
        { title: '关于公司年会排练通知', date: '2024-12-05', views: 25 },
        { title: '运营部加入两名新同事', date: '2024-10-31', views: 106 },
    ],
    2: [
        { title: '早餐安排', date: '2024-12-05', views: 13 },
        { title: '中餐安排', date: '2024-12-05', views: 15 },
        { title: '晚餐安排', date: '2024-12-05', views: 16 },
    ],
};

function generateTable(data) {
    const rows = data
        .map(item => `
            <tr>
                <td><a href="#">${item.title}</a></td>
                <td>${item.date}</td>
                <td>${item.views}</td>
            </tr>
        `)
        .join('');
    return `
        <table class="table">
            <thead>
                <tr>
                    <th>标题</th>
                    <th>日期</th>
                    <th>浏览量</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function showDirectory(page) {
    const leftContent = document.querySelector('.left');
    const paginationLinks = document.querySelectorAll('.pagination a');

    leftContent.innerHTML = generateTable(data[page] || []);

    paginationLinks.forEach(link => link.classList.remove('active'));
    paginationLinks[page - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showDirectory(1);
});
