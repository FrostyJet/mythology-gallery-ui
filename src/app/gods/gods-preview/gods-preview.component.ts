import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { setPreviewGod } from 'src/app/core/actions/gods.actions';
import { GodsService } from 'src/app/core/services/gods.service';

@Component({
  selector: 'app-gods-preview',
  templateUrl: './gods-preview.component.html',
  styleUrls: ['./gods-preview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GodsPreviewComponent implements OnInit {
  constructor(
    private godsService: GodsService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  godDetails$ = this.store.select((state) => state.gods.previewGod);

  ngOnInit(): void {
    const godSlug = this.route.snapshot.paramMap.get('slug');

    if (godSlug) {
      this.godsService.getGodDetails(godSlug).subscribe((res: any) => {
        console.log(res);

        this.store.dispatch(setPreviewGod({ previewGod: res }));
      });
    }
  }
}
