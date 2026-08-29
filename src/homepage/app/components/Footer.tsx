import { ActionIcon, Anchor, Button, Container, Divider, Grid, Group, Paper, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandMedium, IconBrandUpwork } from "@tabler/icons-react";
import { NavLink } from "react-router";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "~/constants";

export default function Footer() {
  return (
    <Container size={1280} >
      <Grid gap={50}>
          
          {/* Column 1: Brand & Bio (Spans 3/12 on Desktop) */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={3} c="teal.5" mb="md">
              {SITE_CONFIG.title}
            </Title>
            <Text size="sm" c="gray.5" lh={1.6}>
              {SITE_CONFIG.description}
            </Text>
          </Grid.Col>

          {/* Column 2: Quick Links (Spans 2/12 on Desktop) */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Title order={4} c="teal.5" mb="md" fw={600}>
              Quick Links
            </Title>
            <Stack gap="sm">
              {NAV_LINKS.map((link, index) => (
                <Anchor key={index} component={NavLink} to={link.href} c="gray.4" size="sm" underline="hover">{link.label}</Anchor>
              ))}
            </Stack>
          </Grid.Col>

          {/* Column 3: Redesigned Socials (Spans 3/12 on Desktop) */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Title order={4} c="teal.5" mb="md" fw={600}>
              Find Me
            </Title>
            <Group gap="sm">
              {/* Upgraded from text bubbles to interactive ActionIcons */}
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <ActionIcon key={social.id} component="a" href="#" size="lg" radius="xl" color="teal" variant="light">
                    <Icon size={20} stroke={1.5} />
                  </ActionIcon>
                )
              })}
            </Group>
          </Grid.Col>

          {/* Column 4: Contact Form (Spans 4/12 on Desktop for extra breathing room) */}
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Title order={4} c="teal.5" mb="md" fw={600}>
              Get in Touch
            </Title>
            <form onSubmit={(e) => e.preventDefault()}>
              <Stack gap="md">
                <TextInput 
                  placeholder="Your name" 
                  radius="md" 
                  styles={{ input: { backgroundColor: '#1e293b', border: 'none', color: 'white' } }}
                />
                <TextInput 
                  placeholder="Your email" 
                  radius="md" 
                  styles={{ input: { backgroundColor: '#1e293b', border: 'none', color: 'white' } }}
                />
                <Textarea 
                  placeholder="Your message..." 
                  radius="md" 
                  minRows={3}
                  styles={{ input: { backgroundColor: '#1e293b', border: 'none', color: 'white' } }}
                />
                <Button color="teal.6" radius="md" fullWidth>
                  Send Message
                </Button>
              </Stack>
            </form>
          </Grid.Col>
          
        </Grid>

        {/* Bottom Copyright Bar */}
        <Divider mt={60} mb={30} color="gray.8" />
        
        <Stack align="center" gap={4}>
          <Text c="gray.5" size="sm">
            {SITE_CONFIG.copyright}
          </Text>
          <Text c="gray.6" size="xs">
            Frontend on Cloudflare Pages · Backend self-hosted on Raspberry Pi 5
          </Text>
        </Stack>
    </Container>
  )
}
