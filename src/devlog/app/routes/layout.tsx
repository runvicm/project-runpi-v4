import { AppShell, Burger, Group, Image, Paper, Text } from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import { env } from "cloudflare:workers";
import { Outlet } from "react-router";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Status from "~/components/Status";




export function loader() {
  const API_URL = env.API_URL;

  const message = fetch(`${API_URL}/api/devlog/status`)
  .then((res) => res.json()); // no await! use append

  return { message };
}



export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const { ref, height } = useElementSize();

  return (
    <AppShell
      header={{ height: height }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <div ref={ref}>
          <Header opened={opened} toggle={toggle} />
          <Paper visibleFrom="md">
            <Status />
          </Paper>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
     
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  )
}
