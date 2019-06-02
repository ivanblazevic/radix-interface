/**
 * Communication with player
 */

import { Item } from "../models/item";
import { PlayerInfo } from "../models/playerInfo";

const HOST = process.env.REACT_APP_RADIX_HOST;

export default class PlayerService {
    static play(item: Item): Promise<any> {
        const url = HOST + "/play?url=" + item.url + "&title=" + item.title;
        return fetch(url).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).catch(e => {
            throw Error("Offline or wrong address");
        });
    }

    static info(): Promise<PlayerInfo> {
        const url = HOST + "/info";
        return fetch(url).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).catch(e => {
            throw Error("Offline or wrong address");
        });
    }
}
