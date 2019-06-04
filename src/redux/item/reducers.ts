import { ACTION_ITEMS_FETCH_SUCCESS, ACTION_ITEMS_FETCH_ERROR, ACTION_ITEMS_FETCH } from './types'
import { Item } from '../../models/item';

export enum LoadingState {
  INIT,
  LOADING,
  LOADED,
  ERROR
}

export interface ItemsState {
  state: LoadingState,
  items: Item[],
  errorMessage?: string
}

const initialState: ItemsState = {
  state: LoadingState.INIT,
  items: [],
  errorMessage: ""
}

export function itemReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {
    case ACTION_ITEMS_FETCH: {
      return { ...state, items: action.items, state: LoadingState.LOADING }
    }
    case ACTION_ITEMS_FETCH_SUCCESS: {
      return { ...state, items: action.items, state: LoadingState.LOADED }
    }
    case ACTION_ITEMS_FETCH_ERROR: {
      return { ...state, errorMessage: action, state: LoadingState.ERROR }
    }
    default:
      return state
  }
}