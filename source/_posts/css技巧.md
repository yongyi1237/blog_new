---
abbrlink: ''
categories: []
date: ''
tags: []
title: ''
updated: '2025-04-19T22:17:12.924+08:00'
---
# CSS技巧

## 1.显示两行

![微信图片_20240603172524.png](https://adminyongyi.yongyi1239.top/img/2025-04/78c84b700a694afba58f140c9b826676.png)

![sss](https://adminyongyi.yongyi1239.top/img/2025-04/c979de273c4b40b68dc423948d0df6d1.png)

```css
 .truncate-two-lines {
  /* 使用WebKit引擎的line-clamp截断到2行 */
  display: -webkit-box;
  -webkit-line-clamp: 2;      /* 核心属性：限制为2行 */
  -webkit-box-orient: vertical;/* 必须搭配使用 */
  
  /* 隐藏溢出内容 */
  overflow: hidden;
  
  /* 保证最小高度（根据行高调整） */
  min-height: 2em; 
  
  /* 可选：优化显示效果 */
  padding: 0 2px;
  border-radius: 2px;
}
```

# 换行

```css
<div style="white-space: pre-line;  word-wrap: break-word;"  v-html="data.content"></div>
```
