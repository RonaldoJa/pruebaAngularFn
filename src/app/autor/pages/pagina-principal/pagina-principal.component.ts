import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../service/autor.service';
import { Obra } from '../../interface/obra.interface';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  autores: string[] = [];
  obras: Obra[] = [];
  buscar: string = '';

  constructor(private autorService: AutorService) { }

  ngOnInit(): void {
    this.allAuthors();
    this.obtenerAutor(this.buscar);
  }

  allAuthors() {
    this.autorService.getAllAuthors().subscribe(data => {
      this.autores = data.authors;
      console.log(this.autores);
    });
  }

  obtenerAutor(autor: string) {
    this.buscar = autor;
    this.autorService.getObrasAuthor(this.buscar).subscribe((data: Obra[]) => {
      this.obras = data;
      console.log(this.obras);
    })
  }

}
