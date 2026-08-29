import { IconBrandFacebook, IconBrandLinkedin, IconBrandMedium, IconBrandUpwork } from "@tabler/icons-react";

export const SITE_CONFIG = {
  title: "Project RunPi",
  description: "I build real, working web apps with React Router 7 and Laravel...",
  copyright: "© 2026 Project RunPi. All rights reserved."
};



export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tech Stack',
    href: 'tech-stack',
  },
  {
    label: 'Services',
    href: 'services',
  },
  {
    label: 'About',
    href: 'about',
  }
]



export const SOCIAL_LINKS = [
  { id: 'upwork', href: 'https://upwork.com/...', icon: IconBrandUpwork },
  { id: 'linkedin', href: 'https://linkedin.com/in/...', icon: IconBrandLinkedin },
  { id: 'facebook', href: 'https://facebook.com/...', icon: IconBrandFacebook },
  { id: 'medium', href: 'https://medium.com/...', icon: IconBrandMedium }
];
  