import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActorService } from 'src/app/services/actor.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css'],
})
export class CreateActorComponent implements OnInit {
  @Input() selectedCountry: Country | null = null;
  public title: string = 'Alta de película | Modifcar ';

  public formActor: FormGroup;

  constructor(private actorService: ActorService, private fb: FormBuilder) {
    this.formActor = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(99),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  sendForm() {
    console.log(this.formActor.getRawValue());
    // const { name: countryName, flag: flagImage } = this.selectedCountry;
    // const { nombre, apellido, edad, email } = this.formActor.value;
    // const newActor = {
    //   nombre,
    //   apellido,
    //   edad,
    //   email,
    //   countryName,
    //   flagImage,
    // };
    // this.formActor.reset();
    // this.paisSeleccionado = null;
    // this.actorService.addActor(newActor);
  }
}
