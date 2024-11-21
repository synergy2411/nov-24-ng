import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Array<IPost>;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  addPost() {
    this.postsService
      .createPost({ title: 'New Post', body: '....' })
      .subscribe(console.log);
  }

  deletePost(postId: string) {
    this.postsService.deletePost(postId).subscribe(console.log);
  }
}
