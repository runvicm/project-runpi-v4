import { Badge, Card, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconCalendar, IconEye, IconMessageCircle, IconTag } from "@tabler/icons-react";
import { Link } from "react-router";
import classes from "~/themes/PostCard.module.css"
import { getTagColor } from "~/utils/getTagColor";


export interface DevLogProps {
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


export default function DevlogCard( { devlog }: { devlog: DevLogProps } ) {
  return (
   <Card
      component={Link}
      to={`/view/${devlog.slug}`}
      className={classes.card}
      radius="md"
      withBorder
      padding="lg"
    >
      <Group gap="md" mb="sm">
        <Group gap={5}>
          <IconCalendar size={12.5} color="var(--muted-dim)" />
          <Text size="sm" c="dimmed" className={classes.mono}>{devlog.published_at}</Text>
        </Group>
        {devlog.tags.map((tag) => (
          <Badge size="xs" key={tag.slug} variant="outline" color={getTagColor(tag.slug)} className={classes.mono}>
            {tag.slug}
          </Badge>
        ))}
      </Group>

      <Title order={2} className={classes.title}>{devlog.title}</Title>
      <Text c="dimmed" mt="xs" mb="md">{devlog.overview}</Text>

      <Group justify="space-between" mt="auto">
        <Group gap={4} c="var(--accent)" className={classes.mono}>
          <Text size="xs" c="var(--accent)" span>continue reading</Text>
          <IconArrowRight size={12} />
        </Group>
        <Group gap="md" c="dimmed" className={classes.mono}>
          <Group gap={5}><IconEye size={12} /><Text size="xs">{devlog.view_count}</Text></Group>
          {/* TODO: WILL ADD THIS LATER */}
          {/* <Group gap={5}><IconMessageCircle size={12} /><Text size="xs">0</Text></Group> */}
        </Group>
      </Group>
    </Card>
  );
}


