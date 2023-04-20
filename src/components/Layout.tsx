import Head from 'next/head'
import { ReactNode } from 'react'
import Nav from './Nav'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>

      <div className="px-4 container mx-auto">
        <Nav />
        <div>{children}</div>
      </div>
    </>
  )
}
