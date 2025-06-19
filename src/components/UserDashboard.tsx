
import React from 'react';
import { Calendar, MessageCircle, User, Clock, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface UserDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const UserDashboard = ({ userEmail, onLogout }: UserDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-800">Welcome back!</h1>
              <p className="text-sm text-gray-600">{userEmail}</p>
            </div>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline" 
            className="border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            Sign Out
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-light text-gray-800">Your Wellness Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Take a moment for yourself today. Your mental health matters, and we're here to support you every step of the way.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Book Appointment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Schedule a session with one of our certified therapists
              </CardDescription>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Find a Therapist
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">AI Chat Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Get instant support with our AI wellness companion
              </CardDescription>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Start Chatting
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Track Progress</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Monitor your wellness journey and celebrate milestones
              </CardDescription>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                View Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Upcoming Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-gray-800">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-center py-2">No more sessions scheduled</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Heart className="h-5 w-5 text-pink-600" />
                <span>Daily Check-in</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">How are you feeling today?</p>
                <div className="flex space-x-2">
                  {['😊', '😐', '😔', '😰', '😴'].map((emoji, index) => (
                    <button
                      key={index}
                      className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
