import { Anchor, Burger, Group, Image, Text } from "@mantine/core";
import { SITE_CONFIG } from "~/constant";
import classes from "~/themes/Header.module.css"
import ThemeToggle from "./ui/ThemeToggle";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export default function Header({ opened, toggle }: HeaderProps) {
  return (
    <Group align="center" justify="space-between" className={classes.header}>
      <Group>
        <Image src="/pr-logo.svg" alt="Logo" w={40} h={40} />
        <Text className={classes.prompt}>
          <Text span className={classes.user}>{SITE_CONFIG.title}</Text>:<Text span className={classes.path}>~</Text>$ tail -f log<Text span className={classes.cursor}></Text>
        </Text>
      </Group>

      <Group gap="md">

        <Group gap="lg" visibleFrom="md" className={classes.menulink}>
          <Anchor href="/" unstyled>Home</Anchor>
          <Anchor href="/about" unstyled>About</Anchor>
          <Anchor href="/contact" unstyled>Contact</Anchor>
        </Group>

        {/* Toggle to 'Light' or 'Dark' */}
        <ThemeToggle />
        {/* Mobile Burger */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
      </Group>
    </Group>
  )
}
