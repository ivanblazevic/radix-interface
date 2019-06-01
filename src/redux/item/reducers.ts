import { ACTION_ITEMS_FETCH_SUCCESS, ACTION_ITEMS_FETCH_ERROR } from './types'

export interface ItemsState {
  state: string, // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
  items: string[],
  errorMessage?: string
}

const initialState: ItemsState = {
  state: "",
  items: [],
  errorMessage: ""
}

export function itemReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {
    case ACTION_ITEMS_FETCH_SUCCESS: {
      return { ...state, items: action.items }
    }
    case ACTION_ITEMS_FETCH_ERROR: {
      return { ...state, errorMessage: action }
    }
    default:
      return state
  }
}