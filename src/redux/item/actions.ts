import { Dispatch } from "redux";
import ItemsService from "../../services/items";
import { ACTION_ITEMS_FETCH_SUCCESS, ACTION_ITEMS_FETCH_ERROR } from "./types";

/*
function dispatchFetchITEMSProgress(): any {
  return {
    type: ACTION_NOTES_FETCH
  };
}
*/

function dispatchFetchNotesSuccess(items: any[]): any {
  return {
    type: ACTION_ITEMS_FETCH_SUCCESS,
    items
  };
}

function dispatchFetchNotesError(e: Error): any {
  return {
    type: ACTION_ITEMS_FETCH_ERROR,
    errorMessage: e.message
  };
}

export function actionFetchItems() {
  return (dispatch: Dispatch) => {
    //dispatch(dispatchFetchNotesProgress());
    return ItemsService.getAll()
    .then((res) => {
      return dispatch(dispatchFetchNotesSuccess(res));
    })
    .catch((e: Error) => {
      return dispatch(dispatchFetchNotesError(e));
    });
  };
}