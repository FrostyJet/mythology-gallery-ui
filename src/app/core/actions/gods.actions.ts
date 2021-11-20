import { createAction, props } from '@ngrx/store';
import { God, GodDetails } from '../models/gods.model';

export const setGods = createAction('[Gods Set]', props<{ gods: God[] }>());

export const setPreviewGod = createAction(
  '[GodsPreview Set]',
  props<{ previewGod: GodDetails }>()
);
