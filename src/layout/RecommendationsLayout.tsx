import React from 'react';

import { RecommendationCard } from '@/components/RecommendationCard';
import { RecommendationForm } from '@/components/RecommendationForm';
import { useAuth } from '@/context/AuthContext';
import { Recommendation } from '@/types/domain';

interface RecommendationsLayoutProps {
  recommendations: Recommendation[];
  onSubmit: (text: string) => void;
  isSubmitting: boolean;
  isOwnProfile: boolean;
  onEdit: (id: string, content: string) => void;
  onDelete: (id: string) => void;
}

export const RecommendationsLayout = ({
  recommendations,
  onSubmit,
  isSubmitting,
  isOwnProfile,
  onEdit,
  onDelete,
}: RecommendationsLayoutProps) => {
  const { user } = useAuth();
  const loggedInUserId = user?.id ?? null;

  // Has the logged in user submitted a recommendation?
  const ownRecommendation = loggedInUserId
    ? recommendations.find((r) => r.author.id === loggedInUserId)
    : null;

  // Filter out own recommendation from rest to display at the top
  const otherRecommendations = ownRecommendation
    ? recommendations.filter((r) => r.id !== ownRecommendation.id)
    : recommendations;

  return (
    <section className="flex flex-col">
      {(!isOwnProfile && !ownRecommendation && (
        <div className="mb-6">
          <RecommendationForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
        </div>
      )) ||
        (isOwnProfile && (
          <div className="mb-6">
            <p className="text-text-muted">My Recommendations</p>
          </div>
        ))}
      {/* Own recommendation highlighted */}
      {ownRecommendation && (
        <div className="mb-8 rounded bg-primary-light">
          <h3 className="font-semibold mb-2">Your Recommendation</h3>
          <RecommendationCard
            className={'shadow-md'}
            recommendation={ownRecommendation}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )}

      <div className="space-y-4">
        {recommendations.length === 0 ? (
          <p className="text-center text-text-muted text-lg italic py-4">No recommendations yet.</p>
        ) : (
          otherRecommendations.map((rec) => (
            <RecommendationCard key={rec.id} recommendation={rec} />
          ))
        )}
      </div>
    </section>
  );
};
