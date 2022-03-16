import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import PageLoading from './PageLoading'

export default function CheckAuth({ Component, pageProps }) {
  const { data: session, status } = useSession()
  const  router = useRouter()

  useEffect(() => {
    if(status === 'loading') return

    if(!session) {
      router.push('/auth/signin')
    }
  }, [session, status])

  if(session) {
    return <Component {...pageProps} />
  }
    
  return <PageLoading />
}