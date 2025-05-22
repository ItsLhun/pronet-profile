import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { User } from '@/types/domain';

import { AuthProvider, useAuth } from './AuthContext';

const mockUser: User = {
  id: 'user1',
  name: 'Test User',
  avatarUrl: 'https://example.com/avatar.png',
  title: 'Tester',
  company: { id: 'company1', name: 'Test Co' },
};

function TestComponent() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <div>User: {user ? user.name : 'none'}</div>
      <button onClick={() => login(mockUser)}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

describe('AuthContext', () => {
  test('starts with no user and can login and logout', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    expect(screen.getByText(/User: none/i)).toBeInTheDocument();

    userEvent.click(screen.getByText('Login'));
    expect(await screen.findByText(/User: Test User/i)).toBeInTheDocument();

    userEvent.click(screen.getByText('Logout'));
    expect(await screen.findByText(/User: none/i)).toBeInTheDocument();
  });
});
