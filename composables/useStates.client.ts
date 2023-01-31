export const useSelectedCharacter = () =>
  useState('selectedCharacter', () => {
    return { id: undefined }
  })
export const useArchetypes = () => useState('archetypes')
// export const useUserData = useState('userData')
