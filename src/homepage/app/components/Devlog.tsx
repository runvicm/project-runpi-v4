import { Anchor, Badge, Box, Card, Center, Container, Flex, Group, Paper, SimpleGrid, Skeleton, Stack, Text, Title } from '@mantine/core'
import { IconArrowRight, IconCalendarEvent, IconEye, IconPlugOff } from '@tabler/icons-react';
import { Await, useFetcher, useLoaderData } from 'react-router';

export default function Devlog() {
  const { devlogs } = useLoaderData<{devlogs: DevLogProps[]}>();

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
          <Await
            resolve={devlogs}
            // Call back when API is down (Skeleotn with warning)
            errorElement={
              <>
                <Center mb="md">
                  <Badge
                    color="red"
                    variant="light"
                    size="lg"
                    radius="xl"
                    leftSection={<IconPlugOff size={14} />}
                  >
                    Service temporarily unavailable
                  </Badge>
                </Center>
             
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonCard key={i}/>
                  ))}
                </SimpleGrid>
              </>
            }
            // Actual output card
            children={(devlog) => {
              return (
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                  {devlog.map((log, index) => (
                    <DevlogCard key={index} log={log} />
                  ))}
                </SimpleGrid>
              )
            }}
          />
        </Box>
      </Container>
    </Paper>
  )
}






/**
 * TO DO: seperate this later as app evolve
 */


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
 * @param log Checks props
 *  
 * @returns 
 */
function DevlogCard({ log }: { log: DevLogProps }) {
  const fetcher = useFetcher();

  return (
    <Card 
      radius="md" 
      padding="lg"
      bg="#1c2533"
      h="100%" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
      }}
    >
      {/* Top Row: Date and Tags */}
      <Flex justify="space-between" align="center" mb="md">
        <Group gap={6} c="gray.5">
          <IconCalendarEvent size={16} />
          <Text
            size="xs"
            style={{ transform: 'translateY(0.5px)'}}
          >
            {log.published_at}
          </Text>
        </Group>
        
        <Group gap={6}>
          {log.tags.map((tag, tagIndex) => {
            const colorClass = getTagColor(tagIndex);
            return (
              <Badge 
                key={tag.slug} 
                color={colorClass}
                radius="sm" 
                size="sm"
                style={{ textTransform: 'lowercase' }}
              >
              #{tag.slug}
            </Badge>
            )
          })}
        </Group>
      </Flex>

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
          <Text size="sm" lh={1} style={{ transform: 'translateY(0.5px)'}}>{log.view_count}</Text>
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
  'blue',
  'orange',
  'green',
  'pink',
  'teal',
  'red',
  'yellow',
] as const;

function getTagColor(index: number) {
  return TAG_COLOR[index % TAG_COLOR.length];
} 

function SkeletonCard() {
    return (
       <div data-mantine-color-scheme="dark">
      <Card radius="lg" p="lg" bg="#1c2533" h="100%" withBorder >
        <Stack gap="md">
          {/* Top row: date icon + tags */}
          <Group justify="space-between" align="center">
            <Group gap={8}>
              <Skeleton height={14} width={14} radius="sm" />
              <Skeleton height={12} width={80} radius="sm" />
            </Group>
            <Group gap={6}>
              <Skeleton height={20} width={48} radius="xl" />
              <Skeleton height={20} width={40} radius="xl" />
              <Skeleton height={20} width={48} radius="xl" />
            </Group>
          </Group>
 
          {/* Title (2 lines) */}
          <Stack gap={8}>
            <Skeleton height={18} width="90%" radius="sm" />
            <Skeleton height={18} width="55%" radius="sm" />
          </Stack>
 
          {/* Description (3 lines) */}
          <Stack gap={8}>
            <Skeleton height={12} width="100%" radius="sm" />
            <Skeleton height={12} width="97%" radius="sm" />
            <Skeleton height={12} width="70%" radius="sm" />
          </Stack>
 
          {/* Footer: views + read more */}
          <Group justify="space-between" align="center" mt="xs">
            <Group gap={6}>
              <Skeleton height={14} width={14} radius="sm" />
              <Skeleton height={12} width={16} radius="sm" />
            </Group>
            <Skeleton height={12} width={80} radius="sm" />
          </Group>
        </Stack>
      </Card>
    </div>

  );

}