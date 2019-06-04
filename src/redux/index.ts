import { itemReducer, ItemsState } from './item/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { PlayerState, playerReducer } from './player/reducers';
import { SearchState, searchReducer } from './search/reducers';

export enum LoadingState {
  INIT,
  LOADING,
  LOADED,
  ERROR
}

export interface AppState {
  items: ItemsState;
  search: SearchState;
  player: PlayerState;
}

const rootReducer = combineReducers({
  items: itemReducer,
  search: searchReducer,
  player: playerReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))