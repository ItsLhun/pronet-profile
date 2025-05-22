import Image from 'next/image';

import { Button } from './Button';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { PersonPlusIcon } from './icons/PersonPlusIcon';

interface ProfileCardProps {
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  isOwnProfile?: boolean;
}

export const ProfileCard = ({
  name,
  title,
  company,
  avatarUrl,
  isOwnProfile = false,
}: ProfileCardProps) => {
  return (
    <div className="bg-content-surface border border-border p-6 rounded-md shadow w-full md:mx-auto">
      <div></div>
      <div className="flex flex-row items-center md:flex-col md:items-center gap-4">
        <div className="relative w-28 h-28 rounded-full border border-border overflow-hidden flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            layout="fill"
            objectFit="cover"
            priority
            sizes="112px"
          />
        </div>
        <div className="flex flex-col text-left md:text-center flex-grow">
          <h2 className="text-2xl font-semibold text-text">{name}</h2>
          <p className="text-sm text-text-muted font-bold">{title}</p>
          <p className="text-sm font-bold hover:underline cursor-pointer">{company}</p>
        </div>
      </div>
      {!isOwnProfile && (
        <div className="mt-4 flex space-x-4 justify-center">
          <Button variant="primary" onClick={() => alert('Connect')} className="w-full">
            <PersonPlusIcon className="hidden md:inline" />
            Connect
          </Button>

          <Button variant="secondary" onClick={() => alert('Message')} className="w-full">
            <EnvelopeIcon className="hidden md:inline" />
            Message
          </Button>
        </div>
      )}
    </div>
  );
};
