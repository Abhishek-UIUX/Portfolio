#!/bin/bash

# GitHub Pages Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Run: git init"
    exit 1
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No GitHub remote found."
    echo ""
    echo "Please add your GitHub repository:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    echo ""
    read -p "Enter your GitHub repository URL: " repo_url
    
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ Remote added!"
    else
        echo "❌ No URL provided. Exiting."
        exit 1
    fi
fi

# Get remote URL
REMOTE_URL=$(git remote get-url origin)
echo "📍 Repository: $REMOTE_URL"
echo ""

# Check if it's a user site or project site
if [[ $REMOTE_URL == *".github.io.git"* ]] || [[ $REMOTE_URL == *".github.io"* ]]; then
    echo "✅ Detected: User/Organization site (username.github.io)"
    echo "   Your site will be at: https://USERNAME.github.io"
    NEEDS_BASEPATH=false
else
    echo "⚠️  Detected: Project site (username.github.io/repo-name)"
    
    # Extract repo name
    REPO_NAME=$(basename "$REMOTE_URL" .git)
    echo "   Repository name: $REPO_NAME"
    echo "   Your site will be at: https://USERNAME.github.io/$REPO_NAME"
    echo ""
    echo "⚙️  You need to configure basePath in next.config.ts"
    echo ""
    echo "Uncomment these lines in next.config.ts:"
    echo "  basePath: '/$REPO_NAME',"
    echo "  assetPrefix: '/$REPO_NAME',"
    echo ""
    read -p "Have you configured basePath? (y/n): " configured
    
    if [[ $configured != "y" ]]; then
        echo "❌ Please configure basePath first, then run this script again."
        exit 1
    fi
fi

echo ""
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Stage all changes
echo "📝 Staging changes..."
git add .

# Commit
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Deploy portfolio with theme system"
fi

git commit -m "$commit_msg"

if [ $? -ne 0 ]; then
    echo "⚠️  Nothing to commit or commit failed"
fi

# Push
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -ne 0 ]; then
    echo "❌ Push failed! Check your credentials and try again."
    exit 1
fi

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to your repository on GitHub"
echo "2. Click Settings → Pages"
echo "3. Under 'Source', select 'GitHub Actions'"
echo "4. Wait 2-3 minutes for deployment"
echo "5. Your site will be live!"
echo ""
echo "🔗 Check deployment status:"
echo "   $REMOTE_URL/actions"
echo ""
echo "🎉 Done!"
