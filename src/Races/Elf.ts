import Race from './Race';

export default class Elf extends Race {
  readonly maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
  }
}