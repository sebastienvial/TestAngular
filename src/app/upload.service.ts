import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,  HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from 'src/app/image';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = 'https://comem-qimg.herokuapp.com/api/images';
  constructor(private http: HttpClient) { }


  postFile(fileToUpload: File): Observable<Image> {
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload);
    return this.http
      .post<Image>(this.SERVER_URL, formData, { headers: {
        // ['Content-Type'] : 'multipart/form-data; boundary=AaB03x',
        ['Authorization']: 'Bearer wazKs1G6kNBN8vRMNetni9GL060jEYhKwIiN3BeJXLz2vF8nWxuQN6nfEL7CYwtqPU/ZSvwJcLsz75EqlrLO475vGmEEJ0iLNa1o113yvDzgwLal6ZvLBnVW/7+iuE8XY5sKEqoaAnAFeoahNxdLn2Cmcr542KEpSyUF73t41Gs='
      } })
  }


}
