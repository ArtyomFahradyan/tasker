import { createStore, combineReducers, applyMiddleware } from 'redux';
import workspaceReducer from './workspace/reducers';


const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    workspace: workspaceReducer
  });

  const store = createStore(reducers, initialState, applyMiddleware());

  return { store };
};

export default configureStore;
