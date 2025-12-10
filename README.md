# 🎯 Micro-Frontends Architecture - Entertainment Hub

## 🏗️ Architecture Overview

This project uses a **true micro-frontends architecture** with three independent React applications:

```
┌─────────────────────────────────────────────────────────────┐
│                    SHELL APP (Port 3000)                     │
│  - Main container/orchestrator                               │
│  - Authentication & routing                                  │
│  - Loads micro-frontends via iframe/Module Federation        │
└─────────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┴─────────────────┐
        │                                   │
        ▼                                   ▼
┌──────────────────┐              ┌──────────────────┐
│ PUBLIC-VIEWER    │              │ CONTENT-MANAGER  │
│ (Port 3001)      │              │ (Port 3002)      │
│                  │              │                  │
│ Independent App  │              │ Independent App  │
│ Can run alone    │              │ Can run alone    │
│ Can be deployed  │              │ Can be deployed  │
│ separately       │              │ separately       │
└──────────────────┘              └──────────────────┘
```

## 📦 Three Separate Applications

### 1. **Shell App** (Port 3000)
- **Purpose**: Container/Orchestrator
- **Responsibilities**:
  - User authentication
  - Main navigation
  - Route to micro-frontends
  - Shared state management
- **Can run**: Standalone or with micro-frontends

### 2. **Public Viewer** (Port 3001)
- **Purpose**: Browse & Review Module
- **Responsibilities**:
  - Display entertainment content
  - Search and filtering
  - Ratings and reviews
  - Public access (no auth required)
- **Can run**: Completely independent
- **Can be deployed**: Separately on different domain

### 3. **Content Manager** (Port 3002)
- **Purpose**: Content Management Module
- **Responsibilities**:
  - Create/Edit/Delete content
  - User dashboard
  - Image uploads
  - Requires authentication
- **Can run**: Completely independent
- **Can be deployed**: Separately on different domain

## 🚀 Running the Applications

### Development Mode (All Apps)

**Terminal 1 - Shell:**
```bash
cd apps/shell
npm install
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 - Public Viewer:**
```bash
cd apps/public-viewer
npm install
npm run dev
# Runs on http://localhost:3001
```

**Terminal 3 - Content Manager:**
```bash
cd apps/content-manager
npm install
npm run dev
# Runs on http://localhost:3002
```

### Run All at Once (from root)
```bash
npm run dev
# Starts all three apps concurrently
```

## 🔗 Communication Between Apps

### Option 1: Window PostMessage (Current)
- Apps communicate via `window.postMessage()`
- Shell passes auth state to micro-frontends
- Micro-frontends send events back to shell

### Option 2: Shared State (LocalStorage/SessionStorage)
- Auth token stored in localStorage
- All apps read from same storage
- Simple and effective

### Option 3: Module Federation (Advanced)
- Webpack 5 Module Federation
- Share React, dependencies
- More complex setup

## 📁 Project Structure

```
publicpolling/
├── apps/
│   ├── shell/              # Main container app (Port 3000)
│   │   ├── src/
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   ├── public-viewer/      # Browse module (Port 3001)
│   │   ├── src/
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   └── content-manager/    # Management module (Port 3002)
│       ├── src/
│       ├── package.json
│       └── vite.config.js
│
├── package.json            # Root package (workspace)
└── README.md
```

## 🎯 Benefits of This Architecture

### ✅ **Independent Development**
- Each team can work on separate app
- Different release cycles
- No conflicts

### ✅ **Independent Deployment**
- Deploy each app separately
- Update one without affecting others
- Different hosting providers possible

### ✅ **Technology Freedom**
- Each app can use different versions
- Can even use different frameworks (React, Vue, Angular)
- Upgrade independently

### ✅ **Scalability**
- Scale each app independently
- Add new micro-frontends easily
- Remove old ones without breaking others

### ✅ **Fault Isolation**
- If one app crashes, others continue working
- Better error boundaries
- Improved reliability

## 🔧 Configuration

### Environment Variables

Each app has its own `.env.local`:

**apps/shell/.env.local:**
```env
VITE_PUBLIC_VIEWER_URL=http://localhost:3001
VITE_CONTENT_MANAGER_URL=http://localhost:3002
VITE_FIREBASE_API_KEY=...
```

**apps/public-viewer/.env.local:**
```env
VITE_FIREBASE_API_KEY=...
VITE_SHELL_URL=http://localhost:3000
```

**apps/content-manager/.env.local:**
```env
VITE_FIREBASE_API_KEY=...
VITE_SHELL_URL=http://localhost:3000
```

## 🚢 Deployment

### Option 1: Same Domain (Subdirectories)
```
https://yourdomain.com/           → Shell
https://yourdomain.com/browse/    → Public Viewer
https://yourdomain.com/manage/    → Content Manager
```

### Option 2: Subdomains
```
https://yourdomain.com/           → Shell
https://viewer.yourdomain.com/    → Public Viewer
https://manager.yourdomain.com/   → Content Manager
```

### Option 3: Different Domains
```
https://entertainment-hub.com/    → Shell
https://browse.example.com/       → Public Viewer
https://manage.example.com/       → Content Manager
```

## 📊 Comparison

| Feature | Monolith | Modular (Current) | Micro-Frontends |
|---------|----------|-------------------|-----------------|
| Complexity | Low | Medium | High |
| Independence | None | Partial | Full |
| Deployment | Single | Single | Multiple |
| Team Scaling | Hard | Medium | Easy |
| Performance | Best | Good | Good |
| Maintenance | Hard | Medium | Easy |

## 🎓 Learning Resources

- [Micro Frontends](https://micro-frontends.org/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Single-SPA Framework](https://single-spa.js.org/)

## 🤝 Contributing

Each app can be developed independently:

1. **Shell Team**: Navigation, auth, orchestration
2. **Viewer Team**: Browse, search, reviews
3. **Manager Team**: CRUD operations, uploads

## 📝 Next Steps

1. Install dependencies in all three apps
2. Configure Firebase in each app
3. Run all apps in development
4. Test communication between apps
5. Deploy each app independently

---

**You now have a true micro-frontends architecture!** 🎉
