import { Item } from "../models/item";

const FAVORITES_HOST = "https://radix-83cd.restdb.io/rest/stations";

export default class ItemsService {
    static getAll(): Promise<Item[]> {
        return fetch(FAVORITES_HOST, {
            method: 'GET',
            headers: new Headers({
                'x-apikey': '5ae89d7625a622ae4d528762'
            })
        }).then(res => res.json()).catch(e => e);
    }

    static add(item: any): Promise<Item[]> {
        return fetch(FAVORITES_HOST, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-apikey': '5ae89d7625a622ae4d528762'
            })
        }).then(res => res.json()).catch(e => e);
    }
}