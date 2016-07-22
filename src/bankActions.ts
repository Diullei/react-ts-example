import AppDispatcher from './appDispatcher';
import bankConstants from './constants';

class BankActions {
    public createAccount() {
        AppDispatcher.dispatch({
            type: bankConstants.CREATE_ACCOUNT,
            amount: 0
        });
    }

    public depositIntoAccount(amount: number) {
        AppDispatcher.dispatch({
            type: bankConstants.DEPOSIT_INTO_ACCOUNT,
            amount: amount
        });
    }

    public withdrawFromAccount(amount: number) {
        AppDispatcher.dispatch({
            type: bankConstants.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        });
    }
}

let actinos = new BankActions();
export default actinos;