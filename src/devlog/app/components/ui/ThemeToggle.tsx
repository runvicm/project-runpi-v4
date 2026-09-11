import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";


export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="default"
      size="lg"
    >
      {colorScheme === 'light' ?
        <IconSun style={{ width: '70%', height: '70%' }} /> :
        <IconMoon style={{ width: '70%', height: '70%' }} />
      }  
    </ActionIcon>
  )
}
