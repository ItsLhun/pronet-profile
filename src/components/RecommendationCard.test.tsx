import { render, screen } from '@testing-library/react';

import { Recommendation } from '@/types/domain';

import { RecommendationCard } from './RecommendationCard';

const mockRecommendation = {
  id: 'r1',
  author: {
    id: 'u2',
    name: 'Alice Johnson',
    avatarUrl: 'https://example.com/avatar.png',
    title: 'Product Manager',
    company: {
      id: 'c1',
      name: 'Tech Innovations',
    },
  },
  content: 'This is a sample recommendation with enough length to pass validation.',
  date: new Date().toISOString(),
} as Recommendation;

describe('RecommendationCard', () => {
  it('renders author info', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);

    // Author name and title
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
  });

  it('renders recommendation content', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);

    // Recommendation content
    expect(
      screen.getByText('This is a sample recommendation with enough length to pass validation.'),
    ).toBeInTheDocument();
  });

  it('renders recommendation date', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);

    // Recommendation date
    const date = new Date(mockRecommendation.date);
    expect(screen.getByText(date.toLocaleDateString())).toBeInTheDocument();
  });

  it('links author name and avatar to author profile', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);

    const links = screen.getAllByRole('link');

    // Two of the links should go to /profile/u2, as the other is for the company
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', '/profile/u2');
    expect(links[1]).toHaveAttribute('href', '/profile/u2');
    expect(links[2]).toHaveAttribute('href', '#');
  });

  it('has accessible alt text for the avatar', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);
    const avatarImg = screen.getByRole('img');
    expect(avatarImg).toHaveAccessibleName('Alice Johnson');
  });
});
