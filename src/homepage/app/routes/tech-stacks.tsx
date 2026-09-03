import { Box, Text, Group, Badge, Anchor, Divider, Stack, Title, ThemeIcon, Paper } from '@mantine/core';
import { 
  IconExternalLink,
} from '@tabler/icons-react';
import { OG_DESCRIPTION, SITE_CONFIG, TECH_DATA } from '~/constants';
import { createMeta } from '~/utils/seo';



export function meta() {
  return createMeta({
    title: `${SITE_CONFIG.title} - Homepage`,
    description: `${OG_DESCRIPTION}`,
    type: "website"
  });
}


export default function TechStackRedesign() {
  return (
    <Paper variant='hero'>

  
    <Box maw={800} mx="auto" py={60} px="lg">
      {TECH_DATA.map((section, sectionIndex) => (
        <Box key={section.category} mb={60}>
          <Title order={2} size="h3" c="teal.7" mb="xl" fw={700}>
            {section.category}
          </Title>


          <Paper bg="white" p="xl" radius="lg" shadow="sm">

       
          <Stack gap={0}>
            {section.items.map((item, index) => {
              // 1. Assign the Tabler icon reference to a capitalized variable
              const Icon = item.icon;

              return (
                <Box key={item.id}>
                  <Group wrap="nowrap" align="flex-start" py="lg">
                    
                    {/* 2. Wrap the icon in a sleek ThemeIcon using the item's brand color */}
                    <ThemeIcon 
                      size={48} 
                      radius="md" 
                      variant="light" 
                      color={item.color}
                    >
                      <Icon size={28} stroke={1.5} />
                    </ThemeIcon>

                    <Box style={{ flex: 1 }}>
                      <Group gap="sm" mb={4}>
                        <Text fw={600} size="lg" c="dark.9">
                          {item.name}
                        </Text>
                        <Badge 
                          color={item.status === 'Active' ? 'teal' : 'gray'} 
                          variant={item.status === 'Active' ? 'light' : 'outline'}
                          size="sm" 
                          radius="sm"
                        >
                          {item.status}
                        </Badge>
                      </Group>
                      <Text size="sm" c="gray.6" lh={1.5} maw={500}>
                        {item.description}
                      </Text>
                    </Box>

                    <Anchor 
                      href={item.docs} 
                      target="_blank" 
                      c="gray.5" 
                      size="sm" 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      Docs <IconExternalLink size={14} />
                    </Anchor>
                  </Group>

                  {index < section.items.length - 1 && (
                    <Divider color="gray.2" />
                  )}
                </Box>
              );
            })}
          </Stack>
             </Paper>
        </Box>
      ))}
    </Box>
      </Paper>
  );
}