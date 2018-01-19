import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: string = 'hello';
  apiurl = 'http://media.mw.metropolia.fi/wbma';
  mediaurl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  mediaArray: any;


  constructor(private http: HttpClient) {
  }

  getJSON() {
    interface Myinterface {
      license: string;
    }

    this.http.get<Myinterface>('assets/package.json').subscribe(data => {
      console.log(data);
      this.someData = data.license;
    });
  }

  getAllImages() {
    this.http.get(this.apiurl + '/media').subscribe(data => {
      console.log(data);
      this.mediaArray = data;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getAllImages();
  }

}
