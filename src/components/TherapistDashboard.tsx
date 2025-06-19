
import React from 'react';
import { Calendar, Users, MessageCircle, BarChart3, Heart, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TherapistDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const TherapistDashboard = ({ userEmail, onLogout }: TherapistDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Heart className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-800">Dr. Welcome</h1>
              <p className="text-sm text-gray-600">{userEmail}</p>
            </div>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline" 
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            Sign Out
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-light text-gray-800">Your Practice Dashboard</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Supporting your clients' mental health journey. Your dedication makes a difference in their lives.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">24</p>
                  <p className="text-sm text-gray-600">Active Clients</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">8</p>
                  <p className="text-sm text-gray-600">Today's Sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">12</p>
                  <p className="text-sm text-gray-600">New Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">89%</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Schedule Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                View and manage your appointment schedule
              </CardDescription>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                View Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Client Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Access client profiles and progress notes
              </CardDescription>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                View Clients
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Practice Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Track your practice performance and insights
              </CardDescription>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Today's Schedule */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Clock className="h-5 w-5 text-emerald-600" />
                <span>Today's Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">John Smith</p>
                      <p className="text-sm text-gray-600">Anxiety Management</p>
                    </div>
                    <span className="text-sm text-emerald-600 font-medium">10:00 AM</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Emily Johnson</p>
                      <p className="text-sm text-gray-600">Depression Support</p>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">2:00 PM</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Michael Brown</p>
                      <p className="text-sm text-gray-600">Stress Management</p>
                    </div>
                    <span className="text-sm text-purple-600 font-medium">4:00 PM</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <span>Recent Messages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Sarah Davis</p>
                      <p className="text-sm text-gray-600">Thank you for yesterday's session...</p>
                    </div>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Alex Wilson</p>
                      <p className="text-sm text-gray-600">Could we reschedule Friday's...</p>
                    </div>
                    <span className="text-xs text-gray-500">5h ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TherapistDashboard;
