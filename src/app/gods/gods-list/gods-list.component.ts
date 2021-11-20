import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { setGods } from 'src/app/core/actions/gods.actions';
import { GodsService } from 'src/app/core/services/gods.service';

@Component({
  selector: 'app-gods-list',
  templateUrl: './gods-list.component.html',
  styleUrls: ['./gods-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GodsListComponent implements OnInit {
  loading: boolean | undefined;

  constructor(
    private godsService: GodsService,
    private store: Store<AppState>
  ) {}

  gods$ = this.store.select((state) => state.gods.gods);

  ngOnInit(): void {
    this.store
      .select((state) => state.gods)
      .subscribe((state) => {
        console.log(state);
      });

    this.loading = true;
    this.godsService.getGods().subscribe((gods: any) => {
      this.store.dispatch(setGods({ gods }));
      this.loading = false;
    });
  }
}
