import { Anchor, Badge, Box, Card, Container, Flex, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import { IconArrowRight, IconCalendarEvent, IconEye } from '@tabler/icons-react';
import { Await, useFetcher, useLoaderData } from 'react-router';

export default function Devlog() {
  const { devlogs } = useLoaderData<{devlogs: DevLogProps[]}>();

  console.log(devlogs);

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

          {/* Devlog Cards Grid */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Await
              resolve={devlogs} 
              children={(devlog) => {
                return devlog.map((log, index) => (
                  <div key={index}>
                    <DevlogCard log={log} />
                  </div>          
                ))
              }}
            />
          </SimpleGrid>
        </Box>

      </Container>
    </Paper>
  )
}


export interface DevLogProps {
  title: string;
  slug: string;
  overview: string;
  content: string;
  view_count: number;
  published_at: string;
  tags: {
    slug: string;
  }[];
  url: string;
}


/**
 * 
 * @param log Checks props 
 * @returns 
 */
function DevlogCard({ log }: { log: DevLogProps }) {
  const fetcher = useFetcher();

  return (
    <Card 
      radius="md" 
      padding="lg"
      bg="#1c2533" // Deep dark blue from your image
      h="100%" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        // border: log.featured ? '1px solid var(--mantine-color-red-8)' : '1px solid transparent'
      }}
    >
      {/* Top Row: Date and Tags */}
      <Group justify="space-between" align="flex-start" mb="md">
        <Group gap={6} c="gray.5" >
          <IconCalendarEvent size={16} />
          <Text size="xs">{log.published_at}</Text>
        </Group>
        
        <Group gap={6}>
          {log.tags.map((tag, tagIndex) => {
            const colorClass = getTagColor(tagIndex);
            return (
              <Badge 
                key={tag.slug} 
                color={colorClass}
                variant="light" 
                radius="sm" 
                size="sm"
              style={{ textTransform: 'lowercase' }}
              >
              #{tag.slug}
            </Badge>
            )
          })}
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
        {log.overview}
      </Text>

      {/* Bottom Row: Views and Link (Forced to bottom) */}
      <Group justify="space-between" mt="auto" pt="xl">
        <Group gap={6} align="center" c="gray.5">
          <IconEye size={16} />
          <Text size="sm" lh={1}>{log.view_count}</Text>
        </Group>

        <Anchor href={`https://devlog.projectrunpi.com/view/${log.slug}`}>
          <Flex
            gap="xs"
            justify="flex-start"
            align="center"
            onClick={() => fetcher.submit({ slug: log.slug }, { method: "post" })}
          >
            <Text size="sm">Read more</Text>
            <IconArrowRight size={14} />
          </Flex>
        </Anchor>
      </Group>
    </Card>
  )
}



const TAG_COLOR = [
  'teal',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'pink',
] as const;

function getTagColor(index: number) {
  return TAG_COLOR[index % TAG_COLOR.length];
} 


