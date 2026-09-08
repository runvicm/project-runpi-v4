import { IconBrandFacebook, IconBrandLinkedin, IconBrandUpwork } from "@tabler/icons-react";

export const SITE_CONFIG = {
  title: "Project RunPi",
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


export const SOCIAL_LINKS = [
  { id: 'upwork', href: "https://www.upwork.com/freelancers/~0100c0f1552b67ba88", icon: IconBrandUpwork },
  { id: 'linkedin', href: "https://www.linkedin.com/in/runvcm13", icon: IconBrandLinkedin },
  { id: 'facebook', href: "https://www.facebook.com/runv.cm.2024/", icon: IconBrandFacebook },
];
  
// Three (3) Projects only
export const PROJECTS = [
  {
    hostname: 'devlog',
    image: '/assets/project/devlog.png',
    title: 'Developer Log',
    status: 'live',
    description: 'A dev blog where I share progress, updates, and lessons along the way.',
    stacks: ['Laravel', 'React Router 7', 'DaisyUI'],
    url: 'https://devlog.projectrunpi.com',
    repoUrl: 'https://github.com/runvicm/project-runpi-v4'
  },
  {
    hostname: 'minecraft',
    image: '/assets/project/minecraft.png',
    title: 'Minecradt Server',
    status: 'live',
    description: "Info Page and updates for my self-hosted Minecraft server",
    stacks: ['Laravel', 'nextJS', 'TailwindCSS', 'CSS'],
    url: 'https://devlog.projectrunpi.com',
    repoUrl: 'https://github.com/runvicm/project-runpi-v4'
  },
  {
    hostname: 'events',
    image: '',
    title: 'Event List',
    status: 'development',
    description: 'An event calendar focused on local anime and cosplay meetups.',
    stacks: [],
    url: 'https://devlog.projectrunpi.com',
    repoUrl: 'https://github.com/yourhandle/devlog'
  },
];


