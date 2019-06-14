import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Order } from '../models/order';


export const ADD_ORDER = '[ORDER] Add';
export const REMOVE_ORDER = '[ORDER] REMOVE';

export class AddOrder implements Action {
    readonly type = ADD_ORDER;

    constructor(public payload: Order) {

    }
}


export class RemoveOrder implements Action {
    readonly type = REMOVE_ORDER;
    // The payload will be order index
    constructor(public payload: number) {

    }
}


export type Actions = AddOrder | RemoveOrder;