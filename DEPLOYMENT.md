# GitHub Pages Deployment Guide

## Quick Setup

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with theme system"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on push to main

### 3. Configure Repository Name (if needed)

**If deploying to `username.github.io`:**
- No changes needed! Your site will be at `https://username.github.io`

**If deploying to a repository (e.g., `portfolio`):**
- Uncomment and update these lines in `next.config.ts`:
  ```typescript
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  ```
- Your site will be at `https://username.github.io/portfolio`

## Deployment Process

Once set up, deployment is automatic:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **GitHub Actions runs automatically**
   - Installs dependencies
   - Builds the Next.js app
   - Deploys to GitHub Pages

3. **Check deployment status**
   - Go to **Actions** tab in your repository
   - Watch the deployment progress
   - Site updates in ~2-3 minutes

## Troubleshooting

### Build Fails

**Check the Actions tab** for error logs:
- Go to repository → **Actions**
- Click on the failed workflow
- Review the error messages

Common issues:
- **Missing dependencies**: Run `npm install` locally first
- **Build errors**: Run `npm run build` locally to test
- **TypeScript errors**: Fix any type errors before pushing

### 404 Errors

**If you see 404 on deployed site:**

1. **Check basePath configuration**
   - For `username.github.io`: Remove basePath
   - For `username.github.io/repo`: Set basePath to `/repo`

2. **Verify GitHub Pages settings**
   - Settings → Pages → Source should be "GitHub Actions"

3. **Check deployment URL**
   - Actions → Latest workflow → Deploy step shows the URL

### Images Not Loading

**If images don't appear:**

1. Ensure `images.unoptimized: true` is in `next.config.ts`
2. Use relative paths for images: `/image.png` not `./image.png`
3. Images should be in the `public` folder

## Custom Domain (Optional)

### Add Custom Domain

1. **In GitHub:**
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `portfolio.example.com`)

2. **In DNS Provider:**
   - Add CNAME record pointing to `username.github.io`
   - Or A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Update next.config.ts:**
   - Remove `basePath` and `assetPrefix` for custom domains

4. **Wait for DNS propagation** (up to 24 hours)

## Environment Variables

GitHub Pages is static, so:
- ❌ No server-side environment variables
- ✅ Use build-time variables with `NEXT_PUBLIC_` prefix
- ✅ Add secrets in Settings → Secrets → Actions

Example:
```typescript
// Access in code
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

Add to GitHub:
- Settings → Secrets and variables → Actions
- New repository secret: `NEXT_PUBLIC_API_KEY`

## Updating Your Site

### Regular Updates
```bash
# Make changes
git add .
git commit -m "Update content"
git push
```

### Force Rebuild
```bash
# Trigger workflow manually
# Go to Actions → Deploy to GitHub Pages → Run workflow
```

## Performance Tips

1. **Optimize images** before adding to `public/`
2. **Minimize bundle size** - check with `npm run build`
3. **Use static generation** - already configured
4. **Enable caching** - automatic with GitHub Pages

## Monitoring

### Check Site Status
- **GitHub Status**: https://www.githubstatus.com/
- **Deployment logs**: Repository → Actions tab
- **Live site**: Your GitHub Pages URL

### Analytics (Optional)
Add to `src/app/layout.tsx`:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

## Costs

**GitHub Pages is FREE for:**
- ✅ Public repositories
- ✅ Unlimited bandwidth (fair use)
- ✅ Custom domains
- ✅ HTTPS included

**Limits:**
- 1 GB repository size
- 100 GB bandwidth/month (soft limit)
- 10 builds/hour

## Alternative Deployment Options

If GitHub Pages doesn't meet your needs:

### Vercel (Recommended for Next.js)
```bash
npm i -g vercel
vercel
```
- Automatic deployments
- Preview deployments for PRs
- Better Next.js optimization
- Free tier available

### Netlify
- Drag & drop `out` folder
- Or connect GitHub repository
- Free tier available

### Cloudflare Pages
- Connect GitHub repository
- Free tier with unlimited bandwidth
- Fast global CDN

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Configure basePath (if needed)
4. ✅ Wait for deployment
5. ✅ Share your live portfolio!

---

**Your portfolio will be live at:**
- `https://YOUR_USERNAME.github.io` (user site)
- `https://YOUR_USERNAME.github.io/REPO_NAME` (project site)

**Need help?** Check the Actions tab for deployment logs.
