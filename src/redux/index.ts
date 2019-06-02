import { itemReducer, ItemsState } from './item/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { PlayerState, playerReducer } from './player/reducers';

export enum LoadingState {
  INIT,
  LOADING,
  LOADED,
  ERROR
}

export interface AppState {
  items: ItemsState;
  player: PlayerState;
}

const rootReducer = combineReducers({
  items: itemReducer,
  player: playerReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))