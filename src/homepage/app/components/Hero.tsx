import { Box, Button, Container, Flex, Grid, Group, Image, Marquee, Paper, Stack, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconBrandUpwork, IconCode, IconCodeAi, IconCodeAsterix, IconCodeDots, IconServerSpark } from '@tabler/icons-react';
import { SITE_CONFIG } from '~/constants';


const STACKS = [
  {
    label:  "React Router",
    icon:   "https://cdn.simpleicons.org/reactrouter/CA4245",
    href:   "#",
  },
  {
    label:  "Typescript",
    icon:   "https://cdn.simpleicons.org/typescript/3178C6",
    href:   "#",
  },
  {
    label:  "Mantine",
    icon:   "https://cdn.simpleicons.org/mantine/339AF0",
    href:   "#",
  },
  {
    label:  "Cloudflare Services",
    icon:   "https://cdn.simpleicons.org/cloudflare/F38020",
    href:   "#",
  },
  {
    label:  "Nginx",
    icon:   "https://cdn.simpleicons.org/nginx/009639",
    href:   "#",
  },
  {
    label:  "Laravel",
    icon:   "https://cdn.simpleicons.org/laravel/FF2D20",
    href:   "#",
  },
  {
    "label": "PostgreSQL",
    "icon": "https://cdn.simpleicons.org/postgresql/4169E1",
    "href": "#"
  },
  {
    "label": "Docker",
    "icon": "https://cdn.simpleicons.org/docker/2496ED",
    "href": "#"
  },
  {
    "label": "Raspberry Pi 5",
    "icon": "https://cdn.simpleicons.org/raspberrypi/22846",
    "href": "#"
  }

]


export default function Hero() {
  return (
    <Paper py={100} variant='hero'>
      <Container size={1280} >
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 7 }}>

            <Stack align="flex-start" gap="lg">
              
              {/* Subtle status badge */}
              <Box 
                px="md" 
                py={6} 
                style={{ 
                  borderRadius: '999px', 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(0, 0, 0, 0.08)' 
                }}
              >
                <Text size="xs" fw={200} c="dimmed">
                  ✨ Available for freelance & full-time roles
                </Text>
              </Box>

              {/* Massive, bold headline */}
              <Title 
                order={1} 
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  fontWeight: 800, 
                  lineHeight: 1.1,
                  // letterSpacing: '-0.03em'
                }}
              >
                Project RunPi <br />
                <Text size="xl">Full-Stack Developer</Text>
              </Title>


              {/* Subtitle description */}
              <Text size="xl" maw={600} style={{ lineHeight: 1.6 }}>
                {SITE_CONFIG.description}
              </Text>

              <Box w={{ base: '100%', xs: '100%', md: '80%' }} style={{ marginTop: '1rem', overflow: 'hidden' }} >
                <Text size="sm" c="dimmed" mb="sm" span><IconServerSpark />Powered by this exact stack.</Text>

                <Marquee pauseOnHover repeat={2} duration={10000} gap="xl" fadeEdges={false} maw={600}>
                  {STACKS.map((stack, index) => (
                    <a 
                      key={index} 
                      href={stack.href} 
                      style={{ 
                        width: 'max-content',    /* fix the stutter in marquee */
                      }}
                    >
                      <Group gap="xs" wrap="nowrap">
                        <img src={stack.icon} alt={stack.label} width="24" height="24" />
                        <Text size="sm" fw={600}>
                          {stack.label}
                        </Text>
                      </Group>
                    </a>
              
                  ))}
                </Marquee>
              </Box>

              {/* CTA buttons */}
              <Group>
                <Button 
                  variant="primary"
                  size="lg" 
                  radius="md"
                  leftSection={<IconBrandUpwork />}
                  component="a"
                  href="https://www.upwork.com/freelancers/~0100c0f1552b67ba88" 
                >
                  Upwork
                </Button>

                <Button 
                  variant='secondary'
                  size="lg" 
                  radius="md"
                  leftSection={<IconBrandGithub />}  
                  component="a"
                  href="https://github.com/runvicm"
                >
                  Repository
                </Button>
              </Group>
            </Stack>
          </Grid.Col>


          <Grid.Col span={{ base: 12, md: 6, lg: 5 }} >
            <Image
              src="./hero-illu.svg"
              // height={160}
              alt="Project preview"
              // style={{ border: '1px solid #e9ecef' }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  )
}
