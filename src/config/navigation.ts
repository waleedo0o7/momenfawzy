export interface NavigationItem {
  label: string;
  href: string;
}

export const primaryNavigation: readonly NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Media Center', href: '/media-center/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export function isActivePath(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href);
}
