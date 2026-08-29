import { ActionIcon, Box, Burger, Button, Container, Drawer, Group, NavLink, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";
import { NAV_LINKS, SITE_CONFIG } from "~/constants";
import SearchBar from "./SearchBar";


export default function NavBar() {

  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();

  
  return (
    <Container size={1280} h="100%">
      <Group justify="space-between" align="center" h="100%">
        
        <Box fw={700} fz="lg">{SITE_CONFIG.title}</Box>
        
        <Group gap="xs" visibleFrom="sm">
          {NAV_LINKS.map((link, index) => {
            const path = `${link.href.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Button
                component={Link}    // use react router hooks
                key={index}
                to={path}
                variant={isActive ? 'activeNav' : 'defaultNav'}
              >
                {link.label}
              </Button>
            );
          })}
        </Group>
        
        <Group>
          <Box visibleFrom="sm">
            <SearchBar />
          </Box>

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
          {NAV_LINKS.map((link, index) => (
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
