import { Box, Button, Card, Center, Container, Group, Paper, SimpleGrid, Text, ThemeIcon, Title, } from "@mantine/core";
import { IconArrowUpRight, IconDatabase, IconInfoCircle, IconLayersLinked, IconWorld } from "@tabler/icons-react";

const PACKAGES = [
  {
    id: 'starter',
    icon: IconLayersLinked,
    tier: 'STARTER PACKAGE',
    title: 'Static Website',
    desc: 'Clean, fast, and responsive pages — perfect for landing pages, service pages, and about pages.',
    price: '$100',
    unit: 'base',
  },
  {
    id: 'standard',
    icon: IconWorld,
    tier: 'STANDARD PACKAGE',
    title: 'Static Website + Hosting',
    desc: 'Everything in Starter, plus deployment on Cloudflare Pages and monthly maintenance so your site stays up and updated. ',
    price: '$150',
    unit: 'base',
  },
  {
    id: 'pro',
    icon: IconDatabase,
    tier: 'PROFESSIONAL PACKAGE',
    title: 'Full-Stack Web App',
    desc: 'A complete web application with backend, database, SSR, and dynamic features — built to scale.',
    price: '$25',
    unit: '/hr',
  }
];


/**
 * TODO: Will use in future
 * 
 * @returns 
 */
export default function Services() {
  return (
    <Paper py={60} variant="services">
      <Container size={1280} >

        <Box ta="center">
          {/* The "Eyebrow" Text */}
          <Text c="teal.6" fw={700} tt="uppercase" size="sm" mb={4}>
            What I Offer
          </Text>
          
          {/* The Main Title */}
          <Title order={2} c="teal.9" fw={800} style={{ fontSize: '2.5rem' }}>
            My Services
          </Title>
        </Box>

        <Box py={60}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              
              return (
                <Card 
                  key={pkg.id} 
                  withBorder 
                  padding="xl" 
                  radius="md" 
                  shadow="sm" 
                  variant="services"
                >
                  {/* Icon */}
                  <ThemeIcon size={50} radius="md" variant="light" color="teal.6">
                    <Icon size={26} stroke={1.5} color="white"/>
                  </ThemeIcon>

                  {/* Tier (Eyebrow Text) */}
                  <Text c="teal.6" fw={700} size="xs" mt="xl" tt="uppercase" >
                    {pkg.tier}
                  </Text>

                  {/* Title */}
                  <Text fw={800} size="xl" mt={5} c="dark.9">
                    {pkg.title}
                  </Text>

                  {/* Description */}
                  <Text size="sm" c="dimmed" mt="sm" lh={1.6}>
                    {pkg.desc}
                  </Text>

                  {/* FOOTER: Price and Button */}
                  <Group justify="space-between" align="flex-end" mt="auto" pt="xl">
                    
                    <Text fw={800} size="xl" c="dark.9">
                      {pkg.price} <Text span size="sm" c="dimmed" fw={500}>{pkg.unit}</Text>
                    </Text>
                    
                    <Button 
                      variant="primary"
                      radius="md" 
                      rightSection={<IconArrowUpRight size={16} />}
                    >
                      View Details
                    </Button>
                    
                  </Group>
                </Card>
              );
            })}
          </SimpleGrid>

          {/* The Bottom Info Pill from your screenshot */}
          <Center mt={40}>
            <Box 
              style={{ 
                border: '1px solid var(--mantine-color-teal-2)', 
                borderRadius: '50px',
                backgroundColor: '#ffffff'
              }}
              px="lg"
              py="sm"
            >
              <Group gap="xs">
                <IconInfoCircle size={18} color="var(--mantine-color-teal-6)" stroke={2} />
                <Text size="sm" c="dimmed" fw={500}>
                  This website is built using the same stack I offer. Feel free to look around as a live demo of my work.
                </Text>
              </Group>
            </Box>
          </Center>
        </Box>
      </Container>
    </Paper>
  )
}
