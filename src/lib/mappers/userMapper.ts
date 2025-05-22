import type { ApiCompany, ApiUser } from '@/types/api';
import type { Company, User } from '@/types/domain';

export function mapCompany(apiCompany: ApiCompany): Company {
  return {
    id: apiCompany.id,
    name: apiCompany.name,
  };
}

export function mapUser(apiUser: ApiUser, companyMap: Record<string, ApiCompany>): User {
  return {
    id: apiUser.id,
    name: apiUser.name,
    avatarUrl: apiUser.avatarUrl,
    title: apiUser.title,
    company: mapCompany(companyMap[apiUser.companyId]),
  };
}
