import { Action } from '@ngrx/store';
import { Order } from '../models/order';
import * as CartActions from '../actions/cart.actions';
import { AppState } from '../app.state';
import { ActionReducerMap } from '@ngrx/store';

/*
const initialState: Order = {
    id:1,
    name: "",
    price: 0
}
*/

export function cartReducer(state: Order[]=[] , action: CartActions.Actions) {
    switch(action.type) {
        case CartActions.ADD_ORDER:
            return [...state, action.payload];
        case CartActions.REMOVE_ORDER:
            return  state.filter((_, i) => i !== action.payload);
        
    }
}

export const reducers: ActionReducerMap<AppState> = {
    order: cartReducer
}