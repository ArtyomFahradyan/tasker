import { createSelector } from 'reselect';
import type { WorkspaceStore } from './types';

type State = { workspace: WorkspaceStore };

const getMainState = (state: State) => state.workspace;
const getActiveWorkspace = createSelector(getMainState, (workspace) => workspace.activeWorkspace);
const getActiveWorkspaceId = (state: State) => state.workspace.activeWorkspace?.id;

export default {
  getActiveWorkspace,
  getActiveWorkspaceId
};
