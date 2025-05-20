import { useRouter } from 'next/router'

import { Meta } from '@/components/Meta'
import { Navbar } from '@/components/Navbar'
import { useAuth } from '@/context/AuthContext'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuth()
  const router = useRouter()

  if (!user && router.pathname !== '/login') {
    router.push('/login')
    return null
  }
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-background text-text flex flex-col">
        <Navbar />
        <main className="flex-1">
          <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6">{children}</div>
        </main>
      </div>
    </>
  )
}
