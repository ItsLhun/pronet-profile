import { useRouter } from 'next/router'

import { useAuth } from '@/context/AuthContext'
import { users } from '@/lib/db'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = (id: string) => {
    login(users[id])
    router.push('/profile')
  }

  return (
    <main className="min-h-screen bg-background text-text flex items-center justify-center">
      <div className="space-y-4">
        {/* TEMPORARY LOGIN PAGE UNTIL I DECIDE ON A BETTER DESIGN */}
        <h1 className="text-xl font-semibold">Select a user to log in</h1>
        {Object.values(users).map((u) => (
          <button
            key={u.id}
            onClick={() => handleLogin(u.id)}
            className="block w-full bg-primary text-white px-4 py-2 rounded"
          >
            {u.name} ({u.title})
          </button>
        ))}
      </div>
    </main>
  )
}
