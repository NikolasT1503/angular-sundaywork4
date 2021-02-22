import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
/* import * as dataProfile  from '../../assets/profile'; */
const dataProfile = require('../../assets/profile.json');

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {

  data: {name: string; phones: Array<string>} = dataProfile;
  form: FormGroup;

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(this.data.name,Validators.required),
      phones: this.fb.array(this.data.phones.map(phone => [phone]))
    })

  }

  get getPhones() {
    return this.form.get('phones') as FormArray;
  }





}
