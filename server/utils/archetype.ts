export const CharacterClass = {
  Investigador: { name: 'Investigador' },
  Guerreiro: { name: 'Guerreiro' },
  Academico: { name: 'Acadêmico' },
  Ocultista: { name: 'Ocultista' },
}

export default class Archetype {
  name: string
  parentClass: object

  constructor(name: string, parentClass: object) {
    this.name = name
    this.parentClass = parentClass
  }

  static archetypeFromObject(object) {
    if (object.name && object.parentClass) {
      return new Archetype(object.name, object.parentClass)
    }
  }
}
