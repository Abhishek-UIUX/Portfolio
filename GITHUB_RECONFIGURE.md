# Reconfigure GitHub Account

## Step 1: Update Git Configuration

Run these commands with YOUR correct GitHub details:

```bash
# Set your correct GitHub username
git config --global user.name "Abhishek Jaiswar"

# Set your correct GitHub email (the one linked to Abhishek-UIUX account)
git config --global user.email "your-github-email@example.com"
```

**Important**: Use the email that's linked to your **Abhishek-UIUX** GitHub account.

## Step 2: Clear Cached Credentials (macOS)

```bash
# Remove cached GitHub credentials
git credential-osxkeychain erase
host=github.com
protocol=https

# Press Enter twice after the last line
```

Or use this simpler command:
```bash
# Clear all GitHub credentials from keychain
git credential reject <<EOF
protocol=https
host=github.com
EOF
```

## Step 3: Verify Configuration

```bash
# Check your new settings
git config --global user.name
git config --global user.email
```

## Step 4: Test with a New Push

```bash
# Make a small change
echo "# Portfolio" > TEST.md
git add TEST.md
git commit -m "test: verify correct GitHub account"
git push Portfolio main
```

When prompted:
- Enter your **Abhishek-UIUX** GitHub username
- Enter your GitHub Personal Access Token (not password)

## Step 5: Create Personal Access Token (if needed)

If you don't have a token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: "Portfolio Deployment"
4. Select scopes:
   - ✅ `repo` (full control)
   - ✅ `workflow` (for GitHub Actions)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

## Alternative: Use GitHub CLI

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Login with correct account
gh auth login

# Follow the prompts:
# - Choose: GitHub.com
# - Choose: HTTPS
# - Authenticate via web browser
```

## Step 6: Amend Last Commit (Optional)

If you want to change the author of recent commits:

```bash
# Change author of last commit
git commit --amend --author="Abhishek Jaiswar <your-correct-email@example.com>"

# Force push to update remote
git push Portfolio main --force
```

## Quick Commands Summary

```bash
# 1. Update config
git config --global user.name "Abhishek Jaiswar"
git config --global user.email "your-github-email@example.com"

# 2. Clear credentials
git credential reject <<EOF
protocol=https
host=github.com
EOF

# 3. Verify
git config --global --list | grep user

# 4. Test push (will prompt for new credentials)
git push Portfolio main
```

---

**After reconfiguring, all future commits will show your correct GitHub account!**
