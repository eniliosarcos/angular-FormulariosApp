import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal gear', Validators.required],
      ['Death Stranding', Validators.required]
    ],Validators.required)
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  get favoritosArr(){

    return this.miFormulario.get('favoritos') as FormArray;
  }
  
  borrar(id: number){
    
    this.favoritosArr.removeAt(id);
  }

  agregarFavorito(){

    if(this.nuevoFavorito.invalid){

      return;
    }

    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
  guardar(){

    if(this.miFormulario.invalid){

      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

}
