import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent {

  constructor(private readonly  formBuilder: NonNullableFormBuilder) {
  }

  form = this.formBuilder.group({
    firstName: ['', { validators: [Validators.required]}],
    lastName: ['', { validators: [Validators.required]}],
    userName: ['', { validators: [Validators.required]}],
    state: ['', { validators: [Validators.required]}],
    city: ['', { validators: [Validators.required]}],
    zip: ['', { validators: [Validators.required]}],
    check: [false, Validators.requiredTrue]
  });




   cityByState: tCityOption = {
    "AURA": ["Grenoble", "Lyon", "Saint-Etienne", "Clermont", "Chambéry"],
    "PACA": ["Marseille", "Nice", "Toulon", "Aix-en-provence"]
  }

  cities: string[] = []
  angForm: any;
  isValidated = false;
  submitted= false;


  onChange(event: any) {
    console.log(event.target.value);
    const state = event.target.value
    this.cities = this.cityByState[state]
    return [];
  }

  validate() {
    this.isValidated = true;
  }

  submit() {
    this.submitted = true
    console.log("Appelé")
  }
}

type tCityOption = {
  [key: string]: string[]
}
