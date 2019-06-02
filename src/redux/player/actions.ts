import { Dispatch } from "redux";
import { ACTION_PLAYER_INFO_SUCCESS, ACTION_PLAYER_INFO_ERROR, ACTION_PLAYER_INFO } from "./types";
import PlayerService from "../../services/player";
import { PlayerInfo } from "../../models/playerInfo";
import { Item } from "../../models/item";

function dispatchFetchPlayerInfo(): any {
  return {
    type: ACTION_PLAYER_INFO
  };
}

function dispatchFetchPlayerInfoSuccess(info: PlayerInfo): any {
  return {
    type: ACTION_PLAYER_INFO_SUCCESS,
    info
  };
}

function dispatchFetchPlayerInfoError(e: Error): any {
  return {
    type: ACTION_PLAYER_INFO_ERROR,
    errorMessage: e.message
  };
}

export function actionFetchPlayerInfo() {
  return (dispatch: Dispatch) => {
    dispatch(dispatchFetchPlayerInfo());
    return PlayerService.info()
    .then((res) => {
      return dispatch(dispatchFetchPlayerInfoSuccess(res));
    })
    .catch((e: Error) => {
      return dispatch(dispatchFetchPlayerInfoError(e));
    });
  };
}

export function actionPlay(item: Item) {
  return (dispatch: any) => {
    dispatch(dispatchFetchPlayerInfo());
    return PlayerService.play(item)
    .then(_ => {
      return dispatch(actionFetchPlayerInfo());
    })
    .catch((e: Error) => {
      return dispatch(dispatchFetchPlayerInfoError(e));
    });
  };
}
