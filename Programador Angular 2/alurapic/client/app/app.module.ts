import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from "./foto/foto.module";
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({//transforma esta classe em um módulo do angular, com isso ela pode importar outros módulos também anotados com NgModule
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent, ListagemComponent, CadastroComponent],//lista os componentes que serão utilizados na aplicação
    bootstrap: [AppComponent]//primeiro componente a ser chamado
})
export class AppModule { }