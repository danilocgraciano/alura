import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FotoModule } from "./foto/foto.module";
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

@NgModule({//transforma esta classe em um módulo do angular, com isso ela pode importar outros módulos também anotados com NgModule
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule,
        ModalModule
    ],
    declarations: [AppComponent, ListagemComponent, CadastroComponent],//lista os componentes que serão utilizados na aplicação
    bootstrap: [AppComponent]//primeiro componente a ser chamado
})
export class AppModule { }