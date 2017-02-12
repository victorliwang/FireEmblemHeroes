import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AllyService {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getAllies() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/allies')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  createAlly(ally) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/allies', JSON.stringify(ally), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteAlly(id) {

    this.http.delete('http://localhost:8080/api/allies/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

}
