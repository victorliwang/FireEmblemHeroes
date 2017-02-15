import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Ally } from '../models/ally';

@Injectable()
export class AllyService {

  // data: any;
  data: Ally[];
  private alliesUrl = "http://localhost:8080/api/allies";
  constructor(public http: Http) {
    this.data = null;
  }

  getAllies() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.alliesUrl)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data as Ally[];
          resolve(this.data);
        });
    });

  }

  createAlly(ally) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.alliesUrl, JSON.stringify(ally), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteAlly(id) {
    this.http.delete(this.alliesUrl+ '/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

}
