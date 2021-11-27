import { God, GodDetails } from './core/models/gods.model';

export interface AppState {
  gods: {
    gods: God[];
    previewGod: GodDetails;
  };
}
