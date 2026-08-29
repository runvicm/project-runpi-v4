import { Anchor, Badge, Box, Card, Container, Flex, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import { IconArrowRight, IconCalendarEvent, IconEye } from '@tabler/icons-react';



const devlogs = [
  {
    id: 1,
    date: 'May 17, 2026',
    title: 'Yarn To Pnpm SSR And Cross Device HMR',
    excerpt: 'Switched frontend tooling from Yarn to pnpm for better performance. Added Inertia SSR support and got HMR working across both PC and mobile via ZeroTier.',
    tags: [
      { label: 'front', color: 'teal.8' },
      { label: 'dev', color: 'blue.9' },
      { label: 'infra', color: 'green.9' }
    ],
    views: 0,
    featured: false,
  },
  {
    id: 2,
    date: 'Apr 07, 2026',
    title: 'Events.projectrunpi.com',
    excerpt: 'Added the Events subdomain to production. These pages show PH events related to anime cosplay and games.',
    tags: [
      { label: 'prod', color: 'teal.8' },
      { label: 'live', color: 'blue.9' }
    ],
    views: 0,
    featured: true, // This triggers the red border from your design
  },
  {
    id: 3,
    date: 'Apr 02, 2026',
    title: 'Devlog View Count Adjustment',
    excerpt: 'Refactored how view count is handled.',
    tags: [
      { label: 'ref', color: 'teal.8' },
      { label: 'backend', color: 'blue.9' }
    ],
    views: 0,
    featured: false,
  }
];


export default function Devlog() {
  return (
    <Paper py={100} variant="devlog">
      <Container size={1280} >
        
        <Box py={60}>
          {/* Section Header */}
          <Box ta="center" mb={50}>
            <Title order={2} c="teal.9" fw={800} style={{ fontSize: '2.5rem' }}>
              Latest Updates
            </Title>
            <Text c="dimmed" mt="sm" size="lg">
              Latest updates, technical changes, and project development notes.
            </Text>
          </Box>

          {/* Cards Grid */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {devlogs.map((log) => (
              <Card 
                key={log.id} 
                radius="md" 
                padding="lg"
                bg="#1c2533" // Deep dark blue from your image
                h="100%" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: log.featured ? '1px solid var(--mantine-color-red-8)' : '1px solid transparent'
                }}
              >
                {/* Top Row: Date and Tags */}
                <Group justify="space-between" align="flex-start" mb="md">
                  <Group gap={6} c="gray.5" >
                    <IconCalendarEvent size={16} />
                    <Text size="xs">{log.date}</Text>
                  </Group>
                  
                  <Group gap={6}>
                    {log.tags.map(tag => (
                      <Badge 
                        key={tag.label} 
                        color={tag.color} 
                        variant="filled" 
                        radius="sm" 
                        size="sm"
                        style={{ textTransform: 'lowercase' }}
                      >
                        #{tag.label}
                      </Badge>
                    ))}
                  </Group>
                </Group>

                {/* Content */}
                <Text fw={700} size="lg" c="white" lh={1.3}>
                  {log.title}
                </Text>

                <Text 
                  size="sm" 
                  c="gray.5" 
                  mt="sm" 
                  lh={1.6} 
                  lineClamp={3} // Prevents text from pushing the card too tall
                >
                  {log.excerpt}
                </Text>

                {/* Bottom Row: Views and Link (Forced to bottom) */}
                <Group justify="space-between" mt="auto" pt="xl">
                  <Group gap={6} align="center" c="gray.5">
                    <IconEye size={16} />
                    <Text size="sm" lh={1}>0</Text>
                  </Group>

                  <Anchor href="#">
                    <Flex
                      gap="xs"
                      justify="flex-start"
                      align="center"
                    >
                      <Text size="sm">Read more</Text>
                      <IconArrowRight size={14} />
                    </Flex>
                  </Anchor>
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Box>


      </Container>
    </Paper>
  )
}
