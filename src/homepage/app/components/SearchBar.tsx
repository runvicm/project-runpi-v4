import { ActionIcon, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

export default function SearchBar() {
  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search"
      // rightSectionWidth={}
      rightSection={
        <ActionIcon 
          size={32} 
          radius="xl" 
          color="teal" 
          variant="filled"
          aria-label="Submit search"
        >
          <IconSearch size={18} stroke={1.5} />
        </ActionIcon>
      }
    />
  )
}
