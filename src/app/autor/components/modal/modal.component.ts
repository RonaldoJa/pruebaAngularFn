import { Component, Inject, Input } from '@angular/core';
import { Obra } from '../../interface/obra.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import { AutorService } from '../../service/autor.service';
import { ObraSeleccionada } from '../../interface/obraSeleccionada.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() obras: Obra[] = [];
  modalAbierto = true;
  titulo! : ObraSeleccionada[];
  showErrorAlert: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private autorService: AutorService) {
    // Accede a las obras a través de data
    if (data && data.obras) {
      this.obras = data.obras;
    }
  }

  ngOnInit(): void {
    console.log('Datos en modal', this.obras);
  }

  abrirModal() {
    this.modalAbierto = true;
  }
  
  cerrarModal() {
    this.modalAbierto = false;
  }

  getTitle(index: number) {
    const titulo = this.obras[index].title.toString();
    

    this.autorService.getObraSeleccionada(titulo).subscribe((data: ObraSeleccionada[]) => {
      this.titulo = data;
      console.log(this.titulo[0].lines[0])
      this.showErrorAlert = true;
    })

  }

}
