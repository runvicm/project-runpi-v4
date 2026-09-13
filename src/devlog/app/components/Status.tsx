import { Group, Paper, Text } from '@mantine/core';
import { IconBolt } from '@tabler/icons-react';
import { Await, useLoaderData } from 'react-router';
import classes from '~/themes/Status.module.css';

export default function Status() {
  const { message } = useLoaderData<{message:string}>();

  return (
    <Paper className={classes.wrapper}>
      <Group className={classes.card}>
        <IconBolt size={17} className={classes.icon} />
        <Text span>Today's Status</Text>
      </Group>
      <Await
        resolve={message}
        errorElement={
          <Text className={classes.text}>API DOWN</Text>
        }
        children={(message) => (
          <Text className={classes.text}>{message}</Text>
        )}
      />
    </Paper>
  );
}