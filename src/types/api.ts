export type UserId = string;
export type RecommendationId = string;
export type CompanyId = string;

export interface ApiUser {
  id: UserId;
  name: string;
  avatarUrl: string;
  title: string;
  companyId: CompanyId;
}

export interface ApiCompany {
  id: CompanyId;
  name: string;
  logoUrl?: string;
}

export interface ApiRecommendation {
  id: RecommendationId;
  authorId: UserId;
  receiverId: UserId;
  content: string;
  date: string;
}
