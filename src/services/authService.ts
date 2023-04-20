import { auth } from '@/utils/firebase'
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'

export const authService = {
  async loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, googleProvider)

    return result
  },
  async loginWithFacebook() {
    const fbProvider = new FacebookAuthProvider()
    const result = await signInWithPopup(auth, fbProvider)
    const credential = await FacebookAuthProvider.credentialFromResult(result)
    const accessToken = credential?.accessToken
    const photoUrl =
      result.user.photoURL + '?height=500&access_token=' + accessToken

    await updateProfile(auth.currentUser!, {
      photoURL: photoUrl,
    })

    return result
  },
  signOut() {
    auth.signOut()
  },
}
