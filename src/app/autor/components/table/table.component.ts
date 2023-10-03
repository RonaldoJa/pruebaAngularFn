import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutorService } from '../../service/autor.service';
import { Autor } from '../../interface/autor.interface';
import { Obra } from '../../interface/obra.interface';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
 

  @Output() autorSeleccionado = new EventEmitter<string>();

  @Input()
  autores: string[] = [];

  @Input()
  obras: Obra[] = [];

  constructor(private autorService: AutorService, public dialog: MatDialog) {}

  abrirModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { obras: this.obras }, // Pasar las obras como datos al modal
    });
    

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  seleccionarAutor(autor: string) {
    this.autorSeleccionado.emit(autor);

  }

  seleccianarAutorPorIndex(index: number) {
    const autorSeleccionado = this.obras[index];
    console.log(this.autores[index]);
  }


  agregarFavoritoAutor() {

  }


}
