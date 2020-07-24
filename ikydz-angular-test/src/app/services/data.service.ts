import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public countryNameSource = new BehaviorSubject<string>('');
  public currentCountryName = this.countryNameSource.asObservable();

  public changeCountryName(country: string): void {
    // complete this function to notify components
  }
}
