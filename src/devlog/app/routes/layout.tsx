import { AppShell, Paper, type TreeNodeData } from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import { env } from "cloudflare:workers";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Status from "~/components/Status";
import { NavCloseProvider } from "~/context/NavCloseContext";

export interface DevlogTreeResponse {
  count: number;
  devlogTree: TreeNodeData[];
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
  const devlogTree = devlog.then((data) => data.devlogTree);
  const count = devlog.then((data) => data.count);



  // Retunf to be use my useLoaderData()
  return { message, devlogTree, count };
}


export function shouldRevalidate() { 
  return false;
}


export default function Layout() {
  const [opened, { toggle, close }] = useDisclosure();
  const { ref: headerRef, height: headerHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  return (
    <AppShell
      header={{ height: headerHeight }}
      footer={{ height: footerHeight }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <div ref={headerRef}>
          <Header opened={opened} toggle={toggle} />
          <Paper visibleFrom="md">
            <Status />
          </Paper>
        </div>
      </AppShell.Header>

      
      <NavCloseProvider value={close}>
        <AppShell.Navbar p="md">
          <Navbar />
        </AppShell.Navbar>
      </NavCloseProvider>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
     
      <AppShell.Footer>
        <div ref={footerRef}>
          <Footer />
        </div>
      </AppShell.Footer>
    </AppShell>
  )
}
