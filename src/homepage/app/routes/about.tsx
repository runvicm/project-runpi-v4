import { Container, Title, Text, Grid, Box, Group, ThemeIcon, Stack, Timeline, Badge, Card, SimpleGrid, Image, Paper } from '@mantine/core';
import { IconRocket, IconCode, IconTrendingUp, IconBell, IconTarget, IconBulb, IconCpu, IconRefresh, IconNotebook, IconTools, IconServer } from '@tabler/icons-react';
import { OG_DESCRIPTION, SITE_CONFIG } from '~/constants';
import { createMeta } from '~/utils/seo';

export function meta() {
  return createMeta({
    title: `${SITE_CONFIG.title} - Abaout`,
    description: `${OG_DESCRIPTION}`,
    type: "website"
  });
}

export default function AboutPage() {
  return (
    <Paper variant="bg2">
      <Container size="md" py={80}>
        <Stack gap={48}>
          {/* Hero */}
          <Stack gap="xs" ta="center">
            <Text size="sm" c="dimmed">ABOUT</Text>
            <Title order={1}>This corner of the web</Title>
            <Text c="dimmed" maw={500} mx="auto">A place to document what I'm building, what breaks, and what I learn fixing it.</Text>
          </Stack>

          {/* Journey */}
        <Stack gap="md">
          <Text size="sm" c="dimmed" tt="uppercase">The journey so far</Text>
          <Text>This project started when I got my hands on a Raspberry Pi 5 and decided to try self-hosting a website. What began as a curiosity about whether a tiny computer could actually run a real site turned into my testing ground for learning server management, deployment, and all the behind-the-scenes stuff that makes websites actually work.</Text>
          <Text>I built this site to keep track of the projects I'm working on, the tools I'm experimenting with, and the lessons I learn along the way. It's part portfolio, part notebook — a place where I test ideas, figure out what works (and what doesn't), and watch my skills evolve over time.</Text>
          <Text fw={500}>Today, it's grown into a proper showcase of React Router 7, TypeScript, Tailwind, and Laravel — and it's still evolving right along with me.</Text>
        </Stack>

          {/* Two column: what / how */}
        <SimpleGrid cols={2} spacing="lg">
          <Card radius="md" p="lg">
            <ThemeIcon variant="light" color="teal" size={40} radius="md" mb="sm">
              <IconTools size={20} />
            </ThemeIcon>
            <Text fw={500} mb="xs">What this is</Text>
            <Text size="sm" c="dimmed">Small, practical tools and apps, built and shipped one at a time.</Text>
          </Card>
          <Card radius="md" p="lg">
            <ThemeIcon variant="light" color="teal" size={40} radius="md" mb="sm">
              <IconServer size={20} />
            </ThemeIcon>
            <Text fw={500} mb="xs">How it's built</Text>
            <Text size="sm" c="dimmed">Self-hosted on the Pi5, using React Router and Laravel.</Text>
          </Card>
        </SimpleGrid>

        <Card radius="md" p="lg">
          <Stack gap="md">
            <Text fw={500}>The setup</Text>
            <Text size="sm" c="dimmed">Everything you see here is what it runs on.</Text>
            <SimpleGrid cols={2} spacing="sm">
              <Image src="/assets/pi5-board.jpg" alt="Raspberry Pi 5 board" radius="md" h={250} fit="cover" />
              <Image src="/assets/pi5-nvme.jpg" alt="Pi5 Hat" radius="md" h={250} fit="cover" />
              <Image src="/assets/pi5-test.jpg" alt="Test Run" radius="md" h={250} fit="cover" />
              <Image src="/assets/pi5-server.jpg" alt="Finished Setup" radius="md" h={250} fit="cover" />
            </SimpleGrid>
          </Stack>
        </Card>
        </Stack>
      </Container>

    </Paper>
  );
}


interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

/**
 * TO DO: will move this later as component
 * 
 * @param icon Tabler Icon
 * @param title Title
 * @param desc Description
 * @returns 
 */
function FeatureItem({ icon: Icon, title, desc }: FeatureItemProps) {
  return (
    <Group wrap="nowrap" align="flex-start">
      <ThemeIcon size={40} radius="md" color="teal" variant="light" mt={4}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Box>
        <Text fw={700} c="dark.9">{title}</Text>
        <Text size="sm" c="gray.6" lh={1.5}>{desc}</Text>
      </Box>
    </Group>
  );
}