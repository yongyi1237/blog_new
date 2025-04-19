const { exec } = require('child_process');
const net = require('net');

// 创建测试服务器检查端口状态
const server = net.createServer();

// 封装git pull操作
function gitPull(callback) {
  exec('git pull', (error, stdout, stderr) => {
    if (error) {
      console.error(`Git pull 失败: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Git stderr: ${stderr}`);
      return;
    }
    console.log('Git pull 成功，最新代码已更新');
    callback(); // 执行后续操作
  });
}

// 检查端口可用性并启动服务器
function startServer(port) {
  server.listen(port, () => {
    server.close(() => {
      exec(`hexo server -p ${port}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`执行错误: ${error}`);
          return;
        }
        console.log(`Hexo 服务器已启动在端口 ${port}`);
        console.log(`输出: ${stdout}`);
        console.log(`错误: ${stderr}`);
      });
    });
  });

  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.error(`错误：${port} 端口已被占用`);
      process.exit(1);
    }
    if (e.code === 'EACCES') {
      console.error(`错误：需要管理员权限才能使用 ${port} 端口`);
      process.exit(1);
    }
  });
}

// 执行流程
gitPull(() => {
  console.log('开始检查端口...');
  startServer(3000); // 这里可以改为 startServer(443) 使用其他端口
});