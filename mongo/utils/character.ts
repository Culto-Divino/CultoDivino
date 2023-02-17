import { createHash } from 'node:crypto'
import Archetype from './archetype'

enum Sex {
  'Masculino',
  'Feminino',
}

export default function createCharacterDataObject(
  characterId: string,
  age: number,
  name: string,
  aliases: [string],
  element: string,
  sex: Sex,
  archetype: Archetype

  // atributes: [{ name: [string]; value: [number]; bonuses: [string] }]
) {
  let data

  // Propriedades
  // data.version = config.CHARACTER_SHEET_VERSION
  data.characterId = characterId
  data.name = name
  data.age = age
  data.aliases = aliases
  data.element = element
  data.notes = []
  data.documents = []
  data.archetype = archetype
  data.class = archetype.parentClass
  data.sex = sex

  // data.atributes = atributes.forEach((atribute) => {
  //   generateAtribute
  // })

  // Métodos
  // data.verifyVersion = () => {
  //   if (data.version === config.CHARACTER_SHEET_VERSION) {
  //     return true
  //   }
  //   return false
  // }
  data.createNote = (name, content) => {
    data.notes.push({
      name,
      content,
      id: createHash('sha256').update(Date.now().toString()),
    })
  }
  data.deleteNote = (id) => {
    data.notes = data.notes.filter((note) => {
      return note.id === id
    })
  }

  return data
}

// function generateAtribute(name: string, value: number, bonuses: string) {
//   if (value >= maxAtributeValue) {
//     throw new Error('Atribute value is greater than maximum.')
//   }

//   const atribute = { name, value, bonuses }

//   return atribute
// }
