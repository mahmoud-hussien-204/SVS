import { useContext } from 'react'
import { ProfileContext } from '../providers/ProfileProvider'

function useUserProfile() {
  return useContext(ProfileContext)
}

export default useUserProfile