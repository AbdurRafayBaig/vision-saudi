import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

// Sitemap <lastmod> dates. Search engines discount a sitemap where every page
// claims to have changed today, so each route reports when its own source last
// changed: the newest commit touching its files, or the file mtime when git
// history isn't available (shallow clone, exported tarball).

const ROOT = process.cwd();

function gitDate(files: string[]): Date | null {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
}

function mtime(files: string[]): Date | null {
  const times = files
    .map((f) => path.join(ROOT, f))
    .filter(existsSync)
    .map((f) => statSync(f).mtime.getTime());
  return times.length ? new Date(Math.max(...times)) : null;
}

/** Source files behind a route: its own directory, plus anything it is built from. */
export function lastModified(route: string, extraFiles: string[] = []): Date {
  const dir = route === "/" ? "app" : path.posix.join("app", route.replace(/^\//, ""));
  const files = [
    path.posix.join(dir, "page.tsx"),
    path.posix.join(dir, "PageClient.tsx"),
    ...extraFiles,
  ].filter((f) => existsSync(path.join(ROOT, f)));

  return gitDate(files) ?? mtime(files) ?? new Date();
}
