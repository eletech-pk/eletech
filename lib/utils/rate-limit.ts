// Simple in-memory rate limiting for Next.js (Server Components/Actions/Routes)
// Note: In serverless environments, this is local to the instance and resets on cold starts.
// For production scale, replace with a Redis-based solution like Upstash.

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export function checkRateLimit(ip: string, limit: number = 3, windowMs: number = 3600000) {
    const now = Date.now();
    const userLimit = rateLimitMap.get(ip);

    if (!userLimit || now - userLimit.lastReset > windowMs) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return { success: true, count: 1 };
    } else {
        if (userLimit.count >= limit) {
            return { success: false, count: userLimit.count };
        }
        userLimit.count += 1;
        return { success: true, count: userLimit.count };
    }
}
