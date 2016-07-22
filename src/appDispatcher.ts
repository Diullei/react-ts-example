/// <reference path="../typings/tsd.d.ts" />

import {Dispatcher} from 'flux';

type TActionPayload = {
    type?: string;
    amount?: number;
}

class AppDispatcher extends Dispatcher<TActionPayload> {
    dispatch(action: TActionPayload = {}) {
        super.dispatch(action);
    }
}

export default new AppDispatcher();