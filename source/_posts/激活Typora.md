# 激活Typora

## 1.下载安装包

> 官网地址

安装`Typora` 打开官网 下载并安装最新版即可

<a href="https://typoraio.cn/">官网地址</a>

## 2.修改配置文件

### 1.修改js文件 

> 找到安装目录

```
typora\resources\page-dist\static\js
```

> 找到这个文件

![image-20250317170851258](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250317170851258.png)

> 改代码

```js
e.hasActivated="true"==e.hasActivated
```

> 替换成

```js
e.hasActivated="true"=="true"
```

### 2.修改未激活提示

> 找到文件位置

```
Typora\resources\locales\zh-Hans.lproj\Panel.json 
```

![image-20250317170958367](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250317170958367.png)

> 改提示

```json
"UNREGISTERED":"未激活"
```

> 换成

```json
"UNREGISTERED":" "
```

