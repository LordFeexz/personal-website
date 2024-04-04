import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ananda Fiqri - Fullstack Developer",
    short_name: "Ananda Fiqri",
    description: "Ananda Fiqri Software Engineer Personal Website and Blog",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
