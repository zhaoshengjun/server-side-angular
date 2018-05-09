import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    // const url = `${environment.apiUrl}/posts/timeline?filter[where][type]=text`;
    // const url = `${environment.apiUrl}/posts`;
    const url = "http://localhost:3000/posts";
    return this.http.get(url);
  }

  getProfile(profileId) {
    // const url = `${
    //   environment.apiUrl
    // }/profiles/${profileId}?filter[include]=posts`;
    const url = `${environment.apiUrl}/profiles/${profileId}`;
    return this.http.get(url);
  }
}
