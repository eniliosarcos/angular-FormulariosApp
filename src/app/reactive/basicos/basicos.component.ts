import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 3080'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [,[Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //esto sirve para ponerle valores a los campos desde el backend
    // this.miFormulario.reset({
    //   nombre: 'rtx 3080',
    //   precio: 1600
    // })
  }

  campoEsValido(campo: string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){

      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

}
