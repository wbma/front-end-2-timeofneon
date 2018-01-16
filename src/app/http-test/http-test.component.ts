import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  constructor(private http:HttpClient) { }

  someData = 'hello';
  imgURL = 'http://placekitten.com/420/300';
  imageFolder ='http://media.mw.metropolia.fi/wbma/uploads/';

  getJSON() {
    this.http.get('assets/package.json').subscribe( (data)  => {
      console.log(data);
      this.someData= data.license;
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media/').subscribe((data)  => {
      console.log(data);

      this.imgURL = this.imageFolder + data[0].filename;
    });

  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
