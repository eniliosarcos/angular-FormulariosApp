import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { emailPattern, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
// import { noPuedeSerEjsp } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['',[Validators.required, this.validatorService.noPuedeSerEjsp]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    confirmar: ['',[Validators.required ]],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'confirmar')]
  });

  get emailErrorMsg(): string {

    const errores = this.miFormulario.get('email')?.errors;
    if(errores?.required){
      return 'email es obligatorio';
    } else if(errores?.pattern){
      return 'el valor ingresado no tiene formato de correo';
    } else if(errores?.emailTomado){
      return 'el email ya fue tomado';
    }

    return '';
  }

  constructor(private formBuilder: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'enilio sarcos',
      email: 'test1@test.com',
      username: 'ejsp93',
      password: '123456',
      confirmar: '123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){

    this.miFormulario.markAllAsTouched();
  }

}
