const PALETTES = [
  '#173BA1', // Royal Blue
  '#672791', // Deep Purple
  '#1E7350', // Forest Green
  '#946524', // Warm Ochre
  '#97205C', // Magenta / Berry
  '#1F6E8C', // Ocean Teal
  '#A05418', // Burnt Orange
  '#922E26', // Crimson
  '#3A17A1', // Indigo
];


const TAG_OVERRIDES: Record<string, string> = {
  'CLOUDFLARE TUNNEL': '#1E7350', // Forest Green
  'PODMAN': '#946524',            // Warm Ochre
  'RO3EMU': '#922E26',            // Crimson
  'RO3LAUNCHER': '#97205C',       // Magenta / Berry
};


function hashTag(tag: string): number {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash << 5) - hash + tag.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getTagColor(tag: string): string {
  const normalized = tag.trim().toUpperCase();
  return TAG_OVERRIDES[normalized] ?? PALETTES[hashTag(normalized) % PALETTES.length];
}