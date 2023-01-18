export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances(instances: number):number {
    if (!instances) {
      throw new Error('Not implemented');
    }
    return instances;
  }

  abstract get maxLifePoints(): number; 
}
