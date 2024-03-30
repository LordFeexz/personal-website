import GtmHeadScript from "@/components/atoms/scripts/gtmHead";
import "@/styles/globals.css";
import Loader from "nextjs-toploader";
import { soraSans } from "@/libs/font";
import type { ChildrenProps } from "@/interfaces";
import AppThemeProvider from "@/providers/theme.providers";
import MaterialTailwindProvider from "@/providers/material-tailwind.providers";
import Analytics from "@/components/atoms/scripts/analytics";
import { Suspense } from "react";
import MainFooter from "@/components/atoms/footer/mainFooter";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GtmHeadScript />
        <title>Ananda Fiqri Personal Website</title>
      </head>
      <body className={soraSans.className}>
        <Loader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <Analytics />
        <Suspense>
          <AppThemeProvider>
            <MaterialTailwindProvider>
              {children}
              <MainFooter />
            </MaterialTailwindProvider>
          </AppThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
