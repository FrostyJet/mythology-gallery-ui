import { createReducer, on } from '@ngrx/store';
import { setGods, setPreviewGod } from '../actions/gods.actions';
import {
  God,
  GodDetails,
  GodDetailsEntity,
  GodEntity,
} from '../models/gods.model';

export const initialState: {
  gods: GodEntity[];
  previewGod: GodDetailsEntity | null;
} = {
  gods: [],
  previewGod: null,
};

export const godsReducer = createReducer(
  initialState,
  on(setGods, (state, { gods }) => {
    return {
      ...state,
      gods: gods.map((god) => new GodEntity(god)),
    };
  }),
  on(setPreviewGod, (state, { previewGod }) => ({
    ...state,
    previewGod: new GodDetailsEntity(previewGod),
  }))
);
