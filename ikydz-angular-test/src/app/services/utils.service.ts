import { Injectable } from '@angular/core';

export const DEFAULT_SEARCH_STRING = '';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  /**
   * Converts all the alphabetic characters in a string to lowercase.
   * Removes the leading and trailing white space and line terminator characters from a string.
   * @param name - name
   */
  public static convertNameToLowerCaseWithTrim(name: string): string {
    return name.toLowerCase().trim();
  }

  /**
   * Find out if the name contains the string we are looking for.
   * @param name - some string where we looking
   * @param searchString - the string we are looking for
   */
  public static isNameContainSearchString(name: string, searchString: string): boolean {
    return UtilsService.convertNameToLowerCaseWithTrim(name)
      .indexOf(UtilsService.convertNameToLowerCaseWithTrim(searchString)) >= 0;
  }

  /**
   * Filter names by the string specified in the search.
   * @param searchString - the string we are looking for
   */
  public static filterNames(searchString: string): any {
    return (country: string) => {
      return UtilsService.isNameContainSearchString(country, searchString);
    };
  }
}
