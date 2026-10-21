import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const backlogPath = path.join(root, 'src/data/youtube-video-backlog.json');
const contentDirectory = path.join(root, 'src/content/media');
const imageDirectory = path.join(root, 'src/assets/images/media/youtube');

const categoryByOrder = new Map([
  [6, 'Design Insights'],
  [7, 'Project Tours'],
  [8, 'Project Tours'],
  [9, 'Design Insights'],
  [10, 'Project Tours'],
  [11, 'Project Tours'],
  [12, 'Project Tours'],
  [13, 'Design Insights'],
  [14, 'Design Insights'],
  [15, 'Project Tours'],
  [16, 'Design Insights'],
  [17, 'Design Insights'],
  [18, 'Design Insights'],
  [19, 'Before & After'],
  [20, 'Project Tours'],
  [21, 'Design Insights'],
  [22, 'Design Insights'],
  [23, 'Design Insights'],
  [24, 'Design Insights'],
  [25, 'Design Insights'],
  [26, 'Design Insights'],
  [27, 'Project Tours'],
  [28, 'Design Insights'],
  [29, 'Project Tours'],
  [30, 'Design Insights'],
  [31, 'Before & After'],
  [32, 'Design Insights'],
  [33, 'Design Insights'],
  [34, 'Project Tours'],
  [35, 'Project Tours'],
  [36, 'Project Tours'],
  [37, 'Project Tours'],
  [38, 'Project Tours'],
  [39, 'Design Insights'],
  [40, 'Design Insights'],
  [41, 'Project Tours'],
  [42, 'Design Insights'],
  [43, 'Design Insights'],
  [44, 'Design Insights'],
  [45, 'Design Insights'],
  [46, 'Design Insights'],
  [47, 'Project Tours'],
  [48, 'Project Tours'],
  [49, 'Project Tours'],
  [50, 'Design Insights'],
  [51, 'Project Tours'],
  [52, 'Project Tours'],
  [53, 'Design Insights'],
  [54, 'Project Tours'],
  [55, 'Design Insights'],
  [56, 'Design Insights'],
  [57, 'Design Insights'],
]);

function youtubeIdFromUrl(url) {
  const match = new URL(url).pathname.match(/^\/shorts\/([A-Za-z0-9_-]{11})$/);
  if (!match) throw new Error(`Unsupported YouTube Shorts URL: ${url}`);
  return match[1];
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

async function fetchThumbnail(videoId) {
  const variants = ['maxresdefault.jpg', 'sddefault.jpg', 'hqdefault.jpg'];

  for (const variant of variants) {
    const response = await fetch(`https://i.ytimg.com/vi/${videoId}/${variant}`);
    if (!response.ok) continue;

    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length > 10_000) return bytes;
  }

  throw new Error(`No usable thumbnail found for ${videoId}`);
}

function createFrontmatter({ item, videoId, title, category, imageName }) {
  return [
    '---',
    `title: ${JSON.stringify(title)}`,
    `summary: ${JSON.stringify(title)}`,
    'draft: false',
    'platform: youtube',
    `youtubeId: ${videoId}`,
    'format: short',
    `category: ${category}`,
    'language: ar',
    `displayOrder: ${item.order}`,
    `externalUrl: ${item.url}`,
    `thumbnail: ../../assets/images/media/youtube/${imageName}`,
    `thumbnailAlt: ${JSON.stringify(`صورة غلاف فيديو: ${title}`)}`,
    '---',
    '',
  ].join('\n');
}

async function publishItem(item) {
  const category = categoryByOrder.get(item.order);
  if (!category) throw new Error(`Missing category review for item ${item.order}`);

  const videoId = youtubeIdFromUrl(item.url);
  const order = String(item.order).padStart(2, '0');
  const imageName = `${order}-${videoId}.jpg`;
  const contentName = `${order}-${videoId}.md`;
  const oEmbedUrl = new URL('https://www.youtube.com/oembed');
  oEmbedUrl.searchParams.set('url', item.url);
  oEmbedUrl.searchParams.set('format', 'json');

  const [metadata, thumbnail] = await Promise.all([fetchJson(oEmbedUrl), fetchThumbnail(videoId)]);

  const title = String(metadata.title ?? '').trim();
  if (!title) throw new Error(`YouTube returned an empty title for ${videoId}`);

  await Promise.all([
    writeFile(path.join(imageDirectory, imageName), thumbnail),
    writeFile(
      path.join(contentDirectory, contentName),
      createFrontmatter({ item, videoId, title, category, imageName }),
      'utf8',
    ),
  ]);

  item.status = 'published';
  return { order: item.order, videoId, title, category };
}

await Promise.all([
  mkdir(contentDirectory, { recursive: true }),
  mkdir(imageDirectory, { recursive: true }),
]);

const backlog = JSON.parse(await readFile(backlogPath, 'utf8'));
const queued = backlog.filter((item) => item.status === 'queued');

if (queued.length === 0) {
  console.log('No queued YouTube videos to publish.');
  process.exit(0);
}

const results = [];
const failures = [];
const batchSize = 5;

for (let index = 0; index < queued.length; index += batchSize) {
  const batch = queued.slice(index, index + batchSize);
  const settled = await Promise.allSettled(batch.map(publishItem));

  settled.forEach((result, resultIndex) => {
    const item = batch[resultIndex];
    if (result.status === 'fulfilled') results.push(result.value);
    else
      failures.push({
        order: item.order,
        url: item.url,
        error: result.reason?.message ?? String(result.reason),
      });
  });
}

await writeFile(backlogPath, `${JSON.stringify(backlog, null, 2)}\n`, 'utf8');

console.table(results);

if (failures.length > 0) {
  console.error('\nFailed imports:');
  console.table(failures);
  process.exitCode = 1;
} else {
  console.log(`\nPublished ${results.length} YouTube videos.`);
}
