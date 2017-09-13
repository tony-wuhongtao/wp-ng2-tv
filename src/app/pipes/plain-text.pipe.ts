import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plainText'
})
export class PlainTextPipe implements PipeTransform {

  transform(html: string): string {
    return html.replace(/<\/?[^>]+>/ig, " ");
  }

}

