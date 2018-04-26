import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  selectedFile: File = null;
  selectedMovieFile: File = null;
  video = document.querySelector('#vid');
  clicked: Boolean = true;
  isFullSize: Boolean = true;

  // @HostListener("window:scroll", []) private onScroll($event:Event):void {
  //   console.log(event);
  //   console.log(window.scrollX);
  //   console.log(window.scrollY);
  // };

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.video.addEventListener('click',function (e) {
      console.log(e);
      this.video.play();
    })
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

  onMovieSelected(event) {
    console.log(event.target.files);
    this.selectedMovieFile = <File>event.target.files[0];
    console.log(this.selectedMovieFile);
  }

  onUploadMovie() {
    const url = '/movie';
    const fd = new FormData();
    fd.append('movie', this.selectedMovieFile, this.selectedMovieFile.name);

    //  Send data to server;
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
      });
  }


  onClick(event){
    event.controls = false;
    console.log(event)
    if(this.clicked){
      event.target.play();
      this.clicked = !this.clicked
    } else {
      event.target.pause();
      event.controls = false;
      this.clicked = !this.clicked
    }
  }
}
