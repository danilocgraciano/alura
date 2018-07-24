import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoService } from './photo/photo.service';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent],
  providers: [PhotoService]
})
export class PhotosModule { }
