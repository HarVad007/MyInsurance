import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { MyPhotos } from './photos/photos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photosURL="https://jsonplaceholder.typicode.com/photos";

  constructor(private myHttp: HttpClient) { }
  loadPhotosService(): Observable<MyPhotos[]> {
    console.log('Photos service invoked...');
    //4 invoke http client
    return this.myHttp.get<MyPhotos[]>(this.photosURL);
  }

}
