export interface Company {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  title: string;
  company: Company;
}

export interface Recommendation {
  id: string;
  author: User;
  receiverId: string;
  content: string;
  date: string;
}
