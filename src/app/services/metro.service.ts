import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MetroModels } from './../models/metro-models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetroService {
  private http = inject(HttpClient);
  private urlApi =
    'https://corsproxy.io/?https%3A%2F%2Fwww.diretodostrens.com.br%2Fapi%2Fstatus';

  buscaDados(): Observable<MetroModels[]> {
    return this.http.get<MetroModels[]>(this.urlApi);
  }
}
