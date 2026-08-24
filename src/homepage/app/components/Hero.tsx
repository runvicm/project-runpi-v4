import { Box, Button, Container, Group, Marquee, Stack, Text, Title } from '@mantine/core'
import { heroStyles } from '~/themes'

export default function Hero() {
  return (
    <Box py={100} className={heroStyles.section}>
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
          <Text size="xl" c="dimmed" maw={600} style={{ lineHeight: 1.6 }}>
            Building real, working web apps with React Router (remix) and Laravel, tailored to what you actually need. Hit me up.
          </Text>

        <Box style={{ width: '50%', marginTop: '1rem', overflow: 'hidden' }}>
          <Text size="sm" c="dimmed" mb="sm">Proof of concept? This site runs on it.</Text>
          <Marquee pauseOnHover duration={13000} gap="xl" fadeEdges={false} repeat={10}>
            <a href="/tech-stacks" style={{ textDecoration: 'none' }}>
              <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" width="24" height="24" />
                <Text size="sm" fw={600} c="dark">Laravel</Text>
              </Group>
            </a>
            <a href="/tech-stacks" style={{ textDecoration: 'none' }}>
              <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src="https://cdn.simpleicons.org/reactrouter/CA4245" alt="React Router" width="24" height="24" />
                <Text size="sm" fw={600} c="dark">React Router 7</Text>
              </Group>
            </a>
            <a href="/tech-stacks" style={{ textDecoration: 'none' }}>
              <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" width="24" height="24" />
                <Text size="sm" fw={600} c="dark">TypeScript</Text>
              </Group>
            </a>
            <a href="/tech-stacks" style={{ textDecoration: 'none' }}>
              <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src="https://cdn.simpleicons.org/mantine/339AF0" alt="Mantine" width="24" height="24" />
                <Text size="sm" fw={600} c="dark">Mantine UI</Text>
              </Group>
            </a>
            <a href="/tech-stacks" style={{ textDecoration: 'none' }}>
              <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src="https://cdn.simpleicons.org/cloudflare/F38020" alt="Cloudflare" width="24" height="24" />
                <Text size="sm" fw={600} c="dark">Cloudflare Workers</Text>
              </Group>
            </a>
            <a href="/tech-stacks" style={{ textDecoration: 'none' }}>
              <Group gap="xs" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <img src="https://cdn.simpleicons.org/nginx/009639" alt="Nginx" width="24" height="24" />
                <Text size="sm" fw={600} >Nginx & Tunnel</Text>
              </Group>
            </a>
          </Marquee>
        </Box>


          {/* Action buttons */}
          <Group gap="md" mt="sm">
            <Button 
              size="lg" 
              radius="md"
              variant='filled' 
            >
              Upwork
            </Button>
            
            <Button 
              size="lg" 
              radius="md" 
            >
              Repository
            </Button>
          </Group>

        </Stack>
      </Container>
    </Box>
  )
}
