import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  juego: string = '';

  persona: Persona = {
    nombre: 'enilio',
    favoritos: [
      {id: 1, nombre: ' Metal gear'},
      {id: 2, nombre: ' Death Stranding'}
    ]
  }

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {

    return this.miFormulario?.controls.nombre?.errors! && this.miFormulario?.controls.nombre?.touched;
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){

    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.juego
    }

    this.persona.favoritos.push({...nuevoJuego});
    this.juego = '';
  }

  guardar(miFormulario: NgForm){
    console.log(miFormulario.value)
  }
}
