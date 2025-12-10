# 🚀 Quick Start Guide

## Step 1: Install Dependencies

Open **Command Prompt** (cmd.exe) - not PowerShell:

```cmd
cd d:\Projects\web\publicpolling\apps\shell
npm install
```

## Step 2: Configure Firebase

1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable these services:
   - **Authentication** → Email/Password, Google, GitHub
   - **Firestore Database** → Start in production mode
   - **Storage** → Start in production mode
   - **Analytics** (optional)

4. Get your config:
   - Go to Project Settings → General
   - Scroll to "Your apps"
   - Click web icon (</>) to add web app
   - Copy the firebaseConfig values

5. Create `.env.local` file in `d:\Projects\web\publicpolling\apps\shell\`:

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123:web:abc
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Step 3: Run the App

```cmd
cd d:\Projects\web\publicpolling\apps\shell
npm run dev
```

Open browser: `http://localhost:3000`

## Step 4: Test Features

### Public Features (No Login Required):
1. Click "Browse" in navigation
2. Search for content
3. Filter by type and genre
4. Click on any content card to view details

### Authenticated Features (Login Required):
1. Click "Sign In" → "Sign up"
2. Create account with email/password OR use Google/GitHub
3. Click "My Content" in navigation
4. Click "Add New Content"
5. Fill form and upload image
6. Submit to create content
7. View your dashboard with stats
8. Edit or delete your content

### Rating & Reviews:
1. Browse to any content detail page
2. Click stars to rate (login required)
3. Write a review in the text box
4. Submit review

## Troubleshooting

### PowerShell Error?
Use Command Prompt (cmd.exe) instead of PowerShell

### Firebase Not Working?
- Check `.env.local` file exists in `apps/shell/`
- Verify all environment variables are correct
- Ensure Firebase services are enabled in console

### Build Errors?
```cmd
cd apps\shell
rmdir /s /q node_modules
del package-lock.json
npm install
```

## Project Structure

```
apps/shell/
├── src/
│   ├── modules/
│   │   ├── PublicViewer/      → Browse & Review Module
│   │   └── ContentManager/    → Create & Manage Module
│   ├── pages/                 → Home, Login, Signup
│   ├── components/            → Header, ProtectedRoute
│   ├── contexts/              → AuthContext
│   └── config/                → Firebase config
├── .env.local                 → Your Firebase credentials
└── package.json
```

## What's Included

✅ **Module 1: Public Viewer**
- Browse entertainment content
- Search and filter
- View details
- Rate and review

✅ **Module 2: Content Manager**
- User dashboard
- Add/Edit/Delete content
- Upload images
- View statistics

✅ **Authentication**
- Email/Password
- Google OAuth
- GitHub OAuth

✅ **Modern UI**
- Dark theme
- Responsive design
- Smooth animations

## Next Steps

1. Add some content using "My Content" → "Add New Content"
2. Browse your content in "Browse" section
3. Rate and review content
4. Invite others to contribute!

---

**Need Help?** Check `IMPLEMENTATION.md` for detailed documentation.
