export interface HeaderLink {
  label: string;
  path: string;
}

export const headerLinks: HeaderLink[] = [
  { label: 'Home', path: '/' },
  { label: 'ToDo List', path: '/todos' },
  { label: 'Connect Wallet', path: '/wallet' },
  { label: 'Web Workers', path: '/workers' },
];
