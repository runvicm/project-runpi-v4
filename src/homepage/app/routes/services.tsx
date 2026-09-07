import { Container, Title, Text, Grid, Paper, Button, List, ThemeIcon, Badge, Divider, Box, Group } from '@mantine/core';
import { IconCheck, IconX, IconExternalLink } from '@tabler/icons-react';
import { OG_DESCRIPTION, SITE_CONFIG } from '~/constants';
import { createMeta } from '~/utils/seo';

const tiers = [
  {
    badge: 'Starter Package',
    title: 'Static Website',
    description: 'Clean, fast, and responsive pages — perfect for landing pages, service pages, and about pages.',
    price: '$100',
    priceDetail: 'base',
    extras: '+ $40 per additional page\nAdditional revisions at $25/hr',
    included: [
      'Up to 1 page (Landing, Services, or About)',
      'Built with React Router 7, TypeScript, and Tailwind CSS',
      'Fully responsive (mobile, tablet, desktop)',
      'SSR-ready structure',
      '2 rounds of revisions'
    ],
    notIncluded: ['Design — client provides Figma or reference']
  },
];

export function meta() {
  return createMeta({
    title: `${SITE_CONFIG.title} - Services`,
    description: `${OG_DESCRIPTION}`,
    type: "website"
  });
}


/**
 * TO DO: This page is for future use
 * 
 * @returns 
 */
export default function ServicesPage() {
  return (
    <Container size="md" py={80}>
      <Box ta="center" mb={60}>
        <Title order={1} c="dark.9" fw={900} style={{ fontSize: '3rem', letterSpacing: '-1px' }}>
          Services
        </Title>
        <Text c="gray.6" size="lg" mt="md">
          From simple landing pages to full-stack web apps. All built with a modern, production-ready stack.
        </Text>
      </Box>

      <Grid gap={40}>
        {tiers.map((tier) => (
          <Grid.Col span={12} key={tier.title}>
            <Paper 
              radius="lg" 
              p={{ base: 'xl', md: 50 }} 
              withBorder 
              style={{ borderColor: 'var(--mantine-color-gray-3)' }}
            >
              <Grid gap={50} align="stretch">
                
                {/* Left Side: Pricing & CTA */}
                <Grid.Col span={{ base: 12, md: 5 }} style={{ display: 'flex', flexDirection: 'column' }}>
                  <Badge color="blue" variant="light" size="md" radius="sm" mb="lg">
                    {tier.badge}
                  </Badge>
                  <Title order={2} size="h3" c="dark.9" mb="sm">{tier.title}</Title>
                  <Text c="gray.6" size="sm" lh={1.6} mb="xl">{tier.description}</Text>
                  
                  <Group align="flex-end" gap="xs" mb="md" mt="auto">
                    <Title order={3} c="dark.9" style={{ fontSize: '2.5rem', lineHeight: 1 }}>{tier.price}</Title>
                    <Text c="gray.5" fw={600} pb={4}>{tier.priceDetail}</Text>
                  </Group>
                  
                  <Text c="gray.5" size="xs" style={{ whiteSpace: 'pre-line' }} mb="xl">
                    {tier.extras}
                  </Text>
                  
                  <Button 
                    variant="default" 
                    radius="md" 
                    size="md" 
                    fullWidth 
                    rightSection={<IconExternalLink size={16} />}
                  >
                    Hire me on Upwork
                  </Button>
                </Grid.Col>

                {/* Right Side: Features */}
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Text c="dark.9" fw={700} size="sm" tt="uppercase" mb="md">Included</Text>
                  <List
                    spacing="sm"
                    size="sm"
                    c="gray.7"
                    icon={
                      <ThemeIcon color="teal" size={20} radius="xl" variant="light">
                        <IconCheck size={14} stroke={3} />
                      </ThemeIcon>
                    }
                  >
                    {tier.included.map((item, i) => (
                      <List.Item key={i}>{item}</List.Item>
                    ))}
                  </List>

                  <Divider my="xl" color="gray.2" />

                  <Text c="dark.9" fw={700} size="sm" tt="uppercase" mb="md">Not Included</Text>
                  <List
                    spacing="sm"
                    size="sm"
                    c="gray.7"
                    icon={
                      <ThemeIcon color="red" size={20} radius="xl" variant="light">
                        <IconX size={14} stroke={3} />
                      </ThemeIcon>
                    }
                  >
                    {tier.notIncluded.map((item, i) => (
                      <List.Item key={i}>{item}</List.Item>
                    ))}
                  </List>
                  
                  <Text c="gray.5" size="xs" mt="xl" fs="italic">
                    Source code released after clean-up and full payment. No partial releases.
                  </Text>
                </Grid.Col>

              </Grid>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}