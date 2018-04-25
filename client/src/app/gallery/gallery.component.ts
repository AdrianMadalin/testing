import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedFile: File = null;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event.target.files);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    const url = '/test';
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
