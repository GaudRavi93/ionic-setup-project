import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = '/api';

@Injectable({ providedIn: 'root' })

export class DashboardService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`);
  }
}
