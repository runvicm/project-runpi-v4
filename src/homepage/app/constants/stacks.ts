import { IconBrandDocker, IconBrandReact, IconBrandTypescript, IconBrandVscode, IconGitPullRequest } from "@tabler/icons-react";

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
        id: 'devontainer',
        name: 'Dev Container',
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


