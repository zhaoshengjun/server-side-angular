import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../../services/posts.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  public posts = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService
      .getPosts()
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      )
      .subscribe((result: any) => (this.posts = result));
  }
}
