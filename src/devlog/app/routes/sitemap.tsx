import { env } from 'cloudflare:workers';
import type { LoaderFunctionArgs } from 'react-router';

const SITE_URL = 'https://devlog.projectrunpi.com';

type ApiPost = { slug: string; date_iso: string };
type ApiResponse = { data: ApiPost[]; current_page: number; last_page: number };

async function fetchAllPosts(API_URL: string): Promise<ApiPost[]> {
  const all: ApiPost[] = [];
  let page = 1;
  let lastPage = 1;

  do {
    const res = await fetch(`${API_URL}/api/devlog/entries?page=${page}`);
    const result: ApiResponse = await res.json();
    all.push(...result.data);
    lastPage = result.last_page;
    page++;
  } while (page <= lastPage);

  return all;
}


export async function loader(_: LoaderFunctionArgs) {
  const API_URL = env.API_URL;
  const posts = await fetchAllPosts(API_URL);

  const urls = [
    { loc: `${SITE_URL}/`, changefreq: 'daily', priority: '1.0' },
    ...posts.map((post) => ({
      loc: `${SITE_URL}/view/${post.slug}`,
      lastmod: post.date_iso,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((u) => `  <url>
        <loc>${u.loc}</loc>
        ${'lastmod' in u && u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
      </url>`).join('\n')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

