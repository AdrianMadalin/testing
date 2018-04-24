import { Component } from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  latitude: number = 44.459417;
  longitude: number = 26.075994;
  selectedFile: File = null;

  constructor(private _httpClient: HttpClient){

  }

  onChoseLocation(e){
    console.log(e);
  }

  onFileSelected(event) {
    console.log(event);
    console.log(event.target.files);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }


  onUpload() {
    const url = '/hit';
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this._httpClient.post(url, fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(`Upload progress ${Math.round(event.loaded / event.total * 100)}%`);
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        } else {
          // console.log(event);
        }
      }
    );
  }

}
