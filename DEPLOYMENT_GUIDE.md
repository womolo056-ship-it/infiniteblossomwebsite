# Deployment Guide - GitHub Pages

## Quick Deploy

### Option 1: Manual Deploy (Recommended for first time)

1. **Initialize Git repository** (if not already done):
```bash
cd infinite-blossom-website
git init
git add .
git commit -m "Initial commit"
```

2. **Create GitHub repository**:
   - Go to https://github.com/new
   - Name it: `infinite-blossom-website`
   - Don't initialize with README (we already have files)
   - Click "Create repository"

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/infinite-blossom-website.git
git branch -M main
git push -u origin main
```

4. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "gh-pages" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/infinite-blossom-website/`

### Option 2: Automatic Deploy with GitHub Actions

This is already set up! After pushing to GitHub:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push changes**:
```bash
git add .
git commit -m "Your commit message"
git push
```

The site will automatically build and deploy on every push to main branch!

## Important Notes

### Base Path Configuration
The `vite.config.js` is configured with:
```javascript
base: '/infinite-blossom-website/'
```

**If your repository name is different**, update this in `vite.config.js`:
```javascript
base: '/YOUR-REPO-NAME/'
```

### Custom Domain (Optional)
To use a custom domain like `infiniteblossom.com`:

1. Create a file named `CNAME` in the `public` folder:
```
infiniteblossom.com
```

2. Update `vite.config.js`:
```javascript
base: '/' // Change to root for custom domain
```

3. Configure DNS:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `YOUR_USERNAME.github.io`

4. In GitHub Settings → Pages, add your custom domain

## Troubleshooting

### Blank Page After Deploy
- Check that `base` in `vite.config.js` matches your repository name
- Clear browser cache
- Check browser console for errors

### 404 on Page Refresh
This is normal for client-side routing. GitHub Pages doesn't support it by default.
Solution: Use hash router or add a 404.html redirect (already configured in workflow)

### Build Fails
- Check Node version (should be 18+)
- Run `npm install` to ensure all dependencies are installed
- Run `npm run build` locally to test

## Update Website

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

For manual deploy:
```bash
npm run deploy
```

## View Your Site

After deployment, your site will be available at:
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/infinite-blossom-website/`
- **Custom Domain** (if configured): `https://infiniteblossom.com`

## Commands Reference

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run deploy       # Deploy to GitHub Pages (manual)
```
