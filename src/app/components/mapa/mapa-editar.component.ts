 import { Component, Inject, OnInit, } from '@angular/core';
 import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

 import { FormBuilder, FormGroup} from '@angular/forms';
 

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {
  
  forma: FormGroup;

  constructor( 
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) { 

    console.log(data);
    this.forma = fb.group({
      'titulo': data.title,
      'desc': data.description
    });
   }

  ngOnInit(): void {
  }

  guardarCambios(){
    
    this.dialogRef.close(this.forma.value);
  }
  onNoClick(): void{
    this.dialogRef.close();
  }

}
