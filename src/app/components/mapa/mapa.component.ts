import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../clases/marcador.class';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat= 40.45900891164625
  lng= -3.6898891251085253
  
  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog) { 

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores') || '{}' );
    } 
  
  }

  ngOnInit(): void { }

  agregarMarcador(evento: any){

    const coords:{ lat: number, lng: number} = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

    console.log(this.marcadores)

    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'cerrar', {duration: 3000});

   
  }

  guardarStorage(){

    localStorage.setItem('marcadores', JSON.stringify(this.marcadores) );
  }

  borrarMarcador(i:number){

    this.marcadores.splice(i, 1);
    this.guardarStorage();
    
    this.snackBar.open('Marcador borrado', 'cerrar', {duration: 3000});
  }

  editarMarcador(marcador: Marcador) {

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.title, desc: marcador.description }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if (!result) {
        return;
      }
      marcador.title = result.titulo;
      marcador.description = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'cerrar', {duration: 3000});
    });
  }

}
