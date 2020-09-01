import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {HttpEventType, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { UploadService } from '../upload.service';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-cpnimg',
  templateUrl: './cpnimg.component.html',
  styleUrls: ['./cpnimg.component.scss']
})

export class CpnimgComponent implements OnInit {
  // @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  
  private filesUpload: File[];
  private filesUrl: string[];

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  // uploadFile(file) {

  //       var reader = new FileReader();
  //       var imgContent;

  //       reader.onload = () => {
  //         // console.log(reader.result);
  //         imgContent = reader.result;
  //       }
  //       reader.readAsText(file.data);

  //     }

  //     private uploadFiles() {
  //       this.fileUpload.nativeElement.value = '';
  //       this.files.forEach(file => {
  //         this.uploadFile(file);
  //       })
  //     }

  onctrl() {
    console.log(this.filesUrl);
    
    var imgUrl = this.filesUrl[0];
    var additionalImageUrls = this.filesUrl.slice(1);

    console.log('imageUrl = ', imgUrl);
    console.log('additionalImageUrl = ', additionalImageUrls);



  }

  onclick() {
    console.log('longueur du tableau :', this.filesUpload.length);
    this.filesUrl = new Array<string>();
    if (this.filesUpload.length>0) {
      for (let i=0; i<this.filesUpload.length; i++) {
        console.log(this.filesUpload[i]);
        this.uploadService.postFile(this.filesUpload[i]).subscribe((data)=>{
          console.log('url :', data.url);
          this.filesUrl.push(data.url)
        });
      }
    }

    

  }

  onChange(files: File[]) {
    console.log('nbr de fichiers : ', files);
    if (files.length>0) {
      this.filesUpload = Array.from(files);
    }
     
    // this.uploadService.postFile(event.target.files[0]).subscribe((data)=>console.log(data));
  }
}
