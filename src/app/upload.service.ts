import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,  HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = 'https://comem-qimg.herokuapp.com/api/images';
  constructor(private http: HttpClient) { }


  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData, { headers: {
        ['Content-Type'] : 'multipart/form-data; boundary=AaB03x',
        ['Authorization']: 'Bearer wazKs1G6kNBN8vRMNetni9GL060jEYhKwIiN3BeJXLz2vF8nWxuQN6nfEL7CYwtqPU/ZSvwJcLsz75EqlrLO475vGmEEJ0iLNa1o113yvDzgwLal6ZvLBnVW/7+iuE8XY5sKEqoaAnAFeoahNxdLn2Cmcr542KEpSyUF73t41Gs='
      } })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
}



  public upload(formData) {
    console.log(formData);
    return this.http.post<any>(this.SERVER_URL, formData, {
      headers: {
        ['Content-Type'] : 'multipart/form-data; boundary=AaB03x',
        ['Authorization']: 'Bearer wazKs1G6kNBN8vRMNetni9GL060jEYhKwIiN3BeJXLz2vF8nWxuQN6nfEL7CYwtqPU/ZSvwJcLsz75EqlrLO475vGmEEJ0iLNa1o113yvDzgwLal6ZvLBnVW/7+iuE8XY5sKEqoaAnAFeoahNxdLn2Cmcr542KEpSyUF73t41Gs='
      },
      reportProgress: true,
      observe: 'events'
    });
  }
}
