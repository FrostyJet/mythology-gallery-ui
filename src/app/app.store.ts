import { God, GodDetails, GodDetailsEntity } from './core/models/gods.model';

export interface AppState {
  gods: {
    gods: God[];
    previewGod: GodDetailsEntity;
  };
}
