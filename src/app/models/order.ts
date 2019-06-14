export interface Order {
    id:number;
    name: string;
    price: number;
    details?: string;
    imageUrl?: string;
    quantity?: number;
    total?: number;
}