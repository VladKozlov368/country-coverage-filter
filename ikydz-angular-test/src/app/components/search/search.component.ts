import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchForm?: FormGroup;

  constructor(public service: DataService,
              private _fb: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    // add corresponding validators
    this.searchForm = this._fb.group({
      searchCountry: [null]
    });

    this.searchForm.get('searchCountry').valueChanges.subscribe(val => {
      console.log(val);
    });
  }
}
