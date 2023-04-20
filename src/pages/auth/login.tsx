import Layout from '@/components/Layout'
import { authService } from '@/services/authService'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

type Props = {}

export default function Login({}: Props) {
  const [user] = useAuthState(auth)
  const router = useRouter()

  async function googleLogin() {
    try {
      const result = await authService.loginWithGoogle()

      if (result.user) {
        router.push('/dashboard')

        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function facebookLogin() {
    try {
      const result = await authService.loginWithFacebook()

      if (result.user) {
        router.push('/dashboard')

        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      router.push('/dashboard')

      return
    } else {
      router.push('/auth/login')
    }
  }, [user])

  return (
    <Layout>
      <div className="shadow-2xl mt-16 md:mt-32 p-10 text-gray-700 max-w-xl mx-auto rounded-md">
        <h1 className="text-2xl font-bold">
          Sign in with one of the providers
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          <button
            className="flex items-center gap-2 p-6 bg-slate-200 rounded-xl text-md"
            onClick={googleLogin}
          >
            <FcGoogle className="text-4xl" />
            <span className="font-semibold">Sign in with Google</span>
          </button>
          <button
            className="flex items-center gap-2 p-6 bg-slate-200 rounded-xl text-md"
            onClick={facebookLogin}
          >
            <AiFillFacebook className="text-4xl text-blue-900" />
            <span className="font-semibold">Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </Layout>
  )
}
