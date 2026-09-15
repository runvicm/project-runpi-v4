import { Anchor, Group, Text } from '@mantine/core'
import { IconCloud, IconCopyright, IconServer } from '@tabler/icons-react'
import classes from "~/themes/Footer.module.css"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Group justify="space-between" className={classes.footer}>
      <Group gap={4} wrap="nowrap">
        <IconCopyright size={13} />
        <Text size="xs" className={classes.mono}>
          {year}{' '}
          <Anchor
            href="https://projectrunpi.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Project RunPi
          </Anchor>
        </Text>
      </Group>

      <Group gap="xs" className={classes.mono}>
        <Group gap={5}>
          <IconCloud size={13} className={classes.icon} />
          <Text size="xs" className={classes.dimmed}>Cloudflare Workers</Text>
        </Group>
        <Group gap={5}>
          <IconServer size={13} className={classes.icon} />
          <Text size="xs" className={classes.dimmed}>API on Raspberry Pi 5</Text>
        </Group>
      </Group>
    </Group>
  )
}
