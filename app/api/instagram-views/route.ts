import { NextResponse } from 'next/server';

type RequestBody = {
  reels?: Array<{ id: string; permalink: string }>;
};

const VIEW_PATTERNS = [
  /"video_view_count"\s*:\s*"?(\d+)"?/i,
  /"video_play_count"\s*:\s*"?(\d+)"?/i,
  /"play_count"\s*:\s*"?(\d+)"?/i,
  /"view_count"\s*:\s*"?(\d+)"?/i,
];

function normalizePermalink(url: string): string {
  const clean = url.split('?')[0];
  return clean.endsWith('/') ? clean : `${clean}/`;
}

function extractViewCount(html: string): number | null {
  for (const pattern of VIEW_PATTERNS) {
    const match = html.match(pattern);
    if (!match) continue;
    const parsed = Number.parseInt(match[1], 10);
    if (Number.isFinite(parsed) && parsed >= 0) {
      return parsed;
    }
  }
  return null;
}

async function fetchSingleCount(permalink: string): Promise<number | null> {
  try {
    const response = await fetch(normalizePermalink(permalink), {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.9',
      },
      cache: 'no-store',
      redirect: 'follow',
    });

    if (!response.ok) return null;
    const html = await response.text();
    return extractViewCount(html);
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as RequestBody;
  const reels = body.reels ?? [];

  if (!Array.isArray(reels) || reels.length === 0) {
    return NextResponse.json({ counts: {} });
  }

  const results = await Promise.all(
    reels.map(async ({ id, permalink }) => {
      const count = await fetchSingleCount(permalink);
      return [id, count] as const;
    })
  );

  const counts = Object.fromEntries(results);
  return NextResponse.json({ counts });
}
