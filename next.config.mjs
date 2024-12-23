import remarkGfm from "remark-gfm";
import createMdx from "@next/mdx";
const withMDX = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DOMAIN: process.env.DOMAIN,
    NEXT_APP_GTM_ID: process.env.NEXT_APP_GTM_ID,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    NEXT_PUBLIC_FIREBASE_DATABASE_URL:
      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    NEXT_PUBLIC_GOOGLE_VERIFICATION:
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default withMDX(nextConfig);
