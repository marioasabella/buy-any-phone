import { Order } from './models/order';


export interface AppState {
    readonly order: Order[];
}