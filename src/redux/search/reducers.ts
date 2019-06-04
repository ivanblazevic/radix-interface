import { ACTION_SEARCH_ITEMS_FETCH_SUCCESS, ACTION_SEARCH_ITEMS_FETCH_ERROR, ACTION_SEARCH_ITEMS_FETCH, ACTION_ACTIVATE_SEARCH } from './types'
import { Item } from '../../models/item';

export enum LoadingState {
  INIT,
  LOADING,
  LOADED,
  ERROR
}

export interface SearchState {
  state: LoadingState,
  items: Item[],
  errorMessage?: string,
  searchActivated: boolean
}

const initialState: SearchState = {
  state: LoadingState.INIT,
  items: [],
  errorMessage: "",
  searchActivated: false
}

export function searchReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {
    case ACTION_SEARCH_ITEMS_FETCH: {
      return { ...state, items: action.items, state: LoadingState.LOADING }
    }
    case ACTION_SEARCH_ITEMS_FETCH_SUCCESS: {
      return { ...state, items: action.items, state: LoadingState.LOADED }
    }
    case ACTION_SEARCH_ITEMS_FETCH_ERROR: {
      return { ...state, errorMessage: action, state: LoadingState.ERROR }
    }
    case ACTION_ACTIVATE_SEARCH: {
      return { ...state, searchActivated: action.isActive }
    }
    default:
      return state
  }
}