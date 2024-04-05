import GtmHeadScript from "@/components/atoms/scripts/gtmHead";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import Loader from "nextjs-toploader";
import { soraSans } from "@/libs/font";
import type { ChildrenProps } from "@/interfaces";
import AppThemeProvider from "@/providers/theme.providers";
import Analytics from "@/components/atoms/scripts/analytics";
import { Suspense } from "react";
import MainFooter from "@/components/atoms/footer/mainFooter";
import PageLoader from "@/components/atoms/loaders/pageLoader";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <GtmHeadScript />
        <title>Ananda Fiqri Personal Website</title>
      </head>
      <body className={soraSans.className}>
        <Suspense fallback={<PageLoader />}>
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
          <AppThemeProvider>
            {children}
            <MainFooter />
          </AppThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
