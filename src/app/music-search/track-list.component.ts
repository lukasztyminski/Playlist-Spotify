import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  @Input()
  tracks

  currentSrc = '';

  constructor() { }

  ngOnInit() {
  }

  play(audio, track) {
    audio.volume = 0.1;

    if (audio.src != track.preview_url) {
      audio.src = track.preview_url;
      audio.play();
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

}
