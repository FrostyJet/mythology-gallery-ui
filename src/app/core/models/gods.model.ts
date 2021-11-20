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

type FrontendInfo = {
  id: number;
  name: string;
  pantheon: string;
  role: string;
  type: string;
};

type Ability = {
  Description: {
    itemDescription: {
      cooldown: string;
      cost: string;
      description: string;
    };
  };
  Id: number;
  Summary: string;
  URL: string;
};

export interface GodDetails {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  template: string;
  api_information: {
    Ability1: string;
    Ability2: string;
    Ability3: string;
    Ability4: string;
    Ability5: string;
    Ability_1: Ability;
    Ability_2: Ability;
    Ability_3: Ability;
    Ability_4: Ability;
    Ability_5: Ability;
    Pros: string;
    Roles: string;
    Title: string;
    Type: string;
    Lore: string;
    godAbility1_URL: string;
    godAbility2_URL: string;
    godAbility3_URL: string;
    godAbility4_URL: string;
    godAbility5_URL: string;
    godCard_URL: string;
    godIcon_URL: string;
    id: number;
    latestGod: string;
  };
  frontend_info: FrontendInfo;
  skins: Skin[];
  acf: {
    god_id: number;
    god_header_image: string;
  };
}

export class GodDetailsEntity implements GodDetails {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  template: string;
  api_information: {
    Ability1: string;
    Ability2: string;
    Ability3: string;
    Ability4: string;
    Ability5: string;
    Ability_1: Ability;
    Ability_2: Ability;
    Ability_3: Ability;
    Ability_4: Ability;
    Ability_5: Ability;
    Pros: string;
    Roles: string;
    Title: string;
    Type: string;
    Lore: string;
    godAbility1_URL: string;
    godAbility2_URL: string;
    godAbility3_URL: string;
    godAbility4_URL: string;
    godAbility5_URL: string;
    godCard_URL: string;
    godIcon_URL: string;
    id: number;
    latestGod: string;
  };
  frontend_info: FrontendInfo;
  skins: Skin[];
  acf: {
    god_id: number;
    god_header_image: string;
  };

  constructor(data: GodDetails) {
    this.id = data.id;
    this.date = data.date;
    this.slug = data.slug;
    this.status = data.status;
    this.type = data.type;
    this.link = data.link;
    this.title = data.title;
    this.template = data.template;
    this.api_information = data.api_information;
    this.frontend_info = data.frontend_info;
    this.skins = data.skins;
    this.acf = data.acf;
  }

  get abilities(): Ability[] {
    return [
      this.api_information.Ability_1,
      this.api_information.Ability_2,
      this.api_information.Ability_3,
      this.api_information.Ability_4,
      this.api_information.Ability_5,
    ];
  }
}
