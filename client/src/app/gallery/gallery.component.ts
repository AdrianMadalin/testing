import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {JwtHelper} from "../services/jwtHelper.service";
import {UploadService} from "../services/upload.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedFile: File = null;
  imageFormData: FormData = null;
  uploadImgBtn: boolean = true;

  uploadedImages: any;
  isTokenExpired: boolean = false;

  movieUrl: string = '';
  uploadedMovieUrl: any;

  video = document.querySelector('#vid');
  clicked: Boolean = true;
  isFullSize: Boolean = true;
  counter: Number = 0;

  // @HostListener("window:scroll", []) private onScroll($event:Event):void {
  //   console.log(event);
  //   console.log(window.scrollX);
  //   console.log(window.scrollY);
  // };

  constructor(private _httpClient: HttpClient,
              private _authService: AuthService,
              private _jwtHelper: JwtHelper,
              private _uploadService: UploadService,
              public _sanitizer: DomSanitizer,
              private _router: Router) {
  }

  ngOnInit() {
    this.isTokenExpired = this._authService.isExpired();
    console.log(this.isTokenExpired)

    this._authService.getUploadedImages().subscribe((data) => {
      this.uploadedImages = data['images'];
    });

    this._uploadService.getMovieUrl().subscribe((data) => {
      this.uploadedMovieUrl = data['url'];
    })
  }

  onFileSelected(event) {
    const files = event.target.files.length;
    files > 0 ? this.uploadImgBtn = false : this.uploadImgBtn = true;
    this.selectedFile = <File>event.target.files;
    this.imageFormData = new FormData();
    for (let i = 0; i < files; i++) {
      if (this.selectedFile[i].type === 'image/jpeg') {
        this.imageFormData.append('image', this.selectedFile[i], this.selectedFile[i].name);
      }
    }

  }

  onImageUpload() {
    if (!this.isTokenExpired) {
      const url = '/api-images/kungfu';
      this._httpClient.post(url, this.imageFormData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log(`Upload progress ${Math.round(event.loaded / event.total * 100)}%`);
          } else if (event.type === HttpEventType.Response) {
            console.log(event);
            this._authService.getUploadedImages().subscribe((data) => {
              this.uploadedImages = data['images'];
            })
          } else {
            // console.log(event);
          }
        }
      );
    } else {
      console.log(`EXPIRED TOKEN`);
    }
  }

  onDeleteImage(event) {
    if (!this.isTokenExpired) {
      const id = event.target.value;
      this._authService.removeUploadedImage(id).subscribe((data) => {
        console.log(data);
        this._authService.getUploadedImages().subscribe((data) => {
          this.uploadedImages = data['images'];
        })
      });
    }
  }

  onMovieUpload() {
    if (this.isTokenExpired) {
      if (this.movieUrl.length > 0) {
        this._uploadService.onMovieUpload({movieUrl: this.movieUrl}).subscribe((response) => {
          console.log(response);
          this.movieUrl = '';

          this._uploadService.getMovieUrl().subscribe((data) => {
            this.uploadedMovieUrl = data['url'];
          })
        })
      } else {
        console.log(`Empty input`);
      }
    } else {
      console.log(`Expired Token`);
      this._router.navigate(['/logadmin']);
    }
  };

  onDeleteMovieUrl(event){
    console.log();
    this._uploadService.onMovieDelete({link: event.target.value}).subscribe((response)=>{
      console.log(response);
    })
  }

  onClick(event) {
    event.controls = false;
    console.log(event)
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
