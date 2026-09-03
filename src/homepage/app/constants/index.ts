import { IconBrandDocker, IconBrandFacebook, IconBrandLinkedin, IconBrandMedium, IconBrandReact, IconBrandTypescript, IconBrandUpwork, IconBrandVscode, IconGitPullRequest } from "@tabler/icons-react";

export const SITE_CONFIG = {
  title: "Project RunPi",
  description: "I build practical web apps that get the job down. This is my corner of the web where I share what I'm making, my portfolio, and how we can work together",
  copyright: "© 2026 Project RunPi. All rights reserved."
};


export const OG_DESCRIPTION = "I build practical web apps that get the job done. This is my corner of the web where I share what I'm making, my portfolio, and how we can work together."


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



export const TECH_DATA = [
  {
    category: 'Development Environment',
    items: [
      {
        id: 'vscode',
        name: 'VSCode',
        icon: IconBrandVscode,
        color: 'blue', // Match the brand color!
        description: 'My daily driver for coding. Quick and works great with everything.',
        status: 'Active',
        docs: 'https://code.visualstudio.com/docs'
      },
      {
        id: 'docker',
        name: 'Docker Windows',
        icon: IconBrandDocker,
        color: 'cyan',
        description: 'Same Docker setup as production, just on Windows. Keeps dev and prod identical and my system clean.',
        status: 'Active',
        docs: 'https://docs.docker.com/'
      },
      {
        id: 'gitea',
        name: 'Gitea',
        icon: IconGitPullRequest,
        color: 'green',
        description: 'Self-hosted Git server I ran on my Pi. Moved back to GitHub to keep things simpler.',
        status: 'Used',
        docs: 'https://docs.gitea.com/'
      }
    ]
  },
  {
    category: 'Frontend',
    items: [
      {
        id: 'react',
        name: 'React',
        icon: IconBrandReact,
        color: 'cyan',
        description: 'What I use for front-end work. Still learning, but it’s powering my current projects.',
        status: 'Active',
        docs: 'https://react.dev/'
      },
      {
        id: 'typescript',
        name: 'Typescript',
        icon: IconBrandTypescript,
        color: 'blue',
        description: 'Catches bugs before runtime. Still learning it, but already writing more reliable code.',
        status: 'Active',
        docs: 'https://www.typescriptlang.org/docs/'
      }
    ]
  } 
];


