import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("https://604a3c9c9251e100177ce3d0.mockapi.io/mulakat/api/v1/Users", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getUser() {
    return this.http.get<any>("https://604a3c9c9251e100177ce3d0.mockapi.io/mulakat/api/v1/Users")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateUser(data: any, id: string) {
    return this.http.put<any>("https://604a3c9c9251e100177ce3d0.mockapi.io/mulakat/api/v1/Users/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteUser(id: string) {
    return this.http.delete<any>("https://604a3c9c9251e100177ce3d0.mockapi.io/mulakat/api/v1/Users/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getLocation() {
    return this.http.get<any>("https://604a3c9c9251e100177ce3d0.mockapi.io/mulakat/api/v1/localization")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
