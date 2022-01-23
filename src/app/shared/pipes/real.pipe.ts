import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "realPipe"
})
export class RealPipe implements PipeTransform {
  transform(value: string): any {
    return value.split('BRL').join("R$");
  }
}