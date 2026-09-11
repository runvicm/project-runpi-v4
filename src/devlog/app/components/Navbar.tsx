import { Group, Paper, Text, Tooltip, Tree, type RenderTreeNodePayload, type TreeNodeData } from '@mantine/core';
import { IconFile, IconFolder, IconFolderOpen, IconHome } from '@tabler/icons-react';
import { Link, NavLink, useLocation } from 'react-router';
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
          { value: 'slug1', label: 'WASM boundary 2asdasd.md' },
        ],
      },
      {
        value: '2026/August',
        label: 'August',
        children: [
          { value: 'slug2', label: 'Queue refactor.md' },
          { value: 'slug3', label: 'Flaky CI test.md' },
        ],
      },
      {
        value: '2026/July',
        label: 'July',
        children: [
          { value: 'slug4', label: 'DB migration.md' },
          { value: 'slug5', label: 'Rate limits.md' },
        ],
      },
    ],
  },
];





export default function Navbar() {

  
  return (
   <Paper className={classes.shell}>
      <Text className={classes.treeroot}>
        ~/devlog <span className={classes.count}>· {treeData.length} entries</span>
      </Text>

      <NavLink
        to="/"
        end
        className={({ isActive }) => `${classes.homeFile} ${isActive ? classes.active : ''}`}
      >
        <IconHome size={14} className={classes.icon} />
        <span className={classes.homeLabel}>index<span className={classes.ext}>.md</span></span>
        <span className={classes.hint}>(all posts)</span>
      </NavLink>

      <Tree
        data={treeData}
        renderNode={(payload) => <Leaf {...payload} />}
        classNames={{ root: classes.root, node: classes.node, subtree: classes.subtree }}
      />
    </Paper>


  )
}




function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {

  return (
     <Group gap={8} wrap="nowrap" {...elementProps} className={classes.node}>
      {hasChildren ? (
        expanded
          ? <IconFolderOpen size={14} className={classes.icon} />
          : <IconFolder size={14} className={classes.icon} />
      ) : (
        <IconFile size={14} className={classes.icon} />
      )}

      {hasChildren ? (
        <span className={classes.label}>{node.label}</span>
      ) : (
        
        <NavLink
            to={`/view/${node.value}`}
            className={({ isActive }) => `${classes.fileLink} ${isActive ? classes.active : ''}`}
            >
        <Tooltip
         label={node.label}
         position="bottom"
         offset={5}
         classNames={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
       >
            <span className={classes.filename}>
              {typeof node.label === 'string' ? node.label.replace(/\.md$/, '') : node.label}
            </span>
        </Tooltip>
            <span className={classes.ext}>.md</span>
          </NavLink>
      )}
    </Group>

  );
}
