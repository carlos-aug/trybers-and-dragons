import Race from './Race';

export default class Orc extends Race {
  readonly maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
  }
}