import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  public static _numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._numberOfInstances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return this._numberOfInstances;
  }
}