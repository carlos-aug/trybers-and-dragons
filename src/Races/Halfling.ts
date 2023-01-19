import Race from './Race';

export default class Halfling extends Race {
  readonly maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }
}