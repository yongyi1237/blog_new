---
abbrlink: ''
categories: []
date: ''
tags: []
title: ''
updated: '2025-03-27T09:41:34.037+08:00'
---
# CSS技巧

## 1.显示两行

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

![20a7e53a8c9cd113a8848c2c079c094.jpg]()

## 2.换行

```css
<div style="white-space: pre-line;  word-wrap: break-word;"  v-html="data.content"></div>
```
