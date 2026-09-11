import { Group, Paper, Text, Tree, type RenderTreeNodePayload, type TreeNodeData } from '@mantine/core';
import { IconFile, IconFolder, IconFolderOpen } from '@tabler/icons-react';
import { Link } from 'react-router';
import classes from "~/themes/Navbar.module.css"

const treeData: TreeNodeData[] = [
  {
    value: '2026',
    label: '2026',
    children: [
      {
        value: '2026/September',
        label: 'September',
        children: [
          { value: 'e1', label: 'WASM boundary.md' },
        ],
      },
      {
        value: '2026/August',
        label: 'August',
        children: [
          { value: 'e2', label: 'Queue refactor.md' },
          { value: 'e3', label: 'Flaky CI test.md' },
        ],
      },
      {
        value: '2026/July',
        label: 'July',
        children: [
          { value: 'e4', label: 'DB migration.md' },
          { value: 'e5', label: 'Rate limits.md' },
        ],
      },
    ],
  },
];





export default function Navbar() {
  return (
    <Paper className={classes.shell}>
      <Text className={classes.treeroot}>~/devlog</Text>
      <Tree
        data={treeData}
        // withLines
        renderNode={(payload) => <Leaf {...payload} />}
        className={classes.tree}
      />

    </Paper>


  )
}




function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <IconFolderOpen size={14} style={{ opacity: 0.75 }} />
        ) : (
          <IconFolder size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <IconFile size={14} style={{ opacity: 0.75 }} />
      )}

      {hasChildren ? (
        // Parent folders: standard text label (no Link)
        <span>{node.label}</span>
      ) : (
        // Last child nodes: wrapped in Link
        <Link 
          to={`/your-path/${node.value}`} 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <span>{node.label}</span>
        </Link>
      )}
    </Group>

  );
}
