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
  private obraSeleccionadaSubject = new BehaviorSubject<ObraSeleccionada[]>([]);
  private tituloSeleccionadoSubject = new BehaviorSubject<Obra[]>([]);
  public localStorageKeyObra = 'obraSeleccionada';
  public localStorageKeyAutor = 'autorSeleccionado';

  constructor(private http: HttpClient) { 
    const storedAutor = localStorage.getItem(this.localStorageKeyAutor);
    const storedObra = localStorage.getItem(this.localStorageKeyObra);

    if (storedAutor) {
      this.obraSeleccionadaSubject.next(JSON.parse(storedAutor));
    }
  }

  getAllAuthors(): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/author`);
  }

  getObrasAuthor(autor: string): Observable<Obra[]> {
    return this.http.get<Obra[]>(`${this.apiUrl}/author/${autor}/title`)
  }

  getObraSeleccionada(titulo: string): Observable<ObraSeleccionada[]> {
    return this.http.get<ObraSeleccionada[]>(`${this.apiUrl}/title/${titulo}`);
  }

  enviarObra(obra: Obra) {
    // Obtén la lista actual de productos
    const obras = this.tituloSeleccionadoSubject.value;
    
    // Agrega el nuevo producto a la lista
    obras.push(obra);
    
    // Actualiza el BehaviorSubject y almacena los datos en localStorage
    this.tituloSeleccionadoSubject.next(obras);
    localStorage.setItem(this.localStorageKeyObra, JSON.stringify(obras));
  }

  enviarAutor(autor: ObraSeleccionada){
    const autores = this.obraSeleccionadaSubject.value;

    autores.push(autor);
    this.obraSeleccionadaSubject.next(autores);
    localStorage.setItem(this.localStorageKeyAutor, JSON.stringify(autores));
  }

  obtenerAutor(): Observable<ObraSeleccionada[]> {
    return this.obraSeleccionadaSubject.asObservable();
  }

  obtenerObra(): Observable<Obra[]> {
    return this.tituloSeleccionadoSubject.asObservable();
  }
}
