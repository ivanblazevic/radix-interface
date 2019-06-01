import { ACTION_ITEMS_FETCH_SUCCESS } from './types'

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
        /*
  case DELETE_MESSAGE:
    return {
      messages: state.messages.filter(
        (message:any) => message.timestamp !== action.meta.timestamp
      )
    }
    */
    default:
      return state
  }
}