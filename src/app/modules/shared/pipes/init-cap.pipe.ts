import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "initCap"
})
export class InitCapPipe implements PipeTransform {

  transform(value): string { // , args?: any[]) {
    if (value && isNaN(value)) {
        return value
            .toLowerCase()
            .replace(/(?:^|\s)[a-z]/g, (m) => {
                return m.toUpperCase();
            });
    } else {
        return value;
    }
  }
}
