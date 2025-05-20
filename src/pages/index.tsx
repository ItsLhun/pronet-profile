import { ProfileCard } from '@/components/ProfileCard'
import { Layout } from '@/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <ProfileCard
        name="Nahuel Ghastin"
        title="Senior Frontend Engineer"
        company="EF Education First"
        avatarUrl="https://i.pravatar.cc/150?img=47"
      />
    </Layout>
  )
}
