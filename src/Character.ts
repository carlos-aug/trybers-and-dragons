import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;

  constructor(name: string) {
    this.dexterity = getRandomInt(1, 10);
    this.race = new Elf(name, this.dexterity);
    this.archetype = new Mage(name);
    this.maxLifePoints;
    this.lifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.energy = {
      type_: this.archetype.energyType,
    };
  }
    attack(enemy: Fighter): void {
        throw new Error('Method not implemented.');
    }
    special?(enemy: Fighter): void {
        throw new Error('Method not implemented.');
    }
    levelUp(): void {
        throw new Error('Method not implemented.');
    }
    receiveDamage(attackPoints: number): number {
        throw new Error('Method not implemented.');
    }
}