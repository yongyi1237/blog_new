# 后台运行hexo

## **第一步：服务器安装pm2**

```cm
npm install -g pm2
```
<!-- more -->
## **第二步：编写启动文件 run.js并放在博客的根目录下**

```js
const { exec } = require('child_process')
exec('hexo server -p 80',(error, stdout, stderr) => {     //指定端口
  if(error){
    console.log(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})
```

## **第三步：启动hexo**

```js
pm2 start run.js
```

## **报错信息：**

经过半个小时的搜索，终于解决了这个问题
**注意：在安装的pm2的时候显示了安装路径 那我们要做的就是去安装路径重新安装**

> **执行下面命令：**
> 如上图显示 。。。。exist 则先删除再安装

```lisp
ln -s /soft/nodejs/lib/node_modules/pm2/pm2 /usr/local/bin/    存在
mv /usr/local/bin/pm2  /tmp/  删除
ln -s /soft/nodejs/lib/node_modules/pm2/bin/pm2 /usr/local/bin/ 重新运行
```

