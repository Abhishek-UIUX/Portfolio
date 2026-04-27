# Configure Git for This Project Only

## Set Local Git Config (This Project Only)

Run these commands in your project folder:

```bash
# Set username for THIS project only (no --global flag)
git config user.name "Abhishek Jaiswar"

# Set email for THIS project only
git config user.email "your-github-email@example.com"
```

## Verify Local Configuration

```bash
# Check local config (this project)
git config user.name
git config user.email

# See all local config
git config --local --list
```

## Clear Credentials (One Time)

```bash
# Clear GitHub credentials from keychain
git credential reject <<EOF
protocol=https
host=github.com
EOF
```

Press Enter twice after the last line.

## Test with New Credentials

```bash
# Try pushing
git push Portfolio main
```

When prompted, enter:
- Username: **Abhishek-UIUX**
- Password: **Your GitHub Personal Access Token**

---

**Your global Git config will remain unchanged. Only this project will use the new settings!**
