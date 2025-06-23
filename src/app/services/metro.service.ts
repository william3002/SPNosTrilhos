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

  linesTranslate = new Map<string, string>([
    ['1', 'Azul'],
    ['2', 'Verde'],
    ['3', 'Vermelha'],
    ['4', 'Amarela'],
    ['5', 'Lilas'],
    ['6', 'Laranja'],
    ['7', 'Rubi'],
    ['8', 'Diamante'],
    ['9', 'Esmeralda'],
    ['10', 'Turquesa'],
    ['11', 'Coral'],
    ['12', 'Safira'],
    ['13', 'Jade'],
    ['14', 'Ônix'],
    ['15', 'Prata'],
  ]);

  coresDaLinha = new Map<string, string>([
    ['1', 'bg-blue-600'],
    ['2', 'bg-green-600'],
    ['3', 'bg-red-600'],
    ['4', 'bg-yellow-500'],
    ['5', 'bg-purple-500'],
    ['6', 'bg-orange-500'],
    ['7', 'bg-pink-700'],
    ['8', 'bg-gray-400'],
    ['9', 'bg-green-600'],
    ['10', 'bg-cyan-500'],
    ['11', 'bg-pink-700'],
    ['12', 'bg-blue-500'],
    ['13', 'bg-green-400'],
    ['14', 'bg-blue-300'],
    ['15', 'bg-gray-500'],
  ]);
}
