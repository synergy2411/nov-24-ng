import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<IPost>> {
    return this.http.get<IPost[]>('http://localhost:3000/posts');
  }
}
