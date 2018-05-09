import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  public posts = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.posts.push({
        id: i,
        text: "This is post with id " + i
      });
    }
  }
}
