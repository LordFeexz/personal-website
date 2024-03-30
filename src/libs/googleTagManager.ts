import type { WindowWithDataLayer } from "@/interfaces";

declare const window: WindowWithDataLayer;

export const sendPageView = (url: string) => {
  if (!window.dataLayer) return;
  const pageViewData = { event: "page_viewed", url };
  window.dataLayer.push(pageViewData);
};

export const sendDataLayer = (data: Record<string, any>) => {
  if (!window.dataLayer) return;
  window.dataLayer.push(data);
};
