import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  min!: number
  max!: number

  form = new FormGroup({
    sliderVal: new FormControl(20)
  })

  constructor() { }

  ngOnInit(): void {
    this.min = 20
    this.max = 30
    this.form.controls.sliderVal.setValidators([Validators.min(this.min), Validators.max(this.max)])
    this.form.controls.sliderVal.updateValueAndValidity
  }

  handleChange(e: any) {
    const value = e.value
    this.form.patchValue({ sliderVal: parseInt(value) })
  }

  updateInput(e: any) {
    const target = e.target as HTMLInputElement
    const { value } = target
    this.form.patchValue({ sliderVal: parseInt(value) })
  }
}
