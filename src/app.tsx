/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import {Component, ReactInstance} from 'react';
import * as ReactDOM from 'react-dom';
import BankBalanceStore from './bankBalanceStore';
import BankActions from './bankActions';

type TAppProps = {};

type TAppState = {
    balance: number;
};

interface UI {
    [key: string]: ReactInstance;
    amount: HTMLInputElement;
}

class App extends Component<TAppProps, TAppState> {
    private storeSubscription: FBEmitter.EventSubscription;

    constructor() {
        super();
        BankActions.createAccount();
        this.state = {
            balance: BankBalanceStore.getState()
        }
    }

    public componentDidMount() {
        this.storeSubscription = BankBalanceStore.addListener(() => this.handleStoreChange());
    }

    public componentWillUnmount() {
        this.storeSubscription.remove();
    }

    public handleStoreChange() {
        this.setState({balance: BankBalanceStore.getState()});
    }

    public deposit() {
        BankActions.depositIntoAccount(Number((this.refs as UI).amount.value));
    }

    public withdraw() {
        BankActions.withdrawFromAccount(Number((this.refs as UI).amount.value));
    }

    public render() {
        return (
            <div>
                <header>Flux Trust Bank</header>
                <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
                <div className="atm">
                    <input type="text" placeholder="Enter Amount" ref="amount"/>
                    <br/>
                    <button onClick={this.withdraw.bind(this)}>Withdraw</button>
                    <button onClick={this.deposit.bind(this)}>Deposit</button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));