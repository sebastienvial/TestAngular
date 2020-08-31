import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {HttpEventType, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-cpnimg',
  templateUrl: './cpnimg.component.html',
  styleUrls: ['./cpnimg.component.scss']
})

export class CpnimgComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files = [];
  
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  uploadFile(file) {

        var reader = new FileReader();
        var imgContent;

        reader.onload = () => {
          // console.log(reader.result);
          imgContent = reader.result;
        }
        reader.readAsText(file.data);

        const formData = new FormData(); 
        console.log(file);

        
    
        formData.append('Image', imgContent, file.data.name ); 
      
        // formData.append('Image', file.data);    
        file.inProgress = true;   
        this.uploadService.upload(formData).pipe(   
          map(event => {    
            switch (event.type) {    
              case HttpEventType.UploadProgress:  
                 file.progress = Math.round(event.loaded * 100 / event.total);    
                break;  
              case HttpEventType.Response:    
                return event;    
            }    
          }),    
          catchError((error: HttpErrorResponse) => {
             file.inProgress = false;
            return of(`Upload failed: ${file.data.name}`); //${file.data.name}
          })).subscribe((event: any) => {
            if (typeof (event) === 'object') {
              console.log('resultat :', event.body);  
            }  
          });  
      }

      private uploadFiles() {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach(file => {
          this.uploadFile(file);
        })
      }

      onclickSV(event) {
        event.target.files[0]
      }
      
      onClick() {
            const fileUpload = this.fileUpload.nativeElement;
            fileUpload.onchange = () => {
              for (let index = 0; index < fileUpload.files.length; index++)
              {
              const file = fileUpload.files[index];
              this.files.push({ data: file, inProgress: false, progress: 0});
              }
                this.uploadFiles();
            };
            fileUpload.click();
        }

}
