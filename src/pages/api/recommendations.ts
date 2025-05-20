import { companies, recommendations, users } from '@/lib/db'

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const receiverId = req.query.receiverId as string

  if (req.method === 'GET') {
    const filtered = recommendations
      .filter((r) => r.receiverId === receiverId)
      .map((r) => ({
        ...r,
        author: {
          ...users[r.authorId],
          company: companies[users[r.authorId].companyId],
        },
      }))

    return res.status(200).json(filtered)
  }

  return res.status(405).json({ message: 'Method not allowed' })
}
