import { Dispatch } from "redux";
import { ACTION_PLAYER_INFO_SUCCESS, ACTION_PLAYER_INFO_ERROR, ACTION_PLAYER_INFO } from "./types";
import PlayerService from "../../services/player";
import { PlayerInfo } from "../../models/playerInfo";
import { Item } from "../../models/item";
import store from '../index';
import ItemsService from "../../services/items";

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

function dispatchFetchPlayerInfoError(errorMessage: string): any {
  return {
    type: ACTION_PLAYER_INFO_ERROR,
    errorMessage
  };
}

export function actionFetchPlayerInfo() {
  return (dispatch: Dispatch) => {
    dispatch(dispatchFetchPlayerInfo());
    return PlayerService.info()
    .then((res) => {
      return dispatch(dispatchFetchPlayerInfoSuccess(res));
    })
    .catch((e: string) => {
      return dispatch(dispatchFetchPlayerInfoError(e.toString()));
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
    .catch((e: string) => {
      return dispatch(dispatchFetchPlayerInfoError(e.toString()));
    });
  };
}

export function actionAddToFavorites() {
  return (dispatch: any) => {
    const state = store.getState();

    const item: Item = {
      title: state.player.info.title,
      url: state.player.info.url
    }

    return ItemsService.add(item).then(res => {
      console.log(res);
      //return dispatch(actionFetchPlayerInfo());
      return null;
    })
    .catch((e: string) => {
      return null;
      //return dispatch(dispatchFetchPlayerInfoError(e.toString()));
    });
  };
}

export function actionRemoveFromFavorites() {
  return (dispatch: any) => {
    const state = store.getState();

    return ItemsService.removeFavorites(state.player.info._id).then(res => {
      console.log(res);
      //return dispatch(actionFetchPlayerInfo());
      return null;
    })
    .catch((e: string) => {
      return null;
      //return dispatch(dispatchFetchPlayerInfoError(e.toString()));
    });
  };
}

