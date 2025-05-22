import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { LoadingOverlay } from '@/components/LoadingOverlay';
import { ProfileCard } from '@/components/ProfileCard';
import { useAuth } from '@/context/AuthContext';
import { Layout } from '@/layout/Layout';
import { ProfileLayout } from '@/layout/ProfileLayout';
import { RecommendationsLayout } from '@/layout/RecommendationsLayout';
import { companies, users } from '@/lib/db';
import { mapRecommendation } from '@/lib/mappers/recommendationMapper';
import { mapUser } from '@/lib/mappers/userMapper';
import { Recommendation } from '@/types/domain';

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  const { user } = useAuth();

  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  const isOwnProfile = user ? user?.id === id : false;

  const [profile, setProfile] = useState({
    id: '',
    name: '',
    avatarUrl: '',
    title: '',
    company: { name: '' },
  });

  // First load fetch
  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      setLoading(true);
      try {
        // Fetch recommendations raw data
        const res = await fetch(`/api/recommendations?receiverId=${id}`);
        if (!res.ok) throw new Error('Failed to fetch recommendations');
        const apiRecs = await res.json();

        // Map raw recommendations
        const mappedRecs = apiRecs.map((rec: any) => {
          const author = mapUser(users[rec.authorId], companies);
          return mapRecommendation(rec, author);
        });
        setRecommendations(mappedRecs);

        // Fetch user profile data
        const profileRes = await fetch(`/api/users?id=${id}`);
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();
        const user = Array.isArray(profileData) ? profileData[0] : profileData;
        if (!user) throw new Error('User not found');

        // Map user profile
        setProfile({
          id: user.id,
          name: user.name,
          avatarUrl: user.avatarUrl,
          title: user.title,
          company: { name: user.company.name },
        });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleSubmitRecommendation = async (text: string) => {
    if (!user) return;

    const newRec: Recommendation = {
      id: `temp-${Date.now()}`, // temp ID
      author: user,
      receiverId: profile.id,
      content: text,
      date: new Date().toISOString(),
    };

    try {
      //TBD mock backend call
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      // On hypothetical failure, remove optimistic rec and alert
      setRecommendations((prev) => prev.filter((r) => r.id !== newRec.id));
      alert('Failed to submit recommendation.');
    }

    setRecommendations((prev) => [newRec, ...prev]);
  };

  const handleEditRecommendation = (id: string, content: string) => {
    setRecommendations((prev) => prev.map((rec) => (rec.id === id ? { ...rec, content } : rec)));
    // TBD update backend accordingly
  };

  const handleDeleteRecommendation = (id: string) => {
    setRecommendations((prev) => prev.filter((rec) => rec.id !== id));
    // TBD delete from backend accordingly
  };

  return (
    <Layout>
      <ProfileLayout>
        {loading && <LoadingOverlay />}
        <div>
          <ProfileCard
            name={profile.name}
            title={profile.title}
            company={profile.company.name}
            avatarUrl={profile.avatarUrl}
            isOwnProfile={isOwnProfile}
          />
        </div>

        <RecommendationsLayout
          recommendations={recommendations}
          onSubmit={handleSubmitRecommendation}
          isSubmitting={false}
          isOwnProfile={isOwnProfile}
          onEdit={handleEditRecommendation}
          onDelete={handleDeleteRecommendation}
        />
      </ProfileLayout>
    </Layout>
  );
}
