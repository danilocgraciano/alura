import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    myForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.service
                    .findById(id)
                    .subscribe((foto) => {
                        this.foto = foto;
                    }, (error) => console.log(error));

            }
        });

        this.myForm = fb.group({
            titulo: ['',
                Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event: Event) {
        event.preventDefault();

        this.service
            .cadastra(this.foto)
            .subscribe((resp) => {
                this.mensagem = resp.mensagem;
                this.foto = new FotoComponent();
                if (!resp.inclusao)
                    this.router.navigate(['']);

            }, (error) => console.log(error));

    }

}