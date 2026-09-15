import { Center, Container, Group, Pagination, SimpleGrid, Text } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { env } from "cloudflare:workers";
import { Suspense } from "react";
import { Await, useLoaderData, useSearchParams, type LoaderFunctionArgs } from "react-router";
import DevlogCard, { type DevLogProps } from "~/components/ui/DevlogCard";
import DevlogGridSkeleton from "~/components/ui/DevlogGridSkeleton";
import DevlogCardSkeleton from "~/components/ui/DevlogGridSkeleton";
import classes from "~/themes/PostCard.module.css"





interface DevlogDataProps {
  devlogs: DevLogProps[];
  currentPage: number;
  totalPages: number;
}


export function loader({request}: LoaderFunctionArgs) {
  const API_URL = env.API_URL;
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;


  // List of devlog post
 const devlogData = fetch(`${API_URL}/api/devlog/entries?page=${page}`)
  .then((res) => res.json() as Promise<{ data: DevLogProps[]; current_page: number; last_page: number; }>)
  .then((result): DevlogDataProps => {
    return {
      devlogs: result.data,
      currentPage: result.current_page,
      totalPages: result.last_page,
    };
  });
  
  return { devlogData }
}



export default function Index() {
  const { devlogData } = useLoaderData<{ devlogData: DevlogDataProps }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };


  return (
    <Suspense fallback={<DevlogGridSkeleton />}>
      <Await resolve={devlogData}>
        {(devlogData) => (
          <Container size={1180} className={classes.gridwrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" verticalSpacing="lg">
              {devlogData.devlogs.map((devlog) => (
                <DevlogCard key={devlog.slug} devlog={devlog} />
              ))}
            </SimpleGrid>

            <Pagination.Root total={devlogData.totalPages} value={devlogData.currentPage} onChange={handlePageChange}>
              <Group justify="space-between" className={classes.pager}>
                <Pagination.Previous
                  className={classes.pagerBtn}
                  icon={() => <><IconArrowLeft size={12} /> prev</>}
                />
                <Text size="xs" c="dimmed" className={classes.mono}>
                  page {devlogData.currentPage} of {devlogData.totalPages}
                </Text>
                <Pagination.Next
                  className={classes.pagerBtn}
                  icon={() => <>next <IconArrowRight size={12} /></>}
                />
              </Group>
            </Pagination.Root>
          </Container>
        )}
      </Await>
    </Suspense>
  );
}