import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../service/autor.service';
import { ObraSeleccionada } from '../../interface/obraSeleccionada.interface';
import { Obra } from '../../interface/obra.interface';

@Component({
  selector: 'app-pagina-premiun',
  templateUrl: './pagina-premiun.component.html',
  styleUrls: ['./pagina-premiun.component.css']
})
export class PaginaPremiunComponent implements OnInit{

  autor: ObraSeleccionada[] = []
  obras: Obra[] = [];
  favoritoTotal!: number;
  favoritoAutor!: number;
  favoritoObra!: number;
  showObras: boolean = false;
  buscar: string = '';
  titulos: Obra[] = [];


  constructor(private autorService: AutorService) {
  }


  ngOnInit(): void {
    this.autorService.obtenerAutor().subscribe(autor => {
      if (autor !== null) {
        this.autor = autor;
        console.log(this.autor);
        
      }
    });

    this.autorService.obtenerObra().subscribe(obra => {
      if(obra !== null) {
        this.obras = obra;
        console.log(this.obras)
      }
    })
    this.obtenerTotalFavoritos();
    
  }

  obtenerPosicion(objeto: any): number {
    return this.autor.indexOf(objeto);
  }

  EliminarAutor(objeto: any): void {
    const posicion = this.obtenerPosicion(objeto);
    if(posicion >= 0 && posicion < this.autor.length) {
      this.autor.splice(posicion, 1);
      localStorage.setItem(this.autorService.localStorageKeyAutor, JSON.stringify(this.autor));
    } else {
      console.log('El indice no esta dentro del rango de productos')
    }
  }

  obtenerTotalFavoritos() {
    console.log(this.autor.length);
    this.favoritoAutor = this.autor.length;
    this.favoritoObra = this.obras.length;
    this.favoritoTotal = this.autor.length + this.obras.length;
  }

  obtenerAutor(autor: string) {
    this.buscar = autor;
    console.log(this.buscar);
    this.autorService.getObrasAuthor(this.buscar).subscribe((data: Obra[]) => {
      this.titulos = data;
      console.log(this.titulos);
      this.showObras = true;
    })
  }


}
