import types, { WorkspaceStore } from './types';

export type Payload = {
  type: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  payload?: any;
};

export type Dispatch = (payload: Payload) => void;

export const initialValues: WorkspaceStore = {
  activeWorkspace: null,
  trialEnd: 0,
  periodEnd: 0,
  workspaceUsers: [],
  hasNotification: false
};

export default function (state: WorkspaceStore = initialValues, { type, payload }: Payload) {
  switch (type) {
    case types.SET_ACTIVE_WORKSPACE:
      return {
        ...state,
        activeWorkspace: payload
      };
    case types.SET_ACTIVE_WORKSPACE_PROJECT_ID:
      return {
        ...state,
        activeWorkspace: {
          ...state.activeWorkspace,
          projectId: payload
        }
      };
    case types.SET_ACTIVE_WORKSPACE_STATUS:
      return {
        ...state,
        activeWorkspace: {
          ...state.activeWorkspace,
          status: payload
        }
      };
    case types.SET_ACTIVE_WORKSPACE_SUB_STATUS:
      return {
        ...state,
        activeWorkspace: {
          ...state.activeWorkspace,
          subStatus: payload
        }
      };
    case types.SET_TRIAL_END:
      return {
        ...state,
        trialEnd: payload
      };

    case types.SET_PERIOD_END:
      return {
        ...state,
        periodEnd: payload
      };
    case types.SET_WORKSPACE_USERS:
      return {
        ...state,
        workspaceUsers: payload
      };
    case types.SET_HAS_NOTIFICATION:
      return {
        ...state,
        hasNotification: payload
      };
    case types.CLEAR_ACTIVE_WORKSPACE:
      return {...initialValues};
    default:
      return state;
  }
}
