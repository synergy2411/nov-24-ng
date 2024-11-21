import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<IPost>> {
    return this.http.get<IPost[]>(this.baseUrl);
  }

  createPost(post: { title: string; body: string }): Observable<IPost> {
    return this.http.post<IPost>(this.baseUrl, post);
  }

  deletePost(postId: string) {
    return this.http.delete(`${this.baseUrl}/${postId}`);
  }
}
