const PALETTES = [
  '#E3A857', '#C792EA', '#7C9EFF', '#E2685E', '#5FBF88',
  '#4ECDC4', '#F08FC0', '#82C3EC', '#F4A261', '#A78BFA',
  '#6EE7B7', '#FBBF6E', '#F87171', '#93C5FD',
];

function hashTag(tag: string): number {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash << 5) - hash + tag.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getTagColor(tag: string): string {
  return PALETTES[hashTag(tag) % PALETTES.length];
}