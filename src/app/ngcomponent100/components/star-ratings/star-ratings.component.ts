import { Component, Input } from "@angular/core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-starrating',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent {

  @Input() rating = 2.7;

  faStar = faStar;
  faHalfStar = faStarHalfStroke;
  emptyStar = emptyStar;

  get fullStars(): number[] {
      const totalFullStars = Math.floor(this.rating);
      return Array(totalFullStars).fill(0);
  }

  get halfStar(): boolean {
    const highestRating = 5;
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;
    return hasHalfStar;

  }

  get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStarts = Math.floor(highestRating - this.rating);
    return Array(totalEmptyStarts).fill(0);
  }




}
