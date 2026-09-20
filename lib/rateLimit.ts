const buckets = new Map<string, { count: number; resetAt: number }>();

// In-memory only: resets on cold start and isn't shared across serverless instances.
// Fine for current traffic; swap for Upstash/Redis if this endpoint gets targeted seriously.
export function checkRateLimit(key: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}
