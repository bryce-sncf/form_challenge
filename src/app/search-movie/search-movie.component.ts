import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {
  searchForm: FormGroup;
  isFormSubmitted = false;
  minYear: number;
  maxYear: number;

  constructor(private formBuilder: FormBuilder) {
    this.minYear = 1900;
    this.maxYear = new Date().getFullYear();

    this.searchForm = this.formBuilder.group({
      identifiers: this.formBuilder.group({
        id: '',
        title: ''
      }, { validator: this.isRequiredValidator }),
      type: ['series'],
      releaseYear: ['', [Validators.required, this.rangeDateValidator(this.minYear, this.maxYear)]],
      fiche: ['courte']
    });
  }

  isRequiredValidator(control: AbstractControl) {
    const id = control.get('id')?.value;
    const title = control.get('title')?.value;

    if (!id && !title) {
      return { isRequired: true };
    }

    return null;
  }

  rangeDateValidator(minYear: number, maxYear: number) {
    return (control: AbstractControl) => {
      const value = control.value;

      if (value && (isNaN(value) || value < minYear || value > maxYear)) {
        return { min: { minYear, maxYear } };
      }

      return null;
    };
  }
  

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    }
  }
}
