import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(public service: DataService,
              private _fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.initSearchForm();
    this.initSearchFormListeners();
  }

  public initSearchForm(): void {
    this.searchForm = this._fb.group({
      searchCountry: [null, Validators.required]
    });
  }

  public initSearchFormListeners(): void {
    this.searchForm.get('searchCountry').valueChanges.subscribe((country: string) => {
      this.service.changeCountryName(country);
    });
  }
}
