/// <reference path="../typings/tsd.d.ts" />

import {Dispatcher} from 'flux';

type TActionPayload = {
    type?: string;
    amount?: number;
}

class AppDispatcher extends Dispatcher<TActionPayload> {
    dispatch(action: TActionPayload = {}) {
        console.log(action);
        super.dispatch(action);
    }
}

export default new AppDispatcher();