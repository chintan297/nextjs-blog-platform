# Future Blog - Modern Blog Platform

A responsive, high-performance blog application built with Next.js 13 and MongoDB.

## ✨ Core Features

- **SSG (Static Site Generation)**: Optimized blog posts for superior SEO and lightning-fast performance.
- **Dynamic Routing**: Clean URL structures using `/blog/[slug]` with circular navigation.
- **Advanced Editor**: Sophisticated Markdown editor with a tabbed real-time HTML preview.
- **Interactive Comment System**: Seamless client-side fetching with a custom slider for mobile users.
- **Tour Guides Widget**: Sidebar locations and rating system integration.
- **Premium Aesthetics**: Fully responsive design across Mobile, Tablet, and Desktop using CSS Modules and CSS Grid.

## 🚀 Performance Optimizations

This project leverages advanced Next.js performance patterns to ensure a high-quality user experience:

- **Component Code Splitting**: Used `next/dynamic()` to lazy-load heavy components like the `Editor` and `CommentSection`.
- **On-Demand Loading**: The editor's JavaScript is only downloaded when the user actually clicks the "Edit" button.
- **Nested Dynamic Imports**: The `MarkdownPreview` component is dynamically loaded _within_ the editor only when the "Preview" tab is active.
- **Optimized Hydration**: Client-only components are excluded from SSR to reduce the initial document size and prevent hydration mismatches.

## 🛠️ Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/chintan297/nextjs-blog-platform.git
   cd nextjs-blog-platform
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
