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

  linhasMap = new Map<string, { nome: string; cor: string; imagem: string }>([
  ['1', { nome: 'Azul', cor: 'bg-blue-700', imagem: 'assets/metro.png' }],
  ['2', { nome: 'Verde', cor: 'bg-green-700', imagem: 'assets/metro.png' }],
  ['3', { nome: 'Vermelha', cor: 'bg-red-700', imagem: 'assets/metro.png' }],
  ['4', { nome: 'Amarela', cor: 'bg-yellow-500', imagem: 'assets/ViaQuatro.png' }],
  ['5', { nome: 'Lilas', cor: 'bg-purple-700', imagem: 'assets/ViaMobilidade.png' }],
  ['6', { nome: 'Laranja', cor: 'bg-orange-500', imagem: 'assets/ViaMobilidade.png' }],
  ['7', { nome: 'Rubi', cor: 'bg-pink-700', imagem: 'assets/ViaMobilidade.png' }],
  ['8', { nome: 'Diamante', cor: 'bg-gray-400', imagem: 'assets/ViaMobilidade.png' }],
  ['9', { nome: 'Esmeralda', cor: 'bg-green-600', imagem: 'assets/ViaMobilidade.png' }],
  ['10', { nome: 'Turquesa', cor: 'bg-cyan-500', imagem: 'assets/cptm.png' }],
  ['11', { nome: 'Coral', cor: 'bg-pink-700', imagem: 'assets/cptm.png' }],
  ['12', { nome: 'Safira', cor: 'bg-blue-500', imagem: 'assets/cptm.png' }],
  ['13', { nome: 'Jade', cor: 'bg-green-400', imagem: 'assets/cptm.png' }],
  ['14', { nome: 'Ônix', cor: 'bg-blue-300', imagem: 'assets/cptm.png' }],
  ['15', { nome: 'Prata', cor: 'bg-gray-500', imagem: 'assets/ViaMobilidade.png' }],
]);

}
