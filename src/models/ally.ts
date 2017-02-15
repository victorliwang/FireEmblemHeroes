export class Ally {
  name: string;
  rarity?: number; //1-5
  level?: number; //1-40
  attribute: string; //red, green, blue, neutral
  weapon: string; //sword, lance, tome, axes, beast, bow, staff, shuriken, etc...
  movement: string; //armored, cavalry, flying, infantry
  //can make an array of types
  //red green blue gray
  //and their subtypes
  constructor(
    name: string,
    attribute: string, //red, green, blue, neutral
    weapon: string, //sword, lance, tome, axes, beast, bow, staff, shuriken, etc...
    movement: string,
    rarity?: number, //1-5
    level?: number //1-40
  ) { }
}
