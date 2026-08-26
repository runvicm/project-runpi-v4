import { Box, Burger, Button, Container, Drawer, Group, NavLink, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router";


const LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Tech Stack',
    href: 'tech-stack',
  },
  {
    label: 'Services',
    href: 'services',
  },
  {
    label: 'About',
    href: 'about',
  }
]


export default function NavBar() {

  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();

  console.log(location)
  
  return (
    <Container size={1280} h="100%">
      <Group justify="space-between" align="center" h="100%">
        
        <Box fw={700} fz="lg">Project RunPi</Box>
        
        <Group gap="xs" visibleFrom="sm">
          {LINKS.map((link, index) => {
            const path = `${link.href.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Button
                component={Link}
                key={index}
                to={path}
                variant={isActive ? 'activeNav' : 'defaultNav'}
                color="#1f2937"
              >
                {link.label}
              </Button>
            );
          })}
        </Group>
        
        <Group>
          <Box visibleFrom="sm">Search</Box>

          {/* Burger Menu for mobile */}
          <Burger 
            opened={opened} 
            onClick={toggle} 
            aria-label="Toggle navigation" 
            hiddenFrom="sm" 
          />
        </Group>
        
      </Group>


      {/* Drawer Menu for Mobile */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        position="left"
        size="xs"
        padding="md"
      >
        <Stack gap="xs">
          {LINKS.map((link, index) => (
            <NavLink
              component={Link}
              key={index}
              label={link.label}
              to={link.href}
              onClick={close} />
          ))}
        </Stack>
      </Drawer>

    </Container>
  )
}
