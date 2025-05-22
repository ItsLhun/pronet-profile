import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@/context/AuthContext';

import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-content-surface border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex flex-row items-center space-x-6">
          <span className="text-lg font-semibold text-text">ProProfile</span>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href={user ? `/profile/${user.id}` : '/'}
              className="text-text-muted hover:text-text"
            >
              Home
            </Link>
            <Link href="#" className="text-text-muted hover:text-text">
              Network
            </Link>
            <Link href="#" className="text-text-muted hover:text-text">
              Jobs
            </Link>
            <Link href="#" className="text-text-muted hover:text-text">
              Messages
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {user?.avatarUrl ? (
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border">
              <Image
                src={user.avatarUrl}
                alt={`${user.name}'s avatar`}
                layout="fill"
                objectFit="cover"
                priority={false}
                sizes="28px"
              />
            </div>
          ) : (
            // Fallback, show a default icon or placeholder img
            <span className="text-sm text-text-muted">👤</span>
          )}
        </div>
      </div>
    </nav>
  );
};
