/**
 * Communication with player
 */

import { Item } from "../models/item";
import { PlayerInfo } from "../Footer/Footer";

const HOST = process.env.REACT_APP_RADIX_HOST;

export default class PlayerService {
    static play(item: Item): Promise<string> {
        const url = HOST + "/play?url=" + item.url + "&title=" + item.title;
        return fetch(url).then(res => {
            return res.json();
        })
    }

    static info(): Promise<PlayerInfo> {
        const url = HOST + "/info";
        return fetch(url).then(res => {
            return res.json();
        })
    }
}
