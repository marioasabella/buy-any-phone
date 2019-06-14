import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUserById(id: number) {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  
  getByProductByName(name: String) { 
    return this.http.get(`http://localhost:3000/products?name=${name}`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  registerProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/users/${user.id}`, user);
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/products/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
