import type { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export type WindowWithDataLayer = Window & {
  dataLayer: Record<string, unknown>[];
};
