import { auth } from '@/utils/firebase'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

export default function Dashboard({}: Props) {
  const [user] = useAuthState(auth)

  return (
    <div className="p-6 shadow-2xl mt-24">
      <h1 className="text-lg font-semibold text-center">Dashboard</h1>
      <div className="flex mt-6 items-center justify-center gap-2 pb-6">
        {user?.photoURL && (
          <Image
            src={user?.photoURL}
            alt="your picture"
            width={50}
            height={50}
            className="rounded-full mt-4"
          />
        )}
        <div>
          <p>{user!.displayName}</p>
          <p>{user!.email}</p>
        </div>
      </div>
    </div>
  )
}
