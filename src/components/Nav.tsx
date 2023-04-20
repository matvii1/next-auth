import { authService } from '@/services/authService'
import { auth } from '@/utils/firebase'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

export default function Nav({}: Props) {
  const [user, loading] = useAuthState(auth)

  function onSignOut() {
    authService.signOut()
  }

  return (
    <nav className="flex items-center justify-between py-8">
      <Link href="/">
        <Image src="/favicon.ico" alt="logo" height={30} width={30} />
      </Link>

      <Link
        className={classNames(
          'px-6 py-2 bg-blue-700 text-white font-bold rounded-md',
          {
            user: 'bg-green-700',
          }
        )}
        href="/auth/login"
      >
        {user && !loading ? (
          <button onClick={onSignOut}>Log out</button>
        ) : (
          <button>Log in</button>
        )}
      </Link>
    </nav>
  )
}
