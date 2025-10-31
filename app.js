const express = require('express');
const app = express();
const port = 3000; // 应用监听3000端口

app.get('/', (req, res) => {
  // 获取当前服务器时间并格式化
  const currentTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  res.send(`
    <h1>自动化部署(CI/CD) 复习成功！</h1>
    <p>This is a dynamic Node.js application.</p>
    <p>Current server time in Tokyo is: <strong>${currentTime}</strong></p>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});