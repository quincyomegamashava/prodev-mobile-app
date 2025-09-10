# 🚀 Expo Router + React Components + NativeWind Integration

This project demonstrates how to build a **React Native** application using **Expo Router** for navigation, **React components** for modular UI development, and **NativeWind** for utility-first styling (similar to Tailwind CSS).

---

## 📂 Understanding Expo Router

[Expo Router](https://expo.github.io/router/docs) is a **file-based routing system** for React Native apps built on Expo. It simplifies navigation by mapping files in the `app/` directory directly to routes — much like Next.js does for web projects.

### ✨ Key Features
- **File-based Routing**: Create files in `app/` and they automatically become screens.  
  Example:  
  - `app/index.tsx` → `/`  
  - `app/home.tsx` → `/home`
- **Automatic Linking**: No need for manual navigation setup.
- **Deep Linking**: Supports URL-based navigation across mobile and web.
- **Nested & Dynamic Routes**:  
  Example: `app/profile/[id].tsx` → `/profile/123`
- **Expo Integration**: Works seamlessly with Expo CLI for rapid development.

---

## ⚛️ React Components in Expo Router

React components are the building blocks of your app. With Expo Router, each screen is just a React component inside the `app/` directory.

### ✅ Best Practices
- **Modular & Reusable**: Keep UI elements in `components/` (e.g., `components/Button.tsx`).
- **State Management**: Use `useState`, `useEffect` for local state.
- **Lazy Loading**: Use `React.lazy()` to optimize performance.
- **Props & Context**: Pass props effectively, and use Context for global state.
- **Error Boundaries**: Wrap routes in error-handling components to prevent crashes.

---

## 🎨 NativeWind Integration

[NativeWind](https://www.nativewind.dev/) brings **Tailwind CSS**-like styling to React Native. Instead of writing StyleSheets, you can use class names directly on components.

### ⚡ Benefits
- Faster development with utility classes.
- Consistent styling across screens.
- Less boilerplate compared to `StyleSheet.create()`.

### 🛠 Setup
Follow the official NativeWind [installation guide](https://www.nativewind.dev/quick-starts/expo).  
Key files to configure:
- **`tailwind.config.js`** → defines which styles NativeWind should process.
- **`expo-router.config.js`** → customize routing behavior.
- **`.env`** → store environment variables securely.
- **`metro.config.js`** → optimize bundling and asset resolution.

---

## 🧑‍💻 Best Practices

### 🔧 Using Expo Router CLI
- Use `expo-router-cli` to scaffold routes and screens quickly.

### ⚡ Optimizing Navigation
- Use `useMemo` and `useCallback` to reduce re-renders in navigation-heavy components.
- Manage navigation state efficiently to avoid unnecessary UI updates.

---

## 🎭 Expo Vector Icons

[Expo Vector Icons](https://docs.expo.dev/guides/icons/) provides access to popular icon packs like **Material Icons** and **FontAwesome**.

### 📦 Installation
```bash
npm install @expo/vector-icons
