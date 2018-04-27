import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {Router, RouterLinkActive} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  selectedMovieFile: File = null;
  video = document.querySelector('#vid');
  clicked: Boolean = true;
  isFullSize: Boolean = true;
  imageFormData = new FormData();
  uploadedImages: any;

  // @HostListener("window:scroll", []) private onScroll($event:Event):void {
  //   console.log(event);
  //   console.log(window.scrollX);
  //   console.log(window.scrollY);
  // };

  constructor(private _httpClient: HttpClient,
              private _router: Router,
              private _authService: AuthService) {
  }

  ngOnInit() {
    this._authService.getUploadedImages().subscribe((res) => {
      this.uploadedImages = res['images'];
      console.log(this.uploadedImages);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.video.addEventListener('click', function (e) {
      console.log(e);
      this.video.play();
    })
  }

  onFileSelected(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i].type === 'image/jpeg') {
        this.imageFormData.append('image', event.target.files[i], event.target.files[i].name);
      }
    }
  }

  onFileUpload() {
    const url = '/api-images/kungfu';

    this._httpClient.post(url, this.imageFormData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(`Upload progress ${Math.round(event.loaded / event.total * 100)}%`);
        } else if (event.type === HttpEventType.Response) {
          this._router.navigate(['/galerie']);
          console.log(event);
          this._authService.getUploadedImages().subscribe((res) => {
            this.uploadedImages = res['images'];
          });
        } else {
          // console.log(event);
        }
      }
    );
  }

  onDeleteImage(event) {
    const id = {id: event.target.value};
    this._authService.removeUploadedImage(id).subscribe((res) => {
      console.log(res);
      this._authService.getUploadedImages().subscribe((res) => {
        this.uploadedImages = res['images'];
      });
    })
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

  onClick(event) {
    event.controls = false;
    console.log(event);
    if (this.clicked) {
      event.target.play();
      this.clicked = !this.clicked
    } else {
      event.target.pause();
      event.controls = false;
      this.clicked = !this.clicked
    }
  }
}
