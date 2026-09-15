import { Box, Container, Group, Skeleton } from '@mantine/core'
import classes from "~/themes/Show.module.css"

export default function DevlogViewSkeleton() {
  return (
    <Container size={680} className={classes.wrapper}>
      <Skeleton height={12} width={90} radius="sm" mb={28} />

      <Group gap="md" mb="md">
        <Skeleton height={12} width={70} radius="sm" />
        <Skeleton height={20} width={50} radius="sm" />
        <Skeleton height={20} width={60} radius="sm" />
      </Group>

      <Skeleton height={27} width="85%" radius="sm" mb={16} />

      <Skeleton height={15} radius="sm" mb={10} />
      <Skeleton height={15} radius="sm" mb={10} />
      <Skeleton height={15} width="70%" radius="sm" mb={24} />

      <Skeleton height={15} radius="sm" mb={10} />
      <Skeleton height={15} width="90%" radius="sm" mb={10} />
      <Skeleton height={15} width="60%" radius="sm" mb={30} />

      <Group gap="lg" className={classes.postStats}>
        <Skeleton height={12} width={60} radius="sm" />
        <Skeleton height={12} width={50} radius="sm" />
      </Group>

      <Box className={classes.comments}>
        <Skeleton height={18} width={110} radius="sm" mb="sm" />
        <Skeleton height={70} radius="md" />
      </Box>
    </Container>
  )
}
