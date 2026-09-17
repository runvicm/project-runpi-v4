import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "~/themes/ThemeToogle.module.css";

export default function ThemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()} variant="default" size="md">
      <IconSun className={classes.lightIcon} style={{ width: '70%', height: '70%' }} />
      <IconMoon className={classes.darkIcon} style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
}