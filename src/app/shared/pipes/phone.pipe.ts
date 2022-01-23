import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phonePipe"
})
export class PhonePipe implements PipeTransform {
  transform(fullPhone: string): any {
    return fullPhone
      .substring(4);
  }
}