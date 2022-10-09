import { Component, Input  } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-twiterpost',
  templateUrl: './twiter-post.component.html',
  styleUrls: ['./twiter-post.component.scss'],
})
export class TwiterPostComponent {

  faTwitter = faTwitter;
  @Input() baseHref = 'https://www.DylanIsrael.com';
  @Input() hashTags: string[] = ['DylanIsrael', 'Javascript', 'TypeScript', 'Angular', '100 Angular Challenge'];

  constructor( public titleService: Title) {}

  public get twiterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`check out ${this.titleService.getTitle()} and become a CODING GOD!!!!!`);
    return `${base}${message}`;

  }

  getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}&text=`;
  }


}
