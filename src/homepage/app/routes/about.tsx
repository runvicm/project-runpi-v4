import { Container, Title, Text, Grid, Box, Group, ThemeIcon, Stack } from '@mantine/core';
import { IconRocket, IconCode, IconTrendingUp, IconBell, IconTarget, IconBulb } from '@tabler/icons-react';
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
    <Container size="md" py={80}>
      
      {/* Editorial Header */}
      <Box mb={60} maw={700}>
        <Title order={1} fw={900} style={{ fontSize: '3.5rem', letterSpacing: '-1px' }} mb="xl">
          Hi there! 👋 <br />I'm Runvi.
        </Title>
        
        <Stack gap="md" c="gray.7" __size="lg" lh={1.7}>
          <Text>
            This is my corner of the web where I document my journey in web development.
          </Text>
          <Text>
            This project started when I got my hands on a Raspberry Pi 5 and decided to try self-hosting a website. What began as a curiosity about whether a tiny computer could actually run a real site turned into my testing ground for learning server management, deployment, and all the behind-the-scenes stuff that makes websites actually work.
          </Text>
          <Text>
            I built this site to keep track of the projects I'm working on, the tools I'm experimenting with, and the lessons I learn along the way. It's part portfolio, part notebook, a place where I test ideas, figure out what works (and what doesn't), and watch my skills evolve over time.
          </Text>
          <Text fw={600} c="dark.9">
            Today it's grown into a proper showcase of React Router 7, TypeScript, Tailwind, and Laravel.
          </Text>
        </Stack>
      </Box>

      {/* Two Column Feature Grid */}
      <Grid gap={60} mt={80}>
        
        {/* Left Column */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={3} c="dark.9" mb="xl">Explore My Work</Title>
          <Stack gap="lg">
            <FeatureItem icon={IconRocket} title="Projects:" desc="Solo builds shipped and self-hosted." />
            <FeatureItem icon={IconCode} title="Tech Stack & Learnings:" desc="Notes and insights from tools I've worked with." />
            <FeatureItem icon={IconTrendingUp} title="Progress & Growth:" desc="How I'm evolving as a developer through hands-on building." />
            <FeatureItem icon={IconBell} title="Recent Updates:" desc="Latest things I'm working on and learning." />
          </Stack>
        </Grid.Col>

        {/* Right Column */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={3} c="dark.9" mb="xl">About This Space</Title>
          <Text c="gray.6" mb="xl" lh={1.6}>
            This site is my project hub and learning journal rolled into one. A space where experimentation and learning happen out loud.
          </Text>

          <Stack gap="lg">
            <FeatureItem 
              icon={IconTarget} 
              title="What I'm Doing" 
              desc="Building and self-hosting solo projects, learning in public, and documenting everything along the way." 
            />
            <FeatureItem 
              icon={IconBulb} 
              title="How I Learn" 
              desc="Learn by building. Every project here, successful or not, taught me something valuable worth sharing." 
            />
          </Stack>
        </Grid.Col>

      </Grid>
    </Container>
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