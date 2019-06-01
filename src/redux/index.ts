import { itemReducer, ItemsState } from './item/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
  
export interface AppState {
  items: ItemsState
}

const rootReducer = combineReducers({
  items: itemReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))