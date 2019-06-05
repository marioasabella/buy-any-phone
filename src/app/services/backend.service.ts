import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}
