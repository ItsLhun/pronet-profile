import { Company, Recommendation, User } from '@/types'

export const companies: Record<string, Company> = {
  c1: { id: 'c1', name: 'EF Education First' },
  c2: { id: 'c2', name: 'Apple' },
  c3: { id: 'c3', name: 'Meta' },
  c4: { id: 'c4', name: 'Google' },
}

export const users: Record<string, User> = {
  u1: {
    id: 'u1',
    name: 'Nahuel Ghastin',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    title: 'Senior Frontend Engineer',
    companyId: 'c1',
  },
  u2: {
    id: 'u2',
    name: 'Sarah Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    title: 'UX Director',
    companyId: 'c2',
  },
  u3: {
    id: 'u3',
    name: 'David Chen',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    title: 'Product Manager',
    companyId: 'c3',
  },
  u4: {
    id: 'u4',
    name: 'Michael Anderson',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    title: 'Senior Product Designer',
    companyId: 'c4',
  },
}

export const recommendations: Recommendation[] = [
  {
    id: 'r1',
    authorId: 'u2',
    receiverId: 'u1',
    content: 'Nahuel is a fantastic engineer. Great attention to detail.',
    date: '2025-05-20T09:00:00.000Z',
  },
  {
    id: 'r2',
    authorId: 'u3',
    receiverId: 'u1',
    content: 'I really enjoyed working with Nahuel.',
    date: '2025-05-18T12:30:00.000Z',
  },
]
