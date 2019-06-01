//import NoteModel from '../models/Note';
//import Poems from './data/notes';

const ENABLE_RANDOM_ERRORS = false;

export default class ItemsService {
    static getAll(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ENABLE_RANDOM_ERRORS && Math.random() > 0.5) {
                    reject(new Error('Error'));
                } else {
                    resolve([
                        {
                            id: 1,
                            name: "bla",
                            url: "nlej"
                        },
                        {
                            id: 2,
                            name: "bla 2",
                            url: "nlejaA"
                        }
                    ]);
                }
            }, 0);
        });
    }
}