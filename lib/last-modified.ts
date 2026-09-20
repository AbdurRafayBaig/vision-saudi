import { execFileSync } from "node:child_process";

// Sitemap <lastmod> dates. Search engines discount a sitemap where every page
// claims to have changed today, so each route reports the last commit that
// touched its own files.
//
// Git only, deliberately: reading the filesystem with a computed path makes
// Turbopack trace the whole project into the serverless bundle. Where history
// isn't available (a shallow clone), we fall back to the build time, which is
// no worse than the nothing we published before.

function gitDate(files: string[]): Date | null {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out ? new Date(out) : null;
  } catch {
    return null; // no git, or no history for these paths
  }
}

/** Source files behind a route: its own folder, plus anything it is built from. */
export function lastModified(route: string, extraFiles: string[] = []): Date {
  const dir = route === "/" ? "app" : `app/${route.replace(/^\//, "")}`;
  // git ignores pathspecs that match nothing, so unknown files cost nothing.
  return gitDate([`${dir}/page.tsx`, `${dir}/PageClient.tsx`, ...extraFiles]) ?? new Date();
}
