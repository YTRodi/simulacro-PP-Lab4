import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/interfaces/actor';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css'],
})
export class CreateActorComponent implements OnInit {
  //! Lo traigo acá para modificar...
  //! Lo traigo acá para modificar...
  //! Lo traigo acá para modificar...
  //! Lo traigo acá para modificar...
  @Input() selectedActor: Actor | null = null;
  @Input() selectedCountry: Country | null = null;
  public title: string = 'Alta de película | Modifcar ';

  public formActor: FormGroup;

  constructor(private actorService: ActorService, private fb: FormBuilder) {
    this.formActor = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl(18, [
        Validators.required,
        Validators.min(18),
        Validators.max(99),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  sendForm() {
    this.actorService.addActor(<Actor>{
      ...this.formActor.getRawValue(),
      nacionality: this.selectedCountry,
    });

    this.selectedCountry = null;
    this.formActor.reset();
  }
}
