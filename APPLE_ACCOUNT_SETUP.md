# Apple Developer Account Setup for Mustapha's Store

## ✅ Completed Steps

1. ✅ Cleared Apple Developer session (`~/.app-store` removed)
2. ✅ Logged out of EAS CLI
3. ✅ Updated `eas.json` with Mustapha's Apple Team ID (128327832)

## 🔧 Next Steps

### 1. Log in to EAS with the correct account

```bash
npx eas-cli login
```

When prompted, log in with the account that has access to Mustapha's Apple Developer team.

### 2. Configure Apple Developer credentials

When you run a build or submit, EAS will prompt you to authenticate with Apple. Make sure to:

1. **Select the correct team**: Choose "Mustapha BOUKALI (128327832)" when prompted
2. **Use the correct Apple ID**: Use Mustapha's Apple ID (not khalidbouhouch0@gmail.com)

### 3. Update Apple ID in eas.json (if needed)

If you know Mustapha's Apple ID email, you can update it in `eas.json`:

```json
"submit": {
  "production": {
    "ios": {
      "appleId": "mustapha@example.com",  // Replace with actual email
      "appleTeamId": "128327832"
    }
  }
}
```

### 4. Test the configuration

Try running a build to verify the account is correct:

```bash
# For iOS build
npx eas-cli build --platform ios --profile development

# Or for production
npx eas-cli build --platform ios --profile production
```

When prompted, make sure to select:
- **Team**: Mustapha BOUKALI (128327832)
- **Apple ID**: Mustapha's Apple ID

## ⚠️ Important Notes

- The bundle identifier `com.learnforkids.app` must be registered in Mustapha's Apple Developer account
- If the bundle ID doesn't exist, you'll need to register it in App Store Connect under Mustapha's account
- Make sure you have the necessary permissions in Mustapha's Apple Developer team

## 🔍 Verify Current Configuration

Check your current EAS login:
```bash
npx eas-cli whoami
```

Check your Apple Developer credentials:
```bash
npx eas-cli credentials
```

## 🆘 Troubleshooting

If you still see VOID account errors:

1. **Clear all credentials**:
   ```bash
   rm -rf ~/.app-store
   rm -rf ~/.expo
   ```

2. **Re-login**:
   ```bash
   npx eas-cli logout
   npx eas-cli login
   ```

3. **When building, explicitly select the team**:
   - EAS will prompt you to select a team
   - Choose "Mustapha BOUKALI (128327832)"
   - Do NOT select "VOID (M685CV58X3)"

