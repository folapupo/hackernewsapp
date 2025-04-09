import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from './stories.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StoryService {

  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getStories(page: number, pageSize: number, searchTerm: string = ''): Observable<Story[]> {
    const query = `?page=${page}&pageSize=${pageSize}&searchTerm=${encodeURIComponent(searchTerm)}`;
    return this.http.get<Story[]>(`${this.apiUrl}/stories${query}`);
  }

}
