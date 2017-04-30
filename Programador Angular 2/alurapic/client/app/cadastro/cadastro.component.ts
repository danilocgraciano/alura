import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    http: Http;
    myForm: FormGroup;

    constructor(http: Http, fb: FormBuilder) {
        this.http = http;

        this.myForm = fb.group({
            titulo: ['', 
                    Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event: Event) {
        event.preventDefault();

        let headers = new Headers();
        headers.append('Content-type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
            }, (error) => console.log(error));

    }

}