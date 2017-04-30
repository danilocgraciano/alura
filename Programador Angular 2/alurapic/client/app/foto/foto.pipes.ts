import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(list: FotoComponent[], filter: string) {
        filter = filter.toLowerCase();
        return list.filter(foto => foto.titulo.toLowerCase().includes(filter));
    }


}