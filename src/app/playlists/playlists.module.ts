import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form.component';
import { PlaylistListComponent } from './playlist-list.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistsService } from './playlists.service';

import playlistsData from './playlists.data';
import { routerModule } from './playlists.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routerModule
  ],
  declarations: [PlaylistsComponent, ContentCardComponent,
    PlaylistFormComponent,
    PlaylistListComponent,
    PlaylistDetailComponent],
  exports: [PlaylistsComponent],
  providers: [
    // { provide: PlaylistsService, useClass: ExtendedPlaylistsService }
    PlaylistsService,
    { provide: 'PlaylistsData', useValue: playlistsData }
  ]
})
export class PlaylistsModule { }
