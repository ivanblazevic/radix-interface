/**
 * Communication with player
 */

import { Item } from "../models/item";
import { PlayerInfo } from "../models/playerInfo"; 

export default class PlayerService {

    private static HOST = localStorage.getItem('ip') || process.env.REACT_APP_RADIX_HOST;

    static play(item: Item): Promise<any> {
        const url = this.HOST + "/play?url=" + item.url + "&title=" + item.title;
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
        const url = this.HOST + "/info";
        return fetch(url).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).catch(e => {
            throw Error("Offline or wrong address");
        });
    }

    static searchStations(query: string): Promise<Item[]> {
        const url = this.HOST + "/search?query=" + query;
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
