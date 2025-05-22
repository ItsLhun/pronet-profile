import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { useAuth } from '@/context/AuthContext';
import { companies, users } from '@/lib/db';
import { mapUser } from '@/lib/mappers/userMapper';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (id: string) => {
    const rawUser = users[id];
    const mappedUser = mapUser(rawUser, companies);
    login(mappedUser);
    router.push(`/profile/${id}`);
  };

  return (
    <main className="min-h-screen bg-background text-text flex items-center justify-center">
      <div className="space-y-4">
        {/* TEMPORARY LOGIN PAGE */}
        <h1 className="text-xl font-semibold">Select a user to log in</h1>
        {Object.values(users).map((u) => (
          <Button
            key={u.id}
            onClick={() => handleLogin(u.id)}
            variant="primary"
            className="w-full bg-primary text-white px-4 py-2 rounded md:justify-center"
          >
            {u.name} ({u.title})
          </Button>
        ))}
      </div>
    </main>
  );
}
