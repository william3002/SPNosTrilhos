import { Component, inject, OnInit } from '@angular/core';
import { MetroService } from '../../services/metro.service';
import { MetroModels } from '../../models/metro-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  private service = inject(MetroService);
  dadosApi: MetroModels[] = [];

  ngOnInit(): void {
    this.getDados();
  }

  getDados() {
    this.service.buscaDados().subscribe({
      next: (dados) => {
        this.dadosApi = dados;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  
  nomeDaLinha(codigo: number): string {
    return this.service.linhasMap.get(codigo.toString())?.nome || 'Desconhecida'
  }

  coresDaLinha(codigo:number):string{
    return this.service.linhasMap.get(codigo.toString())?.cor || 'bg-black-500'
  }

  imagemMap(codigo:number):string{
    return this.service.linhasMap.get(codigo.toString())?.imagem || '❌'
  }
}
