
import React, { useState } from 'react';
import { Calendar, Users, MessageCircle, BarChart3, Heart, Clock, Settings, CheckCircle, XCircle, Edit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface TherapistDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const TherapistDashboard = ({ userEmail, onLogout }: TherapistDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const pendingRequests = [
    {
      id: 1,
      clientName: "Sarah M.",
      requestedDate: "Dec 20, 2024",
      requestedTime: "2:00 PM",
      issue: "Anxiety management",
      urgency: "Medium",
      message: "I've been struggling with anxiety lately and would appreciate some guidance."
    },
    {
      id: 2,
      clientName: "John D.",
      requestedDate: "Dec 22, 2024",
      requestedTime: "10:00 AM",
      issue: "Depression support",
      urgency: "High",
      message: "Looking for support with ongoing depression symptoms."
    }
  ];

  const sessionLogs = [
    {
      id: 1,
      clientName: "Emily R.",
      date: "Dec 15, 2024",
      time: "3:00 PM",
      duration: "50 minutes",
      type: "Video Session",
      notes: "Discussed coping strategies for work stress",
      status: "Completed"
    },
    {
      id: 2,
      clientName: "Michael B.",
      date: "Dec 14, 2024",
      time: "1:00 PM",
      duration: "50 minutes",
      type: "In-Person",
      notes: "Continued work on relationship communication skills",
      status: "Completed"
    },
    {
      id: 3,
      clientName: "Lisa K.",
      date: "Dec 13, 2024",
      time: "11:00 AM",
      duration: "50 minutes",
      type: "Video Session",
      notes: "Initial consultation - assessment completed",
      status: "Completed"
    }
  ];

  const aiHandoverMessages = [
    {
      id: 1,
      clientName: "Sarah M.",
      timestamp: "2 hours ago",
      summary: "Client expressed heightened anxiety about upcoming job interview. Provided breathing exercises and scheduled escalation.",
      urgency: "Medium"
    },
    {
      id: 2,
      clientName: "David L.",
      timestamp: "1 day ago",
      summary: "Client mentioned feeling overwhelmed with family responsibilities. Suggested stress management techniques.",
      urgency: "Low"
    }
  ];

  const therapistProfile = {
    name: "Dr. Sarah Johnson",
    specialization: "Anxiety & Depression",
    experience: "8 years",
    bio: "Specializing in cognitive behavioral therapy and mindfulness techniques. I believe in creating a safe, supportive environment for healing.",
    hourlyRate: "$120",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
    certifications: ["Licensed Clinical Psychologist", "CBT Certified", "Mindfulness Based Therapy"]
  };

  const renderOverview = () => (
    <div className="space-y-8">
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
                <p className="text-2xl font-semibold text-gray-800">{pendingRequests.length}</p>
                <p className="text-sm text-gray-600">Pending Requests</p>
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

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('requests')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Calendar className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">Appointment Requests</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              Review and respond to new booking requests
            </CardDescription>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Review Requests ({pendingRequests.length})
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('sessions')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">Session Logs</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              View and manage your session history
            </CardDescription>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              View Sessions
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('profile')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">Manage Profile</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              Update your profile and availability
            </CardDescription>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-gray-800">Appointment Requests</h2>
      
      <div className="space-y-4">
        {pendingRequests.map((request) => (
          <Card key={request.id} className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-800">{request.clientName}</h3>
                    <Badge variant={request.urgency === 'High' ? 'destructive' : request.urgency === 'Medium' ? 'default' : 'secondary'}>
                      {request.urgency} Priority
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{request.issue}</p>
                  <p className="text-sm text-gray-500 mb-3">Requested: {request.requestedDate} at {request.requestedTime}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 italic">"{request.message}"</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Accept
                </Button>
                <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50">
                  <XCircle className="h-4 w-4 mr-2" />
                  Decline
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {aiHandoverMessages.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-light text-gray-800 mb-4">AI Handover Messages</h3>
          <div className="space-y-3">
            {aiHandoverMessages.map((message) => (
              <Card key={message.id} className="bg-amber-50 border-amber-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-800">{message.clientName}</h4>
                    <Badge variant="outline">{message.urgency} Priority</Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{message.summary}</p>
                  <p className="text-xs text-gray-500">{message.timestamp}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderSessions = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-gray-800">Session History</h2>
      
      <div className="space-y-4">
        {sessionLogs.map((session) => (
          <Card key={session.id} className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-800">{session.clientName}</h3>
                    <Badge variant="outline">{session.status}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <p><strong>Date:</strong> {session.date}</p>
                    <p><strong>Time:</strong> {session.time}</p>
                    <p><strong>Duration:</strong> {session.duration}</p>
                    <p><strong>Type:</strong> {session.type}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Notes:</strong> {session.notes}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light text-gray-800">My Profile</h2>
        <Button
          onClick={() => setIsEditingProfile(!isEditingProfile)}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <Edit className="h-4 w-4" />
          <span>{isEditingProfile ? 'Cancel' : 'Edit Profile'}</span>
        </Button>
      </div>

      <Card className="bg-white border-0 shadow-lg">
        <CardContent className="p-6">
          {!isEditingProfile ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-2xl font-medium text-gray-800">{therapistProfile.name}</h3>
                <p className="text-gray-600">{therapistProfile.specialization}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Experience</h4>
                  <p className="text-gray-600">{therapistProfile.experience}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hourly Rate</h4>
                  <p className="text-gray-600">{therapistProfile.hourlyRate}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">About Me</h4>
                <p className="text-gray-600">{therapistProfile.bio}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {therapistProfile.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary">{cert}</Badge>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Available Days</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapistProfile.availableDays.map((day, index) => (
                      <Badge key={index} variant="outline">{day}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Time Slots</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapistProfile.timeSlots.map((time, index) => (
                      <Badge key={index} variant="outline">{time}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input defaultValue={therapistProfile.name} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                  <Input defaultValue={therapistProfile.specialization} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <Input defaultValue={therapistProfile.experience} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                  <Input defaultValue={therapistProfile.hourlyRate} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">About Me</label>
                <Textarea defaultValue={therapistProfile.bio} rows={4} />
              </div>

              <div className="flex space-x-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

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

      {/* Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'requests', label: 'Requests', icon: Calendar },
              { id: 'sessions', label: 'Sessions', icon: Users },
              { id: 'profile', label: 'Profile', icon: Settings }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                    activeSection === tab.id
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-emerald-600'
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
        {activeSection === 'requests' && renderRequests()}
        {activeSection === 'sessions' && renderSessions()}
        {activeSection === 'profile' && renderProfile()}
      </div>
    </div>
  );
};

export default TherapistDashboard;
