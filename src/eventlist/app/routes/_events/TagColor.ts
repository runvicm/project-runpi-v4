  const PALETTES = [
   '#2563EB', // Electric Blue
  '#9333EA', // Vivid Purple
  '#10B981', // Emerald Mint
  '#F59E0B', // Bright Amber
  '#EC4899', // Hot Pink
  '#06B6D4', // Neon Cyan
  '#F97316', // Vibrant Orange
  '#EF4444', // Bright Coral Red
  '#6366F1', // Electric Indigo
  '#84CC16', // Lime Green
  '#D946EF', // Fuchsia
  '#14B8A6', // Bright Teal
  '#E11D48', // Vivid Rose
  '#8B5CF6', // Bright Violet
  ];


const TAG_OVERRIDES: Record<string, string> = {
  'CLOUDFLARE TUNNEL': '#1E7350', // Forest Green
  'PODMAN': '#946524',            // Warm Ochre
  'RO3EMU': '#922E26',            // Crimson
  'RO3LAUNCHER': '#97205C',       // Magenta / Berry
};


function Tag(tag: string): number {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash << 5) - hash + tag.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function TagColor(tag: string): string {
  const normalized = tag.trim().toUpperCase();
  return TAG_OVERRIDES[normalized] ?? PALETTES[Tag(normalized) % PALETTES.length];
}