# GitHub Pages Setup - Final Steps

## ✅ Code Pushed Successfully!

Your code is now on GitHub at: **https://github.com/Abhishek-UIUX/Portfolio**

## 🚀 Enable GitHub Pages (2 minutes)

### Step 1: Configure Repository Settings

Since your repository is named "Portfolio" (not username.github.io), you need to update the config:

1. **Update `next.config.ts`** - Uncomment these lines:
   ```typescript
   basePath: '/Portfolio',
   assetPrefix: '/Portfolio',
   ```

2. **Commit and push**:
   ```bash
   git add next.config.ts
   git commit -m "config: add basePath for GitHub Pages"
   git push Portfolio main
   ```

### Step 2: Enable GitHub Pages

1. Go to: **https://github.com/Abhishek-UIUX/Portfolio/settings/pages**

2. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
   - Click **Save**

3. The deployment will start automatically!

### Step 3: Wait for Deployment

1. Go to: **https://github.com/Abhishek-UIUX/Portfolio/actions**

2. Watch the **"Deploy to GitHub Pages"** workflow run

3. Takes ~2-3 minutes

4. When complete, your site will be live! ✨

## 🌐 Your Live URL

Once deployed, your portfolio will be at:

**https://abhishek-uiux.github.io/Portfolio/**

## 🎨 Test Your Themes

After deployment:
1. Visit your live site
2. Click the palette icon (🎨) in the navbar
3. Try all 10 themes!
4. Test dark/light mode toggle
5. Lock your favorite theme

## 📝 Making Updates

After initial setup, updates are automatic:

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push Portfolio main
```

GitHub Actions will automatically rebuild and deploy!

## 🔧 Troubleshooting

### If you see 404 errors:

1. **Check basePath is set** in `next.config.ts`:
   ```typescript
   basePath: '/Portfolio',
   assetPrefix: '/Portfolio',
   ```

2. **Verify GitHub Pages is enabled**:
   - Settings → Pages → Source = "GitHub Actions"

3. **Check deployment status**:
   - Actions tab → Latest workflow

### If images don't load:

- Ensure images are in the `public/` folder
- Use paths like `/image.png` (not `./image.png`)

### If build fails:

1. Check the Actions tab for error logs
2. Run `npm run build` locally to test
3. Fix any errors and push again

## 🎯 Next Steps

1. ✅ Update `next.config.ts` with basePath
2. ✅ Push the config change
3. ✅ Enable GitHub Pages in repository settings
4. ✅ Wait for deployment
5. ✅ Visit your live site!
6. ✅ Share your portfolio URL!

## 📱 Share Your Portfolio

Once live, share it:
- LinkedIn
- Twitter
- Resume
- Email signature
- GitHub profile README

## 🔄 Alternative: Use Custom Domain

If you have a custom domain:

1. **In GitHub**: Settings → Pages → Custom domain
2. **In DNS**: Add CNAME record pointing to `abhishek-uiux.github.io`
3. **In next.config.ts**: Remove basePath and assetPrefix
4. Wait for DNS propagation (up to 24 hours)

---

**Need help?** Check the Actions tab for deployment logs or see DEPLOYMENT.md for detailed guide.
