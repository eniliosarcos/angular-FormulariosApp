import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero:['M', Validators.required],
    notificaciones:[true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      ...this.persona,
      terminos: true
    });

    this.miFormulario.valueChanges.subscribe(form =>{

      delete form.terminos;

      this.persona = form;
    });

    // this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) =>{
    //   this.persona = rest;
    // });
  }

  guardar(){

    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;

    this.persona = formValue;
  }

}
