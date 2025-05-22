import Link from 'next/link';

import { useAuth } from '@/context/AuthContext';

import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { HomeIcon } from './icons/HomeIcon';
import MessagesIcon from './icons/MessagesIcon';
import { NetworkIcon } from './icons/NetworkIcon';

export const BottomNav = () => {
  const { user } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-content-surface border-t border-border z-40 md:hidden">
      <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center h-16">
        <Link
          href={user ? `/profile/${user.id}` : '/'}
          className="text-text-muted hover:text-text flex flex-col items-center gap-1 text-xs font-bold"
        >
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link
          href="#"
          className="text-text-muted hover:text-text flex flex-col items-center gap-1 text-xs font-bold"
        >
          <NetworkIcon />
          <span>Network</span>
        </Link>
        <Link
          href="#"
          className="text-text-muted hover:text-text flex flex-col items-center gap-1 text-xs font-bold"
        >
          <BriefcaseIcon />
          <span>Jobs</span>
        </Link>
        <Link
          href="#"
          className="text-text-muted hover:text-text flex flex-col items-center gap-1 text-xs font-bold"
        >
          <MessagesIcon />
          <span>Messages</span>
        </Link>
      </div>
    </nav>
  );
};
