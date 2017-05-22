import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from "../painel/painel.component";

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(elements => {
                this.fotos = elements;
            }, err => console.log(err));

    }

    remove(foto: FotoComponent, painel: PainelComponent) {
        this.service
            .remove(foto)
            .subscribe(elements => {
                painel.fadeOut(()=>{
                    let newArray = this.fotos.slice(0);
                    let index = newArray.indexOf(foto);
                    newArray.splice(index, 1);
                    this.fotos = newArray;
                    this.mensagem = 'Foto removida com sucesso!';
                });
            }, err => {
                console.log(err);
                this.mensagem = 'Não foi possível remover a foto!';
            });
    }
}