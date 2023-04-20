import Dashboard from '@/components/Dashboard'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

export default function dashboard({}: Props) {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  if (loading) {
    return <Loader />
  }

  if (!user) {
    router.push('/auth/login')

    return
  }

  return (
    <Layout>
      <main>
        <p className="text-2xl text-center mt-10 ">
          Upgrade your Web Development today!
        </p>
        <h1 className="text-center mt-2">Learn with the latest tech</h1>
      </main>

      <Dashboard />
    </Layout>
  )
}
