import { Card, Container, Group, SimpleGrid, Skeleton } from '@mantine/core';
import classes from "~/themes/PostCard.module.css"

export default function DevlogGridSkeleton() {
  return (
    <Container size={1180} className={classes.gridwrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" verticalSpacing="lg">
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
}


function PostCardSkeleton () {
  return (
    <Card className={classes.card} radius="md" withBorder padding="lg">
      <Group gap="md" mb="sm">
        <Skeleton height={12} width={70} radius="sm" />
        <Skeleton height={20} width={50} radius="sm" />
        <Skeleton height={20} width={60} radius="sm" />
      </Group>

      <Skeleton height={21} width="90%" radius="sm" mb={8} />
      <Skeleton height={21} width="60%" radius="sm" mb={14} />

      <Skeleton height={14} radius="sm" mb={6} />
      <Skeleton height={14} width="80%" radius="sm" mb={20} />

      <Group justify="space-between" mt="auto">
        <Skeleton height={14} width={110} radius="sm" />
        <Skeleton height={14} width={70} radius="sm" />
      </Group>
    </Card>
  )
}