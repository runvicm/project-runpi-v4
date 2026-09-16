import { Anchor, Badge, Container, Group, Text, Title, Typography } from "@mantine/core";
import { IconArrowLeft, IconCalendar, IconEye, IconMessageCircle } from "@tabler/icons-react";
import { env } from "cloudflare:workers";
import { Suspense } from "react";
import { Await, Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import DevlogViewSkeleton from "~/components/ui/DevlogViewSkeleton";
import classes from "~/themes/Show.module.css"
import { getTagColor } from "~/utils/getTagColor";
import { createMeta } from "~/utils/seo";
import type { Route } from "./+types/show";


export interface DevlogViewProps {
  title: string;
  slug: string;
  overview: string;
  content: string;
  view_count: number;
  published_at: string;
  tags: {
    slug: string;
  }[];
  url: string;
}


export function loader({ params }: LoaderFunctionArgs) {
  const API_URL = env.API_URL;
  const { slug } = params;

  return fetch(`${API_URL}/api/devlog/entries/${slug}`)
    .then((res) => res.json() as Promise<DevlogViewProps>)
    .then((devlog) => ({ devlog }));
}


export function meta({ loaderData }: Route.MetaArgs) {
 const { devlog } = loaderData;

  return createMeta({
    title: devlog.title,
    description: devlog.overview,
    type: "article",
    url: `https://devlog.projectrunpi.com/view/${devlog.slug}`,
    publishedAt: devlog.published_at, // reuse the same help
  });
}


export default function Show() {
  const { devlog } = useLoaderData<{devlog: DevlogViewProps}>();
  
  return (
    <Suspense fallback={<DevlogViewSkeleton />}>
      <Await
        resolve={devlog}
      >
        {(devlog) => (

          <Container size={680} className={classes.wrapper}>
            <Anchor component={Link} to="/" className={classes.backlink}>
              <IconArrowLeft size={12} /> all entries
            </Anchor>

            <Group gap="md" mb="md">
              <Group gap={5}>
                <IconCalendar size={12.5} color="var(--muted-dim)" />
                <Text size="xs" c="dimmed" className={classes.mono}>{devlog.published_at}</Text>
              </Group>
              {devlog.tags.map((tag) => (
                <Badge key={tag.slug} variant="outline" color={getTagColor(tag.slug)} className={classes.mono}>
                  {tag.slug}
                </Badge>
              ))}
            </Group>

            <Title order={1} className={classes.title}>{devlog.title}</Title>

            <Typography className={classes.body}>
              <div dangerouslySetInnerHTML={{ __html: devlog.content }} />
            </Typography>


            <Group gap="lg" className={classes.postStats}>
              <Group gap={5}>
                <IconEye size={13} color="var(--muted-dim)" />
                <Text size="xs" className={`${classes.mono} ${classes.dimmed}`}>{devlog.view_count} views</Text>
              </Group>
              <Group gap={5}>
                <IconMessageCircle size={12} color="var(--muted-dim)" />
                <Text size="xs" className={`${classes.mono} ${classes.dimmed}`}>0 notes</Text>
              </Group>
            </Group>


            {/* TODO: Will add this later */}
            {/* <Box className={classes.comments}>
              <Text fw={600} mb="sm">
                Comments <Text span className={classes.dimmed} fw={400}>(0)</Text>
              </Text>
              <Box className={classes.commentsEmpty}>
                No comments yet — be the first to leave one.
              </Box>
            </Box> */}


          </Container>
        )}
      </Await>
    </Suspense>
  )
}
