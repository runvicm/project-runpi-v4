import { Box, Button, Container, Group, Marquee, Paper, Stack, Text, Title } from '@mantine/core'
import { heroStyles } from '~/themes'
import { IconBrandGithub, IconBrandUpwork } from '@tabler/icons-react';


const STACKS = [
  {
    label:  "Laravel",
    icon:   "https://cdn.simpleicons.org/laravel/FF2D20",
    href:   "#",
  },
  {
    label:  "React Router 8",
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
    label:  "Cloudflare Tunnel, Worker & Pages",
    icon:   "https://cdn.simpleicons.org/cloudflare/F38020",
    href:   "#",
  },
  {
    label:  "Nginx Proxy",
    icon:   "https://cdn.simpleicons.org/nginx/009639",
    href:   "#",
  },
]


export default function Hero() {
  return (
    <Paper py={100} variant='hero'>
      <Container size={1280} >
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
            <Text size="sm" fw={500} c="dimmed">
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
            Building real, working web apps with React Router (remix) and Laravel, tailored to what you actually need. Hit me up.
          </Text>

          <Box w={{ base: '100%', xs: '100%', md: '60%' }} style={{ marginTop: '1rem', overflow: 'hidden' }} >
            <Text size="sm" c="dimmed" mb="sm">Proof of concept? This site runs on it.</Text>
            <Marquee pauseOnHover duration={13000} gap="xl" fadeEdges={false} repeat={10}>
              {STACKS.map((stack, index) => (
                <a key={index} href={stack.href} style={{ textDecoration: 'none' }}>
                  <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <img src={stack.icon} alt="Laravel" width="24" height="24" />
                    <Text size="sm" fw={600}>{stack.label}</Text>
                  </Group>
                </a>
              ))}
            </Marquee>
          </Box>


          {/* Action buttons */}
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
      </Container>
    </Paper>
  )
}
