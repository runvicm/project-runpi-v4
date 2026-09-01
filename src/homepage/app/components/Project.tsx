import { ActionIcon, Badge, Box, Button, Card, Container, Flex, Group, Image, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconExternalLink, IconLock } from '@tabler/icons-react'
import React from 'react'


const PROJECTS = [
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
  // {
  //   hostname: 'minecraft',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   title: 'Development Log',
  //   status: 'live',
  //   description: 'thisasd asd asda sd asd ads asd   ',
  //   stacks: ['React', 'Laravel', 'Mantine'],
  //   url: 'https://devlog.yourdomain.com',
  //   repoUrl: 'https://github.com/yourhandle/devlog'
  // },
  // {
  //   hostname: 'events',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   title: 'Development Log',
  //   status: 'live',
  //   description: 'thisasd asd asda sd asd ads asd asdas asdf dfg sfdg dsasda da sd asd',
  //   stacks: ['React', 'Laravel', 'Mantine'],
  //   url: 'https://devlog.yourdomain.com',
  //   repoUrl: 'https://github.com/yourhandle/devlog'
  // }
];




export default function Project() {
  return (
    <Paper py={100} variant='project'>
      <Container size={1280} >

        <Box pb={60}> 
          <Stack align="center" gap="xs">
            
            {/* Main Header */}
            <Title order={1} c="teal.9" fw={800}>
              Personal Projects
            </Title>
            
            {/* Subheading */}
            <Text c="dimmed" size="lg" mb="sm" fw={500}>
              Things I build on my own time.
            </Text>

            {/* Filter / Category Badges */}
            <Group gap="sm">
              <Badge 
                color="yellow" 
                variant="light" 
                size="lg" 
                radius="xl" 
                tt="none" 
                fw={600}
              >
                Frontend
              </Badge>
              <Badge 
                color="green" 
                variant="light" 
                size="lg" 
                radius="xl" 
                tt="none" 
                fw={600}
              >
                Backend
              </Badge>
              <Badge 
                color="blue" 
                variant="light" 
                size="lg" 
                radius="xl" 
                tt="none" 
                fw={600}
              >
                Fullstack
              </Badge>
              <Badge 
                color="grape" 
                variant="light" 
                size="lg" 
                radius="xl" 
                tt="none" 
                fw={600}
              >
                DevOps
              </Badge>
            </Group>

          </Stack>
        </Box>



        {/* Cards */}
        <Flex
          gap="xl"
          justify="center"
          align="stretch"
          direction="row"
          wrap="wrap"
        >
          {PROJECTS.map((project, index) => (
            <Card key={index} variant="project">
              {/* Header Section showing URL */}
              <Card.Section 
                withBorder 
                py="xs" 
                px="md" 
                style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}
              >
                <Box
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e9ecef',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                  }}
                >
                  <Group gap={8} align="center">
                    <IconLock size={14} color="var(--mantine-color-gray-5)" stroke={2} />
                    <Text size="sm" style={{ fontFamily: 'monospace' }}>
                      {/* Highlighted subdomain, muted root domain */}
                      <Text span fw={600} c="orange.7">{project.hostname}</Text>
                      <Text span>.projectrunpi.com</Text>
                    </Text>
                  </Group>
                </Box>
              </Card.Section>

              {/* Prohect Preview */}
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  height={160}
                  alt="Project preview"
                  style={{ borderBottom: '1px solid #e9ecef' }}
                />
              </Card.Section>


              {/* Title and Status Badge */}
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={700} size="lg" c="var(--color-bg2)">
                  {project.title}
                </Text>
                {/* <Badge color="teal.6" variant="light" radius="sm">
                  {project.status}
                </Badge> */}
              </Group>

              {/* Description */}
              <Text size="sm" c="dimmed" lineClamp={3} mb="md">
                {project.description}
              </Text>

              {/* Tech Stack Tags */}
              <Group gap="xs" mb="md" mt="auto">
                {project.stacks.map((stack, index) => (
                  <Badge key={index} size="xs" variant="outline" color="gray" radius="sm">{stack}</Badge>
                ))}
              </Group>
            
              {/* Footer Actions */}
              <Group gap="sm" >
                <Button 
                  variant="primary" 
                  flex={1} 
                  rightSection={<IconExternalLink size={16} />}
                >
                   View Project
                </Button>
                
                <ActionIcon 
                  variant="default" 
                  size={36} 
                  radius="md"
                  aria-label="GitHub Repository"
                >
                  <IconBrandGithub size={20} stroke={1.5} color="var(--mantine-color-gray-7)" />
                </ActionIcon>
              </Group>
          
            </Card>
          ))}

        </Flex>
      
      </Container>
    </Paper>

  )
}