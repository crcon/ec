# GitHub Pages 部署指南

## 自动部署（推荐）

本项目已配置 GitHub Actions，推送到 `main` 分支后会自动部署到 GitHub Pages。

### 设置步骤

1. **Fork 或创建仓库**
   - 将代码推送到 GitHub 仓库

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

3. **推送代码**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **查看部署状态**
   - 进入 Actions 标签页查看部署进度
   - 部署完成后，访问 `https://你的用户名.github.io/仓库名/`

## 手动部署

### 1. 本地构建

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 复制图片到 dist 目录
cp -r public/images dist/
```

### 2. 部署到 GitHub Pages

#### 方法一：使用 gh-pages 包

```bash
# 安装 gh-pages
npm install -g gh-pages

# 部署 dist 目录
gh-pages -d dist
```

#### 方法二：使用 git 命令

```bash
# 进入 dist 目录
cd dist

# 初始化 git
git init
git add .
git commit -m "Deploy to GitHub Pages"

# 推送到 gh-pages 分支
git push -f git@github.com:你的用户名/仓库名.git main:gh-pages
```

## 常见问题

### 图片无法显示

**原因**：路径问题

**解决方案**：
- 确保所有图片路径使用相对路径 `./images/xxx.jpg`
- 构建后检查 `dist/images/` 目录是否存在
- vite.config.ts 中已配置 `base: './'`

### 404 错误

**原因**：GitHub Pages 子路径问题

**解决方案**：
- 确保 vite.config.ts 中 `base: './'` 配置正确
- 检查仓库 Settings → Pages 中的域名配置

### 样式丢失

**原因**：CSS 路径问题

**解决方案**：
- 确保 index.html 中 script 使用相对路径 `./src/main.tsx`
- 构建后检查 dist 目录中的资源文件

## 项目结构

```
my-app/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
├── public/
│   └── images/             # 图片资源
├── src/
│   └── sections/           # 页面组件
├── dist/                   # 构建输出（自动生成）
├── vite.config.ts          # Vite 配置（已配置 base: './'）
├── index.html              # HTML 入口（已使用相对路径）
└── DEPLOY.md               # 本文件
```

## 注意事项

1. **不要修改 `base: './'` 配置**，这是 GitHub Pages 正常工作的关键
2. **所有图片必须使用相对路径** `./images/xxx.jpg`
3. **构建后务必检查** `dist/images/` 目录是否存在
4. **首次部署可能需要 5-10 分钟** 才能生效

## 联系支持

如有问题，请检查：
1. GitHub Actions 日志（Actions 标签页）
2. 浏览器开发者工具（F12）查看网络请求
3. 确保所有路径都是相对路径
