import { ApiCompany, ApiRecommendation, ApiUser } from '@/types/api';

export const companies: Record<string, ApiCompany> = {
  c1: { id: 'c1', name: 'Nova' },
  c2: { id: 'c2', name: 'Apple' },
  c3: { id: 'c3', name: 'Meta' },
  c4: { id: 'c4', name: 'Google' },
};

export const users: Record<string, ApiUser> = {
  u1: {
    id: 'u1',
    name: 'Nahuel Ghastin',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    title: 'Senior Frontend Engineer',
    companyId: 'c1',
  },
  u2: {
    id: 'u2',
    name: 'Sarah Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    title: 'UX Director',
    companyId: 'c2',
  },
  u3: {
    id: 'u3',
    name: 'David Chen',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    title: 'Product Manager',
    companyId: 'c3',
  },
  u4: {
    id: 'u4',
    name: 'Michael Anderson',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    title: 'Senior Product Designer',
    companyId: 'c4',
  },
  u5: {
    id: 'u5',
    name: 'Emily Davis',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    title: 'Software Engineer',
    companyId: 'c2',
  },
  u6: {
    id: 'u6',
    name: 'Williams Aguilera',
    avatarUrl: 'https://i.pravatar.cc/150?img=6',
    title: 'Chief Technology Officer',
    companyId: 'c1',
  },
};

export const recommendations: ApiRecommendation[] = [
  {
    id: 'r1',
    authorId: 'u2',
    receiverId: 'u1',
    content:
      'When a bug shows up, Nahuel gives it the kind of stare that makes it think twice about sticking around.',
    date: '2025-05-20T09:00:00.000Z',
  },
  {
    id: 'r2',
    authorId: 'u3',
    receiverId: 'u1',
    content:
      'This man literally saved my life. He once ran into a burning building to rescue my dog. Not only heroic, but also a great engineer.',
    date: '2025-05-18T12:30:00.000Z',
  },
  {
    id: 'r3',
    authorId: 'u4',
    receiverId: 'u1',
    content:
      "My grandma always says, 'Why can't you be a little bit more like Nahuel?' I’m still trying to live up to that.",
    date: '2025-05-19T14:45:00.000Z',
  },
  {
    id: 'r4',
    authorId: 'u5',
    receiverId: 'u1',
    content:
      "He literally sparked the idea behind Face ID. If it weren't for Nahuel, unlocking phones would still be a struggle.",
    date: '2025-05-17T11:15:00.000Z',
  },
  {
    id: 'r5',
    authorId: 'u6',
    receiverId: 'u1',
    content:
      "Hiring Nahuel into Nova was one of the best decisions we've ever made. His technical expertise and dedication have significantly elevated our frontend quality and team morale.",
    date: '2025-05-16T10:00:00.000Z',
  },
  {
    id: 'r6',
    authorId: 'u6',
    receiverId: 'u3',
    content: 'Sarah is an amazing UX designer. Her work is always top-notch.',
    date: '2025-05-15T09:00:00.000Z',
  },
  {
    id: 'r7',
    authorId: 'u4',
    receiverId: 'u3',
    content: 'David is a great product manager. He knows how to get things done.',
    date: '2025-05-14T12:30:00.000Z',
  },
  {
    id: 'r8',
    authorId: 'u1',
    receiverId: 'u3',
    content: 'David is a super individual with lots to offer. He knows how to get things done.',
    date: '2025-05-14T12:30:00.000Z',
  },
];
