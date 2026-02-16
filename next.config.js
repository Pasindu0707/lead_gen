/** @type {import('next').NextConfig} */
// Only use basePath and static export for production builds (GitHub Pages)
// For local dev, we use normal Next.js mode so dev server works at localhost:3000
const isDev = process.env.NODE_ENV !== 'production'
const useBasePath = process.env.USE_BASEPATH === 'true' || process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds
  ...(!isDev && { output: 'export' }),
  // Only use basePath when building for GitHub Pages
  ...(useBasePath && { basePath: '/lead_gen' }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
