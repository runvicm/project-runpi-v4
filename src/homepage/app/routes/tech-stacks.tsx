import { Box, Text, Group, Badge, Anchor, Divider, Stack, Title, ThemeIcon, Paper } from '@mantine/core';
import { 
  IconExternalLink, 
  IconBrandVscode, 
  IconBrandDocker, 
  IconBrandGithub,
  IconGitPullRequest, // Fallback for Gitea/Git
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind
} from '@tabler/icons-react';

const techData = [
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

export default function TechStackRedesign() {
  return (
    <Paper variant='hero'>

  
    <Box maw={800} mx="auto" py={60} px="lg">
      {techData.map((section, sectionIndex) => (
        <Box key={section.category} mb={60}>
          <Title order={2} size="h3" c="teal.7" mb="xl" fw={700}>
            {section.category}
          </Title>


          <Paper bg="white" p="xl" radius="lg" shadow="sm">

       
          <Stack gap={0}>
            {section.items.map((item, index) => {
              // 1. Assign the Tabler icon reference to a capitalized variable
              const Icon = item.icon;

              return (
                <Box key={item.id}>
                  <Group wrap="nowrap" align="flex-start" py="lg">
                    
                    {/* 2. Wrap the icon in a sleek ThemeIcon using the item's brand color */}
                    <ThemeIcon 
                      size={48} 
                      radius="md" 
                      variant="light" 
                      color={item.color}
                    >
                      <Icon size={28} stroke={1.5} />
                    </ThemeIcon>

                    <Box style={{ flex: 1 }}>
                      <Group gap="sm" mb={4}>
                        <Text fw={600} size="lg" c="dark.9">
                          {item.name}
                        </Text>
                        <Badge 
                          color={item.status === 'Active' ? 'teal' : 'gray'} 
                          variant={item.status === 'Active' ? 'light' : 'outline'}
                          size="sm" 
                          radius="sm"
                        >
                          {item.status}
                        </Badge>
                      </Group>
                      <Text size="sm" c="gray.6" lh={1.5} maw={500}>
                        {item.description}
                      </Text>
                    </Box>

                    <Anchor 
                      href={item.docs} 
                      target="_blank" 
                      c="gray.5" 
                      size="sm" 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      Docs <IconExternalLink size={14} />
                    </Anchor>
                  </Group>

                  {index < section.items.length - 1 && (
                    <Divider color="gray.2" />
                  )}
                </Box>
              );
            })}
          </Stack>
             </Paper>
        </Box>
      ))}
    </Box>
      </Paper>
  );
}