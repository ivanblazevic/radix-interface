import { Dispatch } from "redux";
import { ACTION_SEARCH_ITEMS_FETCH_SUCCESS, ACTION_SEARCH_ITEMS_FETCH_ERROR, ACTION_SEARCH_ITEMS_FETCH, ACTION_ACTIVATE_SEARCH } from "./types";
import PlayerService from "../../services/player";

function dispatchSearch(): any {
  return {
    type: ACTION_SEARCH_ITEMS_FETCH
  };
}

function dispatchFetchSuccess(items: any[]): any {
  return {
    type: ACTION_SEARCH_ITEMS_FETCH_SUCCESS,
    items
  };
}

function dispatchSearchError(e: Error): any {
  return {
    type: ACTION_SEARCH_ITEMS_FETCH_ERROR,
    errorMessage: e.message
  };
}

function dispatchActivateSearch(isActive: boolean): any {
  return {
    type: ACTION_ACTIVATE_SEARCH,
    isActive
  };
}

export function actionActivateSearch(isActive: boolean) {
  return (dispatch: Dispatch) => {
    dispatch(dispatchActivateSearch(isActive));
  };
}

export function actionSearch(query: string) {
  return (dispatch: Dispatch) => {
    dispatch(dispatchSearch());
    return PlayerService.searchStations(query)
    .then((res) => {
      return dispatch(dispatchFetchSuccess(res));
    })
    .catch((e: Error) => {
      return dispatch(dispatchSearchError(e));
    });
  };
}