import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://iwmimcindore.com";
const APP_FILE = path.resolve("src", "App.tsx");
const SITEMAP_FILE = path.resolve("public", "sitemap.xml");
const ROBOTS_FILE = path.resolve("public", "robots.txt");

const readAppSource = () => fs.readFileSync(APP_FILE, "utf8");

const extractStaticRoutes = (source) => {
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  const routes = new Set();

  for (const match of source.matchAll(routeRegex)) {
    const routePath = match[1].trim();

    if (!routePath || routePath === "*" || routePath.includes(":")) {
      continue;
    }

    routes.add(routePath);
  }

  return Array.from(routes).sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
};

const getPriority = (routePath) => {
  if (routePath === "/") return "1.0";
  if (["/about", "/eligibility"].includes(routePath)) return "0.8";
  if (["/alumni", "/sessions"].includes(routePath)) return "0.7";
  if (routePath === "/contact") return "0.6";
  return "0.5";
};

const getChangeFreq = (routePath) => {
  if (routePath === "/") return "weekly";
  if (["/alumni", "/sessions"].includes(routePath)) return "weekly";
  if (["/about", "/eligibility", "/contact"].includes(routePath)) return "monthly";
  return "yearly";
};

const toUrl = (routePath) => {
  if (routePath === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${routePath}`;
};

const buildSitemapXml = (routes) => {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = routes
    .map(
      (routePath) => `  <url>\n    <loc>${toUrl(routePath)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${getChangeFreq(routePath)}</changefreq>\n    <priority>${getPriority(routePath)}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
};

const buildRobotsTxt = () => `User-agent: *\nAllow: /\nHost: ${SITE_URL}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

const appSource = readAppSource();
const routes = extractStaticRoutes(appSource);
const sitemap = buildSitemapXml(routes);
const robots = buildRobotsTxt();

fs.writeFileSync(SITEMAP_FILE, sitemap, "utf8");
fs.writeFileSync(ROBOTS_FILE, robots, "utf8");
console.log(`Generated sitemap with ${routes.length} routes at ${SITEMAP_FILE}`);
console.log(`Generated robots file at ${ROBOTS_FILE}`);
