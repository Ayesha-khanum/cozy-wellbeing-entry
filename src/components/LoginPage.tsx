
import React, { useState } from 'react';
import { User, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginPageProps {
  onLogin: (role: 'user' | 'therapist' | 'admin', email: string) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [selectedRole, setSelectedRole] = useState<'user' | 'therapist' | 'admin' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && email) {
      onLogin(selectedRole, email);
    }
  };

  const roleOptions = [
    {
      role: 'user' as const,
      title: 'User',
      description: 'Book appointments and connect with therapists',
      icon: User,
      color: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      hoverColor: 'hover:from-blue-100 hover:to-indigo-150',
      iconColor: 'text-blue-600'
    },
    {
      role: 'therapist' as const,
      title: 'Therapist',
      description: 'Manage appointments and support clients',
      icon: Heart,
      color: 'bg-gradient-to-br from-emerald-50 to-teal-100',
      hoverColor: 'hover:from-emerald-100 hover:to-teal-150',
      iconColor: 'text-emerald-600'
    },
    {
      role: 'admin' as const,
      title: 'Admin',
      description: 'Platform management and analytics',
      icon: Shield,
      color: 'bg-gradient-to-br from-purple-50 to-violet-100',
      hoverColor: 'hover:from-purple-100 hover:to-violet-150',
      iconColor: 'text-purple-600'
    }
  ];

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-gray-800 mb-4">Welcome to Mindful Connect</h1>
            <p className="text-lg text-gray-600 font-light">Choose your role to continue your wellness journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {roleOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={option.role}
                  className={`${option.color} ${option.hoverColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
                  onClick={() => setSelectedRole(option.role)}
                >
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-white/70 w-fit">
                      <IconComponent className={`h-8 w-8 ${option.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl font-medium text-gray-800">{option.title}</CardTitle>
                    <CardDescription className="text-gray-600 font-light">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <Button 
                      className="w-full bg-white/80 hover:bg-white text-gray-700 border-0 shadow-sm"
                      variant="outline"
                    >
                      Continue as {option.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentRole = roleOptions.find(opt => opt.role === selectedRole)!;
  const IconComponent = currentRole.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center space-y-4">
          <button 
            onClick={() => setSelectedRole(null)}
            className="text-sm text-gray-500 hover:text-gray-700 self-start"
          >
            ← Back to role selection
          </button>
          <div className={`mx-auto p-3 rounded-full ${currentRole.color} w-fit`}>
            <IconComponent className={`h-8 w-8 ${currentRole.iconColor}`} />
          </div>
          <CardTitle className="text-2xl font-light text-gray-800">
            {currentRole.title} Login
          </CardTitle>
          <CardDescription className="text-gray-600">
            Welcome back! Please sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-200 focus:border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-200 focus:border-gray-300 rounded-lg"
                required
              />
            </div>
            <Button 
              type="submit" 
              className={`w-full ${currentRole.color} ${currentRole.hoverColor} text-gray-800 border-0 shadow-sm hover:shadow-md transition-all duration-200`}
            >
              Sign In as {currentRole.title}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot your password?
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
