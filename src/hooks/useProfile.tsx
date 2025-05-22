import { useEffect, useState } from 'react';

import { Recommendation } from '@/types/domain';

interface Profile {
  id: string;
  name: string;
  avatarUrl: string;
  title: string;
  company: { name: string };
}

export function useProfile(userId?: string) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const [profileRes, recRes] = await Promise.all([
          fetch(`/api/users?id=${userId}`),
          fetch(`/api/recommendations?receiverId=${userId}`),
        ]);

        if (!profileRes.ok) throw new Error('Failed to load profile');
        if (!recRes.ok) throw new Error('Failed to load recommendations');

        const profileData = await profileRes.json();
        const recData = await recRes.json();

        setProfile(profileData);
        setRecommendations(recData);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  return { profile, recommendations, loading, error };
}
