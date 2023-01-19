import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static _numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._numberOfInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._numberOfInstances;
  }
}

// import { EnergyType } from '../Energy';
// import Archetype from './Archetype';

// export default class Mage extends Archetype {
//   private _energyType: EnergyType;
//   static _numberOfInstances = 0;

//   constructor(name: string) {
//     super(name);
//     this._energyType = 'mana';
//   }
  
//   get energyType(): EnergyType {
//     return this._energyType;
//   }

//   static createdArchetypeInstances() {
//     this._numberOfInstances += 1;
//     return this._numberOfInstances;
//   }
// }