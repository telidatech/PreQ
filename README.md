# PreQ project page

纯静态论文主页，包含论文标题、作者、机构、资源链接、原文摘要、框架图和哇学社介绍。无需安装依赖或构建。

## 预览

直接打开 `index.html`，或运行 `python3 -m http.server 8000`，访问 <http://localhost:8000>。

## 修改内容

- `index.html`：标题、作者、摘要、框架图和哇学社介绍。
- `site-config.js`：论文、代码、哇学社、邮箱和作者主页链接。
- `style.css`：排版。
- `assets/framework.webp`：从原始 `PreQ.pdf` 导出的高清框架图；点击图片可打开原尺寸图片。
- `assets/waxueshe.png`：来自哇学社官网的图标，保存在本地，无需外部 CDN。

缺少的链接保留空字符串，页面上显示为灰色占位；填写地址后自动启用。

当前目录没有论文全文 PDF，因此 Paper 入口暂留空。拿到论文 PDF 后，可放在 `paper.pdf`，再将配置里的 `paper` 改为 `"paper.pdf"`。Demo 和联系邮箱来自 `Main.tex`。

哇学社介绍依据[官网](https://www.waxueshe.com)公开说明的单词、语法和口语练习，以及 `Main.tex` 中的 PreQ 在线部署说明。PreQ 用于平台全部单词、句子发音评分的范围由项目作者确认。该区块的官网入口同样由 `site-config.js` 的 `demo` 地址控制。

## 上传到 GitHub Pages

将以下文件放到仓库根目录：

```text
index.html
style.css
script.js
site-config.js
.nojekyll
assets/
  framework.webp
  waxueshe.png
```

在仓库 **Settings → Pages → Build and deployment** 中，选择 **Deploy from a branch**，选择 `main` 分支和 `/(root)`，保存。部署完成后，页面地址通常为 `https://用户名.github.io/仓库名/`。

页面使用相对路径，支持项目子目录。上传时一并保留 `assets` 目录。原始 `Main.tex` 不影响网页运行，无需上传。

部署选项见 [GitHub 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
