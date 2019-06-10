import { Dispatch } from "redux";
import ItemsService from "../../services/items";
import { ACTION_ITEMS_FETCH_SUCCESS, ACTION_ITEMS_FETCH_ERROR, ACTION_ITEMS_FETCH, ACTION_ITEMS_DELETE_SUCCESS } from "./types";
import { Item } from "../../models/item";

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

function dispatchDeleteItemsSuccess(item: Item): any {
  return {
    type: ACTION_ITEMS_DELETE_SUCCESS,
    item
  };
}

export function actionFetchItems() {
  return (dispatch: Dispatch) => {
    dispatch(dispatchFetchItems());
    return ItemsService.getAll()
    .then((res) => {
      return dispatch(dispatchFetchItemsSuccess(res));
    })
    .catch((e: Error) => {
      return dispatch(dispatchFetchItemsError(e));
    });
  };
}

export function actionRemoveFromFavorites(item: Item) {
  return (dispatch: any) => {
    dispatch(dispatchDeleteItemsSuccess(item))
    /*
    return ItemsService.removeFavorites(item._id).then(res => {
      console.log(res);
      //return dispatch(actionFetchPlayerInfo());
      return null;
    })
    .catch((e: string) => {
      return null;
      //return dispatch(dispatchFetchPlayerInfoError(e.toString()));
    });
    */
  };
}