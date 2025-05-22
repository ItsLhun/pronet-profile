import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Recommendation as RecommendationType } from '@/types/domain';

import { Button } from './Button';
import { EditIcon } from './icons/EditIcon';
import { TrashIcon } from './icons/TrashIcon';

interface RecommendationCardProps {
  recommendation: RecommendationType;
  className?: string;
  onEdit?: (id: string, content: string) => void;
  onDelete?: (id: string) => void;
}

export const RecommendationCard = ({
  recommendation,
  className,
  onEdit,
  onDelete,
}: RecommendationCardProps) => {
  const { author, content, date } = recommendation;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(content);

  const saveEdit = () => {
    if (editText.trim().length < 50) {
      alert('Recommendation must be at least 50 characters.');
      return;
    }
    if (onEdit) {
      onEdit(recommendation.id, editText.trim());
    }
    setIsEditing(false);
  };
  return (
    <div
      className={clsx(
        'relative border border-border rounded p-4 mb-4 bg-content-surface',
        className,
      )}
    >
      <div className={clsx('flex flex-col md:flex-row md:items-center md:mb-2')}>
        <div className="flex items-center">
          <Link
            href={`/profile/${author.id}`}
            className="mr-3 cursor-pointer rounded-full overflow-hidden block"
          >
            <Image
              src={author.avatarUrl}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
              priority={false}
            />
          </Link>

          <div>
            <Link
              href={`/profile/${author.id}`}
              className="font-semibold text-text hover:underline cursor-pointer block"
            >
              {author.name}
            </Link>
            <p className="text-text-muted text-sm flex flex-row items-center gap-1">
              {author.title}
              <span>@</span>
              <Link href={`#`} className="hover:underline">
                {author.company.name}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {isEditing ? (
        <>
          <textarea
            rows={4}
            className="w-full mt-4 mb-2 p-2 border rounded resize-none"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="mt-2 flex flex-row justify-end space-x-2">
            <Button onClick={saveEdit} variant="primary">
              Save
            </Button>

            <Button
              onClick={() => {
                setEditText(content);
                setIsEditing(false);
              }}
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-text mt-2 md:mt-4 md:ml-[calc(40px+0.75rem)]">{content}</p>
          {/* Show edit and delete button conditionally if logged in user is author */}
          {(onEdit || onDelete) && (
            <div className="absolute flex flex-row gap-0.25 right-4 top-2 md:left-4 md:top-[calc(40px+1.5rem)] text-text-muted text-xs mt-2">
              {onEdit && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-primary p-0.5 mt-2 hover:cursor-pointer hover:brightness-75"
                >
                  <EditIcon className="w-4 h-4 inline-block mr-1" />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(recommendation.id)}
                  className="text-primary px-0.5 mt-2 hover:cursor-pointer hover:brightness-75"
                >
                  <TrashIcon className="w-4 h-4 inline-block mr-1" />
                </button>
              )}
            </div>
          )}
        </>
      )}

      {/* To override flow on desktop and allow date below on mobile*/}
      <p className="md:absolute md:right-4 md:top-4 text-text-muted text-xs mt-2">
        {new Date(date).toLocaleDateString()}
      </p>
    </div>
  );
};
