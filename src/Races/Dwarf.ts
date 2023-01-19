import Race from './Race';

export default class Dwarf extends Race {
  readonly maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
  }

  createdRacesInstances() {
    return this.createdRacesInstances;
  }
}