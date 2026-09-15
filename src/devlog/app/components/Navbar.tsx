import { Group, Paper, Text, Tooltip, Tree, type RenderTreeNodePayload } from '@mantine/core';
import { IconFile, IconFolder, IconFolderOpen, IconHome } from '@tabler/icons-react';
import { Suspense } from 'react';
import { Await, NavLink, useLoaderData } from 'react-router';
import type { DevlogTreeResponse } from '~/routes/layout';
import classes from "~/themes/Navbar.module.css"


export default function Navbar() {
  const { tree, count } = useLoaderData<DevlogTreeResponse>();
  
  return (
    <Paper className={classes.shell}>
      <Text className={classes.treeroot}>
        <Suspense fallback={<Text span>Loading...</Text>}>
          <Await
            resolve={count}
            errorElement={<Text span c="red">Failed to load</Text>}
          >
            {(resolvedCount) => (
              <>
              ~/devlog <span className={classes.count}>· {resolvedCount} entries</span>
              </>
            )}
          </Await>
        </Suspense>
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

      <Suspense fallback={<Text>LOADING...</Text>}>
        <Await
          resolve={tree}
          errorElement={<Text className={classes.text}>Failed to load</Text>}
          children={(tree) => <Tree
            data={tree ?? []} 
            renderNode={(payload) => <Leaf {...payload} />}
            classNames={{ root: classes.root, node: classes.node, subtree: classes.subtree }}
          />}
        />
      </Suspense>
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
