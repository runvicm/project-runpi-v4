import { Box, Container, Group } from "@mantine/core";

export default function NavBar() {
  return (
    <Container size={1280} h="100%">
      <Group justify="space-between" align="center" h="100%">
        
        <Box fw={700} fz="lg">Project RunPi</Box>
        
        <Group gap="xl">
          <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
          <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
        </Group>
        
        <Box>Search</Box>
        
      </Group>
    </Container>
  )
}
