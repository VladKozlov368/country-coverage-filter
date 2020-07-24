import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DEFAULT_SEARCH_STRING} from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public countryNameSource = new BehaviorSubject<string>(DEFAULT_SEARCH_STRING);
  public currentCountryName = this.countryNameSource.asObservable();

  public changeCountryName(country: string): void {
    this.countryNameSource.next(country);
  }
}
