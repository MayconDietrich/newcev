import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoId?: string;

  urlVideo?: string;
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): any {
    this.urlVideo = `https://www.youtube.com/embed/${this.videoId}`;
  }

}
