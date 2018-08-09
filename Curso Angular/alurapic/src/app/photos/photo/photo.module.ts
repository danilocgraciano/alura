import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo.component';
import { PhotoService } from './photo.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PhotoComponent
    ],
    providers: [PhotoService],
    exports: [PhotoComponent]
})
export class PhotoModule { }
