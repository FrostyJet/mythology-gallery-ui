export interface God {
  id: number;
  name: string;
  title: string;
  free: string;
  new: string;
  pantheon: string;
  pros: string;
  type: string;
  role: string;
  pantheon_EN: string;
  god_name_EN: string;
  role_EN: string;

  _card: string;

  get card(): string;
  set card(data: string);
}

export class GodEntity implements God {
  id: number;
  name: string;
  title: string;
  free: string;
  new: string;
  pantheon: string;
  pros: string;
  type: string;
  role: string;
  pantheon_EN: string;
  god_name_EN: string;
  role_EN: string;

  _card: string;

  get card() {
    return this._card.replace("'", '');
  }

  set card(data: string) {
    this._card = data;
  }

  constructor(data: God) {
    this.id = data.id;
    this.name = data.name;
    this.title = data.title;
    this.free = data.free;
    this.new = data.new;
    this.pantheon = data.pantheon;
    this.pros = data.pros;
    this.type = data.type;
    this.role = data.role;
    this.pantheon_EN = data.pantheon_EN;

    this.god_name_EN = data.god_name_EN;
    this.role_EN = data.role_EN;
    this._card = data.card;
  }
}

type Skin = {
  name: string;
  type: string;
  image: string;
  favor: number;
  gems: number;
};

type Ability = {
  id: number;
  summary: string;
  url: string;
  description: string;
};

export interface GodDetails {
  id: number;
  date: string;
  slug: string;
  name: string;
  status: string;
  template: string;
  role: string;
  title: string;
  type: string;
  lore: string;
  pantheon: string;
  header_image: string;
  abilities: Ability[];
  skins: Skin[];
}
