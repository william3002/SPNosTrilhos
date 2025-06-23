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
    return this.service.linesTranslate.get(codigo.toString()) || 'Desconhecida'
  }

  coresDaLinha(cor:number):string{
    return this.service.coresDaLinha.get(cor.toString()) || 'bg-black-500'
  }
}
