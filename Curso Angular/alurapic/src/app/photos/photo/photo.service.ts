import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable()
export class PhotoService {


  constructor(private http: HttpClient) { }

  listFromUser(user: string) {
    return this.http.get<Photo[]>(API + '/' + user + '/photos');
  }


}
