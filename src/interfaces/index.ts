import type { ReactNode } from "react";

export interface ChildrenProps {
  readonly children: ReactNode;
}

export interface OptionalChildrenProps {
  readonly children?: ReactNode;
}

export type WindowWithDataLayer = Window & {
  dataLayer: Record<string, unknown>[];
};
