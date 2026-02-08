import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://removenow.online";
  const routes = [
    "",
    "/services",
    "/pricing",
    "/case-studies",
    "/faq",
    "/contact",
    "/documentation",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-02-08"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

