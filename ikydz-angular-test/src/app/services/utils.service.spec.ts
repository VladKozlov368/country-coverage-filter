import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be converted upper case string with spaces to lowercase without white spaces', () => {
    const convertedString = UtilsService.convertNameToLowerCaseWithTrim(' Some String ');
    expect(convertedString).toEqual('some string');
  });

  it('should check the name contained in the search string', () => {
    expect(UtilsService.isNameContainSearchString('Andorra', 'Andorra')).toBeTrue();
    expect(UtilsService.isNameContainSearchString('Andorra', 'andorra')).toBeTrue();
    expect(UtilsService.isNameContainSearchString('Andorra', '')).toBeTrue();
    expect(UtilsService.isNameContainSearchString('Andorra', 'another')).toBeFalse();
  });

  it('should check if the name filter is working properly', () => {
    const names = ['Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Barbados'
      , 'Belarus', 'Bulgaria', 'Denmark', 'Faroe Islands', 'Gibraltar', 'Hungary', 'Madagascar'
      , 'Nicaragua', 'Paraguay', 'Qatar', 'San Marino', 'Saudi Arabia', 'United Arab Emirates'];

    expect(names.filter(UtilsService.filterNames('')).length === 18).toBeTrue();
    expect(names.filter(UtilsService.filterNames('aruba')).length === 1).toBeTrue();
    expect(names.filter(UtilsService.filterNames('another')).length === 0).toBeTrue();
    expect(names.filter(UtilsService.filterNames('ar'))).toEqual(['Argentina', 'Armenia', 'Aruba']);
  });
});
