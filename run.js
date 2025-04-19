// const { exec } = require('child_process')
// exec('hexo server -p 80',(error, stdout, stderr) => {     //指定端口
//   if(error){
//     console.log(`exec error: ${error}`)
//     return
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// })
const { exec } = require('child_process');
const net = require('net');

// 创建测试服务器检查端口状态
const server = net.createServer();

// server.on('error', (e) => {
//   if (e.code === 'EADDRINUSE') {
//     console.log('错误：80端口已被占用，请关闭冲突程序后重试');
//     process.exit(1); // 结束进程
//   }
//   if (e.code === 'EACCES') {
//     console.log('错误：需要管理员权限才能使用80端口');
//     process.exit(1);
//   }
// }); 

//server.listen(443, () => {
//  // 成功监听表示端口可用
//  server.close(() => {
//    // 启动Hexo服务器
//    exec('hexo server -p 443', (error, stdout, stderr) => {
//      if (error) {
//        console.log(`执行错误: ${error}`);
//        return;
//      }
//      console.log(`输出: ${stdout}`);
//      console.log(`错误: ${stderr}`);
//    });
//  });
//});

server.listen(3000, () => {
  // 成功监听表示端口可用
 server.close(() => {
//    // 启动Hexo服务器
   exec('hexo server -p 3000', (error, stdout, stderr) => {
    if (error) {
      console.log(`执行错误: ${error}`);
        return;
      }
      console.log(`输出: ${stdout}`);
      console.log(`错误: ${stderr}`);
   });
 });
});