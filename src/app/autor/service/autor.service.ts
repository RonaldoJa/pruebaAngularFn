import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../interface/autor.interface';
import { Obra } from '../interface/obra.interface';
import { ObraSeleccionada } from '../interface/obraSeleccionada.interface';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private apiUrl: string = ' https://poetrydb.org';
  // private autorSubject = new BehaviorSubject<Autor>();
  public localStorageKey = 'productos';

  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/author`);
  }

  getObrasAuthor(autor: string): Observable<Obra[]> {
    return this.http.get<Obra[]>(`${this.apiUrl}/author/${autor}/title`)
  }

  getObraSeleccionada(titulo: string): Observable<ObraSeleccionada[]> {
    return this.http.get<ObraSeleccionada[]>(`${this.apiUrl}/title/${titulo}`);
  }

  // enviarProducto(autor: Autor) {
  //   // Obtén la lista actual de productos
  //   const autores = this.autorSubject.value;
    
  //   // Agrega el nuevo producto a la lista
  //   autores.push(autores);
    
  //   // Actualiza el BehaviorSubject y almacena los datos en localStorage
  //   this.productosSubject.next(productos);
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
  // }
}
