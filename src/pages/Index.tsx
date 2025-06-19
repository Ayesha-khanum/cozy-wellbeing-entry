
import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import UserDashboard from '@/components/UserDashboard';
import TherapistDashboard from '@/components/TherapistDashboard';
import AdminDashboard from '@/components/AdminDashboard';

type UserRole = 'user' | 'therapist' | 'admin';

interface AuthState {
  isAuthenticated: boolean;
  role: UserRole | null;
  email: string;
}

const Index = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    role: null,
    email: ''
  });

  const handleLogin = (role: UserRole, email: string) => {
    setAuthState({
      isAuthenticated: true,
      role,
      email
    });
  };

  const handleLogout = () => {
    setAuthState({
      isAuthenticated: false,
      role: null,
      email: ''
    });
  };

  if (!authState.isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  switch (authState.role) {
    case 'user':
      return <UserDashboard userEmail={authState.email} onLogout={handleLogout} />;
    case 'therapist':
      return <TherapistDashboard userEmail={authState.email} onLogout={handleLogout} />;
    case 'admin':
      return <AdminDashboard userEmail={authState.email} onLogout={handleLogout} />;
    default:
      return <LoginPage onLogin={handleLogin} />;
  }
};

export default Index;
