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
import { VercelAnalytics } from "@/providers/vercel.analytics.providers";
import { SpeedInsights } from "@/providers/vercel.speedInsight.providers";
import Script from "next/script";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <GtmHeadScript />
        <title>Ananda Fiqri Personal Website</title>
        <meta
          name="google-site-verification"
          content={`google-site-verification: ${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}.html`}
        ></meta>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9f350a97-faf5-4ba2-8b8f-91be057243dc"
        />
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
          <VercelAnalytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
