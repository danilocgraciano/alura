import { Component, OnInit, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  private _url: string = '';
  @Input() description;

  @Input() set url(url: string) {
    this._url = url;
    if (!url.startsWith('data'))
      this._url = CLOUD + url;
  }

  get url() {
    return this._url;
  }

  constructor() { }

  ngOnInit() {
  }

}
