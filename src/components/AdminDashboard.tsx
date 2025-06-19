
import React, { useState } from 'react';
import { Shield, Users, TrendingUp, Settings, BarChart3, Database, UserCheck, AlertCircle, Search, Edit, Trash2, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface AdminDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const AdminDashboard = ({ userEmail, onLogout }: AdminDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: "Sarah Johnson", email: "sarah@example.com", type: "User", status: "Active", joinDate: "2024-01-15", sessions: 12 },
    { id: 2, name: "Dr. Michael Chen", email: "mchen@example.com", type: "Therapist", status: "Active", joinDate: "2024-02-20", sessions: 45 },
    { id: 3, name: "Emily Rodriguez", email: "emily@example.com", type: "User", status: "Active", joinDate: "2024-03-10", sessions: 8 },
    { id: 4, name: "Dr. Lisa Kim", email: "lkim@example.com", type: "Therapist", status: "Pending", joinDate: "2024-12-15", sessions: 0 }
  ];

  const chatbotAnalytics = {
    totalConversations: 1247,
    avgSessionLength: "12 minutes",
    successfulEscalations: 89,
    userSatisfaction: "4.3/5",
    topTopics: ["Anxiety", "Depression", "Stress Management", "Sleep Issues"]
  };

  const motivationalContent = [
    { id: 1, type: "Quote", content: "You are stronger than you think and more capable than you imagine.", category: "Motivation", status: "Active" },
    { id: 2, type: "Tip", content: "Take 5 deep breaths when feeling overwhelmed", category: "Anxiety", status: "Active" },
    { id: 3, type: "Exercise", content: "Progressive muscle relaxation - 10 minute guided session", category: "Relaxation", status: "Draft" },
    { id: 4, type: "Quote", content: "Healing isn't linear, and that's perfectly okay.", category: "Recovery", status: "Active" }
  ];

  const appointmentTrends = {
    thisMonth: 342,
    lastMonth: 298,
    growth: "+14.8%",
    avgRating: 4.7,
    completionRate: "94%"
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderOverview = () => (
    <div className="space-y-8">
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
                <p className="text-2xl font-semibold text-gray-800">{appointmentTrends.thisMonth}</p>
                <p className="text-sm text-gray-600">Sessions This Month</p>
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
        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('users')}>
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

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('analytics')}>
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

        <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('content')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Edit className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">Content Management</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              Manage AI content, tips, and motivational quotes
            </CardDescription>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Manage Content
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light text-gray-800">User Management</h2>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Add User
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-800">{user.name}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                        {user.status}
                      </Badge>
                      <Badge variant="outline">{user.type}</Badge>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Joined:</strong> {user.joinDate}</p>
                    <p><strong>Sessions:</strong> {user.sessions}</p>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-gray-800">Analytics & Reports</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800">Appointment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">This Month</span>
                <span className="font-semibold text-gray-800">{appointmentTrends.thisMonth} sessions</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Growth Rate</span>
                <span className="font-semibold text-green-600">{appointmentTrends.growth}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Completion Rate</span>
                <span className="font-semibold text-gray-800">{appointmentTrends.completionRate}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Average Rating</span>
                <span className="font-semibold text-gray-800">{appointmentTrends.avgRating}/5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800">Chatbot Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                <span className="text-gray-700">Total Conversations</span>
                <span className="font-semibold text-gray-800">{chatbotAnalytics.totalConversations}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Avg Session Length</span>
                <span className="font-semibold text-gray-800">{chatbotAnalytics.avgSessionLength}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Escalations</span>
                <span className="font-semibold text-gray-800">{chatbotAnalytics.successfulEscalations}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">User Satisfaction</span>
                <span className="font-semibold text-gray-800">{chatbotAnalytics.userSatisfaction}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800">Top Discussion Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {chatbotAnalytics.topTopics.map((topic, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light text-gray-800">Content Management</h2>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          Add New Content
        </Button>
      </div>

      <div className="space-y-4">
        {motivationalContent.map((content) => (
          <Card key={content.id} className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{content.type}</Badge>
                      <Badge variant="secondary">{content.category}</Badge>
                      <Badge variant={content.status === 'Active' ? 'default' : 'secondary'}>
                        {content.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{content.content}"</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

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

      {/* Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'content', label: 'Content', icon: Edit }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                    activeSection === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {activeSection === 'overview' && renderOverview()}
        {activeSection === 'users' && renderUsers()}
        {activeSection === 'analytics' && renderAnalytics()}
        {activeSection === 'content' && renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
