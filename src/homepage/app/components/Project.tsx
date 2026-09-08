import { ActionIcon, Badge, Box, Button, Card, Container, Flex, Group, Image, Paper, Stack, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconExternalLink, IconLock } from '@tabler/icons-react'
import { PROJECTS } from '~/constants'


const BADGES = [
  {
    label: "Frontend",
    color: "yellow"
  },
  {
    label: "Backend",
    color: "green"
  },
  {
    label: "Fullstack",
    color: "blue"
  },
  {
    label: "DevOps",
    color: "grape"
  },
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

            {/* Subtitle badge */}
            <Group gap="sm">
              {BADGES.map((badge, index) => (
                <Badge
                  key={index} 
                  color={badge.color} 
                  variant="light" 
                  size="lg" 
                  radius="xl" 
                  tt="none" 
                  fw={600}
                >
                  {badge.label}
                </Badge>
              ))}
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

          {PROJECTS.map((project, index) => {
            const isLive = project.status === "live";

            return (
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
                        {isLive ? (
                          <>
                            <Text span fw={600} c="orange.7">{project.hostname}</Text>
                            <Text span>.projectrunpi.com</Text>
                          </>
                        ) : (
                          <Text span fw={600} c="orange.7">Null</Text> 
                        )}
                      </Text>
                    </Group>
                  </Box>
                </Card.Section>

                {/* Project Preview */}
                <Card.Section>
                  <Image
                    src={project.image}
                    alt="Project preview"
                    fallbackSrc="/assets/project/coming-soon.png"
                    style={{ borderBottom: '1px solid #e9ecef', width: '100%', height: 200, objectFit: 'cover' }}
                  />
                </Card.Section>

                {/* Title and Status Badge */}
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={700} size="lg" style={{ color: "var(--color-primary)" }}>
                    {project.title}
                  </Text>

                  <Badge color={isLive ? "green" : "red"} variant="light" radius="sm">
                    {project.status}
                  </Badge>
                </Group>

                {/* Description */}
                <Text size="sm" c="dimmed" lineClamp={3} mb="md">
                  {project.description}
                </Text>

                {/* Tech Stack Tags */}
                <Group gap="xs" mb="md" mt="auto">
                  {project.stacks.map((stack, i) => (
                    <Badge key={i} size="xs" variant="outline" color="gray" radius="sm">
                      {stack}
                    </Badge>
                  ))}
                </Group>

                {/* Footer Actions */}
                <Group gap="sm" align="center">
                  <Button 
                    variant={isLive ? "primary" : "disabled"}
                    flex={1} 
                    rightSection={<IconExternalLink size={16} />}
                    component="a"
                    href={isLive ? `https://${project.hostname}.projectrunpi.com` : undefined}
                    data-disabled={!isLive}
                  >
                    {isLive ? "View Project" : "Under Development"}
                  </Button>
                  <ActionIcon 
                    variant="default" 
                    size={36} 
                    radius="md"
                    aria-label="GitHub Repository"
                    component="a"
                    href=""
                  >
                    <IconBrandGithub size={20} stroke={1.5} color="var(--mantine-color-gray-7)" />
                  </ActionIcon>
                </Group>
              </Card>
            );
          })}
        </Flex>
      
      </Container>
    </Paper>

  )
}