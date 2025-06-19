
import React, { useState } from 'react';
import { Calendar, MessageCircle, User, Clock, Heart, TrendingUp, Search, Filter, Star, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface UserDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const UserDashboard = ({ userEmail, onLogout }: UserDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Anxiety & Depression",
      experience: "8 years",
      rating: 4.9,
      availability: "Available Today",
      image: "/placeholder.svg",
      hourlyRate: "$120",
      bio: "Specializing in cognitive behavioral therapy and mindfulness techniques."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "PTSD & Trauma",
      experience: "12 years",
      rating: 4.8,
      availability: "Next Available: Tomorrow",
      image: "/placeholder.svg",
      hourlyRate: "$150",
      bio: "Expert in trauma-informed therapy and EMDR techniques."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Relationships & Family",
      experience: "6 years",
      rating: 4.7,
      availability: "Available Today",
      image: "/placeholder.svg",
      hourlyRate: "$110",
      bio: "Passionate about helping couples and families build stronger connections."
    }
  ];

  const upcomingAppointments = [
    { date: "Tomorrow", time: "2:00 PM", therapist: "Dr. Sarah Johnson", type: "Video Session" },
    { date: "Friday", time: "10:00 AM", therapist: "Dr. Emily Rodriguez", type: "In-Person" }
  ];

  const mentalHealthTips = [
    "Take 5 deep breaths when feeling overwhelmed",
    "Practice gratitude by writing down 3 things you're thankful for",
    "Take a 10-minute walk in nature",
    "Connect with a friend or loved one today"
  ];

  const motivationalQuotes = [
    "You are stronger than you think and more capable than you imagine.",
    "Healing isn't linear, and that's perfectly okay.",
    "Small steps forward are still progress.",
    "Your mental health is just as important as your physical health."
  ];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'all' || 
                                 therapist.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase());
    return matchesSearch && matchesSpecialization;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-light text-gray-800">Your Wellness Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
          Take a moment for yourself today. Your mental health matters, and we're here to support you every step of the way.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('therapists')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">Find a Therapist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              Browse and book sessions with certified therapists
            </CardDescription>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Browse Therapists
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('ai-chat')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <MessageCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">AI Wellness Bot</CardTitle>
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

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveSection('appointments')}>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-medium text-gray-800">My Appointments</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 mb-4">
              View upcoming sessions and booking history
            </CardDescription>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              View Schedule
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Daily Wellness */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Heart className="h-5 w-5 text-pink-600" />
              <span>Today's Wellness Tip</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{mentalHealthTips[0]}</p>
            <Button variant="outline" className="w-full">Get Another Tip</Button>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Star className="h-5 w-5 text-amber-600" />
              <span>Daily Motivation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 italic mb-4">"{motivationalQuotes[0]}"</p>
            <Button variant="outline" className="w-full">New Quote</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderTherapists = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h2 className="text-2xl font-light text-gray-800">Find Your Therapist</h2>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search therapists..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select 
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Specializations</option>
            <option value="anxiety">Anxiety & Depression</option>
            <option value="ptsd">PTSD & Trauma</option>
            <option value="relationships">Relationships & Family</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTherapists.map((therapist) => (
          <Card key={therapist.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <CardTitle className="text-xl text-gray-800">{therapist.name}</CardTitle>
              <Badge variant="secondary" className="mx-auto">{therapist.specialization}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{therapist.experience} experience</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-1">{therapist.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{therapist.bio}</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{therapist.hourlyRate}/hr</span>
                <Badge variant={therapist.availability.includes('Today') ? 'default' : 'secondary'}>
                  {therapist.availability}
                </Badge>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Book Session
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAIChat = () => (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white border-0 shadow-lg h-96">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardTitle className="flex items-center space-x-2 text-gray-800">
            <MessageCircle className="h-6 w-6 text-emerald-600" />
            <span>AI Wellness Companion</span>
          </CardTitle>
          <CardDescription>
            Your personal mental health support assistant, available 24/7
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <div className="h-64 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
                  <p className="text-gray-700">Hello! I'm your AI wellness companion. How are you feeling today? I'm here to listen and provide support.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Type your message here..." className="flex-1" />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-gray-800">My Appointments</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>Upcoming Sessions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">{appointment.therapist}</p>
                      <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                      <div className="flex items-center mt-2">
                        <Video className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="text-sm text-blue-600">{appointment.type}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                Schedule New Session
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <span>Session History</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Dec 15, 2024 - Completed</p>
                <p className="text-xs text-gray-500">Anxiety management session</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">Dr. Emily Rodriguez</p>
                <p className="text-sm text-gray-600">Dec 10, 2024 - Completed</p>
                <p className="text-xs text-gray-500">Relationship counseling</p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

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

      {/* Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'therapists', label: 'Find Therapists', icon: User },
              { id: 'ai-chat', label: 'AI Chat', icon: MessageCircle },
              { id: 'appointments', label: 'My Appointments', icon: Calendar }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                    activeSection === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-blue-600'
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
        {activeSection === 'therapists' && renderTherapists()}
        {activeSection === 'ai-chat' && renderAIChat()}
        {activeSection === 'appointments' && renderAppointments()}
      </div>
    </div>
  );
};

export default UserDashboard;
