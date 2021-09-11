
# Puppeteer Demo

## 作用

1. 生成网页的截图或者PDF
2. 爬虫，支持 SPA 应用的爬虫
3. 表单提交，自动化测试
4. 创建一个最新的浏览器测试环境
5. Web 性能分析
6. 测试 Chrome 插件


# 基本使用

1. install

```
yarn add puppeteer
```

## 网页截图

```ts
import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // page.setViewport({ width: 200, height: 800 });
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
```

1. `page.setViewport({ width: 200, height: 800 });` 可以设置视图宽高