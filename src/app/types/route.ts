export interface Route {
  id: number;
  tagSkill?: string[];
  capacity: number;
  workingTimeStart: Date;
  workingTimeEnd: Date;
  breakTimeStart: Date;
  breakTimeEnd: Date;
  maxTask?: Date;
  //   driver?: Driver;
}

export interface Driver {
  id: number;
  name: string;
  //any other information here,but i think is not important now
}
