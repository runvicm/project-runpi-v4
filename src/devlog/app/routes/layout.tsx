import { AppShell, Paper, type TreeNodeData } from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import { env } from "cloudflare:workers";
import { Outlet } from "react-router";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Status from "~/components/Status";


export interface DevlogTreeResponse {
  count: number;
  tree: TreeNodeData[];
}


export function loader() {
  const API_URL = env.API_URL;

  // Today Status
  const message = fetch(`${API_URL}/api/devlog/status`)
    .then((res) => res.json());

  // Side NavBar
const devlog = fetch(`${API_URL}/api/devlog/tree`)
  .then((res) => {
    console.log("TREE FETCH FIRED", new Date().toISOString());
    return res.json() as Promise<DevlogTreeResponse>;
  });

  // Filter the data
  const tree = devlog.then((data) => data.tree);
  const count = devlog.then((data) => data.count);

  // List fo the devlog
  const entries = fetch(`${API_URL}/api/devlog/entries`)
    .then((res) => res.json());

  // Retunf to be use my useLoaderData()
  return { message, tree, count, entries };
}



export function shouldRevalidate() { 
  return false;
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
