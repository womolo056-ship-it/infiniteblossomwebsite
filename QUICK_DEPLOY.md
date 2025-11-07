# Quick Deploy to GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `infinite-blossom-website` (or any name you prefer)
3. Make it Public
4. **Don't** check "Add a README file"
5. Click "Create repository"

### 2. Deploy from Your Computer

Open your terminal in the `infinite-blossom-website` folder and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Infinite Blossom Website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/infinite-blossom-website.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **gh-pages** branch
5. Click **Save**
6. Wait 1-2 minutes

### 4. View Your Website! 🎉

Your website will be live at:
```
https://YOUR_USERNAME.github.io/infinite-blossom-website/
```

## Update Your Website Later

Whenever you make changes:

```bash
git add .
git commit -m "Updated website"
git push
npm run deploy
```

## Important Notes

- Replace `YOUR_USERNAME` with your actual GitHub username
- The repository name in the URL must match your repository name
- If you change the repository name, update `base` in `vite.config.js`

## Need Help?

Check the full `DEPLOYMENT_GUIDE.md` for:
- Custom domain setup
- Automatic deployment with GitHub Actions
- Troubleshooting tips
