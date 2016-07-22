/// <reference path="../typings/tsd.d.ts" />

import {EventEmitter} from 'fbemitter';
import AppDispatcher from './appDispatcher';
import bankConstants from './constants';

const CHANGE_EVENT = 'change_event';

let __emitter = new EventEmitter();
let balance = 0;

class BankBalanceStore {
    public getState() {
        return balance;
    }

    public addListener(callback: Function) {
        return __emitter.addListener(CHANGE_EVENT, callback);
    }

    public dispatcherTokenAction = AppDispatcher.register((action) => {
        switch (action.type) {
            case bankConstants.CREATE_ACCOUNT:
                balance = 0;
                __emitter.emit(CHANGE_EVENT);
                break;

            case bankConstants.DEPOSIT_INTO_ACCOUNT:
                balance += action.amount;
                __emitter.emit(CHANGE_EVENT);
                break;

            case bankConstants.WITHDRAW_FROM_ACCOUNT:
                balance -= action.amount;
                __emitter.emit(CHANGE_EVENT);
                break;
        }
    });
}

let store = new BankBalanceStore(); 
export default store;