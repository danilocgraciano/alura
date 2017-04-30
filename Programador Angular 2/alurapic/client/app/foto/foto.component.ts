import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,//Faz com que o componente procure o template relativo à sua pasta.
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent {

    @Input() url: string;
    @Input() titulo: string;
    descricao: string;
}