import { companies, users } from '@/lib/db';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const user = users[id];
  if (!user) {
    console.log(user, 'not found');
    return res.status(404).json({ message: 'User not found' });
  }

  const company = companies[user.companyId];

  const userWithCompany = {
    ...user,
    company,
  };

  return res.status(200).json(userWithCompany);
}
