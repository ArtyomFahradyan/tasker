import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types, { ActiveWorkspace } from './types';

export type Payload = {
  type: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  payload?: any;
};

export type Dispatch = (payload: Payload) => void;

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch: Dispatch = useDispatch();

  /**
   * Set active workspace
   */

  const setPeriodEnd = useCallback(
    (periodEnd: number) => {
      dispatch({ type: types.SET_PERIOD_END, payload: periodEnd });
    },
    [dispatch]
  );

  const clearWorkspace = useCallback(
    () => dispatch({ type: types.CLEAR_ACTIVE_WORKSPACE }),
    [dispatch]
  );

  return {
    clearWorkspace,
    setPeriodEnd
  };
}
