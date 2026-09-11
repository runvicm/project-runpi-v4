import type { TreeNodeData } from "@mantine/core";

export const SITE_CONFIG = {
  title: "runpi@devlog",
  description: "I build and self-host my own projects here, working through everything from backend infrastructure to the interfaces on top, and using each one as a chance to get better at the full stack.",
  copyright: "© 2026 Project RunPi. All rights reserved."
};

export const OG_DESCRIPTION = "Backend-focused full-stack developer sharing what I'm building — practical tools, apps, and the process behind them."

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tech Stack',
    href: '/tech-stack',
  },
  {
    label: 'About',
    href: '/about',
  }
]



const TREE_DATA: TreeNodeData[] = [
  {
    value: '2026',
    label: '2026',
    children: [
      {
        value: '2026/September',
        label: 'September',
        children: [
          { value: 'e1', label: 'WASM boundary.md' },
        ],
      },
      {
        value: '2026/August',
        label: 'August',
        children: [
          { value: 'e2', label: 'Queue refactor.md' },
          { value: 'e3', label: 'Flaky CI test.md' },
        ],
      },
      {
        value: '2026/July',
        label: 'July',
        children: [
          { value: 'e4', label: 'DB migration.md' },
          { value: 'e5', label: 'Rate limits.md' },
        ],
      },
    ],
  },
];

