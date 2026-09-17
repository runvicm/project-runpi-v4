import { getTreeExpandedState, Group, Paper, Text, Tooltip, Tree, useTree, type RenderTreeNodePayload, type TreeNodeData } from '@mantine/core';
import { IconFile, IconFolder, IconFolderOpen, IconHome } from '@tabler/icons-react';
import { Suspense } from 'react';
import { Await, NavLink, useLoaderData } from 'react-router';
import { useNavClose } from '~/context/NavCloseContext';
import type { DevlogTreeResponse } from '~/routes/layout';
import classes from "~/themes/Navbar.module.css"


export default function Navbar() {
  const { devlogTree, count } = useLoaderData<DevlogTreeResponse>();
  
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
          resolve={devlogTree}
          errorElement={<Text className={classes.text}>Failed to load</Text>}
        >
          {(resolved) => <DevlogTree data={resolved ?? []} />}
        </Await>
      </Suspense>
    </Paper>
  )
}


function DevlogTree({ data }: { data: TreeNodeData[] }) {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, getLatestExpandedPath(data)),
  });

  return (
    <Tree
      data={data}
      tree={tree}
      renderNode={(payload) => <DevlogLeaf {...payload} />}
      classNames={{ root: classes.root, node: classes.node, subtree: classes.subtree }}
    />
  );
}


function DevlogLeaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  const close = useNavClose();
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
          viewTransition
          to={`/view/${node.value}`}
          onClick={close}
          className={({ isActive, isPending }) =>
            `${classes.fileLink} ${isActive ? classes.active : ''} ${isPending ? classes.pending : ''}`
          }
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




function getLatestExpandedPath(data: TreeNodeData[]): string[] {
  if (data.length === 0) return [];
  const latestYear = data[0];
  const latestMonth = latestYear.children?.[0];
  return latestMonth ? [latestYear.value, latestMonth.value] : [latestYear.value];
}