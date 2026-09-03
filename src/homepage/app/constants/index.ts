import { IconBrandFacebook, IconBrandLinkedin, IconBrandUpwork } from "@tabler/icons-react";

export const SITE_CONFIG = {
  title: "Project RunPi",
  description: "I build practical web apps that get the job down. This is my corner of the web where I share what I'm making, my portfolio, and how we can work together",
  copyright: "© 2026 Project RunPi. All rights reserved."
};


export const OG_DESCRIPTION = "This is my corner of the web where I share what I'm making, my portfolio, and how we can work together."


export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tech Stack',
    href: '/tech-stacks',
  },
  {
    label: 'Services',
    href: '/services',
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
  

export const PROJECTS = [
  {
    hostname: 'devlog',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Developer Log',
    status: 'developement',
    description: 'thisasd asd asda sd asd ads asd asdas asd asd asd asd asda da dasd er asdf sdf sdfaswea dasewe asdasd asd asd asd asd asda sas dasd asd',
    stacks: ['Laravel', 'React Router', 'Mantine'],
    url: 'https://devlog.yourdomain.com',
    repoUrl: 'https://github.com/yourhandle/devlog'
  },
  {
    hostname: 'minecraft',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Development Log',
    status: 'live',
    description: 'thisasd asd asda sd asd ads asd   ',
    stacks: ['React', 'Laravel', 'Mantine'],
    url: 'https://devlog.yourdomain.com',
    repoUrl: 'https://github.com/yourhandle/devlog'
  },
  {
    hostname: 'events',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Development Log',
    status: 'live',
    description: 'thisasd asd asda sd asd ads asd asdas asdf dfg sfdg dsasda da sd asd',
    stacks: ['React', 'Laravel', 'Mantine'],
    url: 'https://devlog.yourdomain.com',
    repoUrl: 'https://github.com/yourhandle/devlog'
  },
];


