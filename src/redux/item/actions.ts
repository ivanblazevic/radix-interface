import { Dispatch } from "redux";
import ItemsService from "../../services/items";
import { ACTION_ITEMS_FETCH_SUCCESS, ACTION_ITEMS_FETCH_ERROR, ACTION_ITEMS_FETCH } from "./types";

function dispatchFetchItems(): any {
  return {
    type: ACTION_ITEMS_FETCH
  };
}

function dispatchFetchItemsSuccess(items: any[]): any {
  return {
    type: ACTION_ITEMS_FETCH_SUCCESS,
    items
  };
}

function dispatchFetchItemsError(e: Error): any {
  return {
    type: ACTION_ITEMS_FETCH_ERROR,
    errorMessage: e.message
  };
}

export function actionFetchItems() {
  return (dispatch: Dispatch) => {
    dispatch(dispatchFetchItems());
    return ItemsService.getAll()
    .then((res) => {
      console.log("bla")
      return dispatch(dispatchFetchItemsSuccess(res));
    })
    .catch((e: Error) => {
      return dispatch(dispatchFetchItemsError(e));
    });
  };
}