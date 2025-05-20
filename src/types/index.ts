export type UserId = string
export type RecommendationId = string
export type CompanyId = string

export interface Company {
  id: CompanyId
  name: string
  logoUrl?: string
}

export interface User {
  id: UserId
  name: string
  avatarUrl: string
  title: string
  companyId: CompanyId
}

export interface Recommendation {
  id: RecommendationId
  authorId: UserId
  receiverId: UserId
  content: string
  date: string
}
