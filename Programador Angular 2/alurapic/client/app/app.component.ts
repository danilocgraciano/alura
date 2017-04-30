import { Component } from '@angular/core';

@Component({
    moduleId: module.id,//Faz com que o componente procure o template relativo à sua pasta.
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent { }