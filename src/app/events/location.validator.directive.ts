import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { count } from 'rxjs/operators';

@Directive({
  selector: 'ValidateLocation',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})

export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): {[key: string]: any} {
    let addressControl = formGroup.controls.address;
    let cityControl = formGroup.controls.city;
    let countryControl = formGroup.controls.country;
    let onlineUrlControl = ( <FormGroup>formGroup.root as FormGroup).controls.onlineUrl;

    if ((addressControl && addressControl.value && cityControl && cityControl.value)
      && (onlineUrlControl && onlineUrlControl.value && countryControl && countryControl.value)) {
        return null;
      } else {
      return { appValidateLocation: false};
    }
  }


}
