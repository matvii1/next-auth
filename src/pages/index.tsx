import Loader from '@/components/Loader'
import { auth } from '@/utils/firebase'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  if (loading) {
    return <Loader />
  }

  if (!user) {
    console.log('here')

    router.push('/auth/login')
  } else {
    router.push('/dashboard')
  }

  return
}
