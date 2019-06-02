
import { PlayerInfo } from '../../models/playerInfo';
import { ACTION_PLAYER_INFO_SUCCESS, ACTION_PLAYER_INFO_ERROR, ACTION_PLAYER_INFO } from './types';

export enum LoadingState {
  INIT,
  LOADING,
  LOADED,
  ERROR
}

export interface PlayerState {
  state: LoadingState,
  info: PlayerInfo,
  errorMessage?: string
}

const initialState: PlayerState = {
  state: LoadingState.INIT,
  info: {} as PlayerInfo,
  errorMessage: ""
}

export function playerReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {
    case ACTION_PLAYER_INFO: {
      return { ...state, state: LoadingState.LOADING }
    }
    case ACTION_PLAYER_INFO_SUCCESS: {
      return { ...state, info: action.info, state: LoadingState.LOADED }
    }
    case ACTION_PLAYER_INFO_ERROR: {
      return { ...state, errorMessage: action }
    }
    default:
      return state
  }
}