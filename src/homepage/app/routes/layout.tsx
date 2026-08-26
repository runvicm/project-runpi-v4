import { AppShell, Box, Container, Group } from '@mantine/core'
import { Outlet } from 'react-router'
import NavBar from '~/components/NavBar'


export default function Layout() {
  return (
    <AppShell
      header={{ height: 60 }}
    >
      <AppShell.Header
        style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0)', 
        backdropFilter: 'blur(5px)',             
        borderBottom: '3px solid rgba(229, 231, 235, 1)',                     
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}
      >
        <NavBar />
      </AppShell.Header>

      <AppShell.Main>
        <Box style={{ minHeight: 'calc(100vh - 80px)' }}>
          <Outlet />
        </Box>

        <Box component="footer" bg="dark.8" py={80} px="xl">
          <h2>Let's work together.</h2>
          {/* Add all your massive grid links here */}
        </Box>
      </AppShell.Main>
      
    </AppShell>
  )
}
