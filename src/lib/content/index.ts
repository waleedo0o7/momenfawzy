import { getCollection, render, type CollectionEntry } from 'astro:content';

function visibleInCurrentEnvironment(entry: { data: { draft: boolean } }): boolean {
  return !import.meta.env.PROD || !entry.data.draft;
}

export type ProjectEntry = CollectionEntry<'projects'>;
export type MediaEntry = CollectionEntry<'media'>;

function sortProjects(projects: ProjectEntry[]): ProjectEntry[] {
  return projects.toSorted(
    (a, b) => a.data.displayOrder - b.data.displayOrder || a.data.title.localeCompare(b.data.title),
  );
}

async function getAllProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection('projects');
  const slugs = new Set<string>();

  for (const project of projects) {
    if (slugs.has(project.data.slug)) {
      throw new Error(`Duplicate project slug: ${project.data.slug}`);
    }

    slugs.add(project.data.slug);
  }

  return sortProjects(projects);
}

/** Verified public projects. Demo and draft entries are always excluded. */
export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const projects = await getAllProjects();

  return projects.filter(
    (project) => project.data.status === 'published' && project.data.verified && !project.data.demo,
  );
}

/**
 * Portfolio presentation entries. Development demos are returned only in Astro dev mode and only
 * while no verified public projects exist.
 */
export async function getPortfolioProjects(): Promise<ProjectEntry[]> {
  const projects = await getAllProjects();
  const published = projects.filter(
    (project) => project.data.status === 'published' && project.data.verified && !project.data.demo,
  );

  if (published.length > 0 || !import.meta.env.DEV) return published;

  return projects.filter(
    (project) => project.data.demo && project.data.status === 'draft' && !project.data.verified,
  );
}

export async function getFeaturedProjects(limit = 3): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getPublishedProjects();
  return projects.filter((project) => project.data.featured).slice(0, limit);
}

/** Render a project entry without exposing collection internals to presentation components. */
export async function renderProject(entry: CollectionEntry<'projects'>) {
  return render(entry);
}

/** Presentation-agnostic access point for media content. */
export async function getMediaItems(): Promise<CollectionEntry<'media'>[]> {
  const entries = await getCollection('media');
  return entries
    .filter(visibleInCurrentEnvironment)
    .toSorted(
      (a, b) =>
        a.data.displayOrder - b.data.displayOrder || a.data.title.localeCompare(b.data.title),
    );
}

export async function getLatestMediaItems(limit = 3): Promise<CollectionEntry<'media'>[]> {
  const items = await getMediaItems();

  return items
    .toSorted((a, b) => {
      const aTime = a.data.publishedAt?.getTime() ?? 0;
      const bTime = b.data.publishedAt?.getTime() ?? 0;
      return bTime - aTime;
    })
    .slice(0, limit);
}
