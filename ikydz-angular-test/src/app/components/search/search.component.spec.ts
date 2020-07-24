import { async, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { DataService } from '../../services/data.service';

describe('SearchComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should not be valid if search box is empty', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const search = fixture.componentInstance;
    fixture.detectChanges();
    search.searchForm.controls.searchCountry.setValue('');
    expect(search.searchForm.controls.searchCountry.valid).toBeFalsy();
  });

  it('should trigger the changeCountryName function', async(inject([DataService], (service: DataService) => {
    const fixture = TestBed.createComponent(SearchComponent);
    const search = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(search.service, 'changeCountryName').and.callThrough();
    search.searchForm.controls.searchCountry.setValue('Uk');
    expect(search.service.changeCountryName).toHaveBeenCalled();
  })));

});
