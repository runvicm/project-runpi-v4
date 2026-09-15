import { Anchor, Badge, Box, Card, Container, Group, Text, Title, Typography } from "@mantine/core";
import { IconArrowLeft, IconCalendar, IconEye, IconMessageCircle } from "@tabler/icons-react";
import { env } from "cloudflare:workers";
import { Suspense } from "react";
import { Await, Link, useLoaderData, useParams, type LoaderFunctionArgs } from "react-router";
import classes from "~/themes/Show.module.css"



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

  const devlog = fetch(`${API_URL}/api/devlog/entries/${slug}`)
    .then((res) => res.json());

  return { devlog };
}


export default function Show() {
    const { devlog } = useLoaderData<{devlog: DevlogViewProps}>();
  
  return (

    <Suspense>
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
              {/* {devlog.tags.map((tag) => (
                <Badge key={tag} variant="outline" color={tagColor[tag] ?? 'gray'} className={classes.mono}>
                  {tag}
                </Badge>
              ))} */}
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


            {/* TO DO: Will add this later */}
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
