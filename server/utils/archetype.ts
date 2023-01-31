enum CharacterClass {
  'investigador',
  'guerreiro',
  'acadêmico',
  'ocultista',
}

export default class Archetype {
  name: string
  parentClass: CharacterClass

  constructor(name: string, parentClass: CharacterClass) {
    this.name = name
    this.parentClass = parentClass
  }

  static archetypeFromObject(object) {
    if (object.name && object.parentClass) {
      return new Archetype(object.name, object.parentClass)
    }
  }
}
