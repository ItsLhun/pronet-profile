import type { ApiRecommendation } from '@/types/api';
import type { Recommendation, User } from '@/types/domain';

export function mapRecommendation(apiRec: ApiRecommendation, author: User): Recommendation {
  return {
    id: apiRec.id,
    author,
    receiverId: apiRec.receiverId,
    content: apiRec.content,
    date: apiRec.date,
  };
}
