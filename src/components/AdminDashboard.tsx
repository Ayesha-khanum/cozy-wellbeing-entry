
import React from 'react';
import { Shield, Users, TrendingUp, Settings, BarChart3, Database, UserCheck, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AdminDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const AdminDashboard = ({ userEmail, onLogout }: AdminDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-800">Admin Portal</h1>
              <p className="text-sm text-gray-600">{userEmail}</p>
            </div>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline" 
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            Sign Out
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-light text-gray-800">Platform Administration</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Monitor and manage the Mindful Connect platform. Oversee operations and ensure the best experience for all users.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">1,247</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">87</p>
                  <p className="text-sm text-gray-600">Active Therapists</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">342</p>
                  <p className="text-sm text-gray-600">Sessions Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">3</p>
                  <p className="text-sm text-gray-600">Pending Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Tools */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">User Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Manage user accounts, roles, and permissions
              </CardDescription>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Analytics & Reports</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                View platform analytics and generate reports
              </CardDescription>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <UserCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Therapist Verification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Review and approve therapist applications
              </CardDescription>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Review Applications
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <Settings className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">System Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Configure platform settings and preferences
              </CardDescription>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                System Settings
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <Database className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Data Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Backup, export, and manage platform data
              </CardDescription>
              <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                Manage Data
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-50 to-slate-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/70 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-800">Security & Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                Monitor security and ensure HIPAA compliance
              </CardDescription>
              <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                Security Center
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span>Platform Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm font-medium text-gray-800">New therapist approved</p>
                  <p className="text-xs text-gray-600">Dr. Amanda Chen - Licensed Therapist</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm font-medium text-gray-800">System update completed</p>
                  <p className="text-xs text-gray-600">Security patches and performance improvements</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                  <p className="text-sm font-medium text-gray-800">Backup scheduled</p>
                  <p className="text-xs text-gray-600">Daily database backup at 2:00 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <span>Pending Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Therapist Applications</p>
                      <p className="text-xs text-gray-600">3 applications pending review</p>
                    </div>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-800">Security Alert</p>
                      <p className="text-xs text-gray-600">Unusual login patterns detected</p>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      Investigate
                    </Button>
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

export default AdminDashboard;
