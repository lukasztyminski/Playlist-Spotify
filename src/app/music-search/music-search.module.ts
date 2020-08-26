import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumCardComponent } from './album-card.component';
import { MusicSearchService } from './music-search.service';
import { AlbumSearchFormComponent } from './album-search-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MusicSearchComponent, AlbumListComponent, AlbumCardComponent, AlbumSearchFormComponent],
  exports: [MusicSearchComponent],
  providers: [MusicSearchService]
})
export class MusicSearchModule { }
