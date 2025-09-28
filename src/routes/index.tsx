import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MessageSquare, Camera, Mic, Brain, MapPin, Clock, Users, Leaf, Sprout, Bug, CloudRain, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 bg-gradient-to-b from-green-50 to-white py-16 -mx-4 px-4 rounded-lg">
        <div className="flex justify-center mb-4">
          <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
            <Sprout className="w-4 h-4 mr-2" />
            Digital Krishi Officer - Always Available
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-green-900">
          KrishiMitra AI
          <span className="block text-2xl sm:text-3xl text-green-700 mt-2">
            Your AI-Powered Agricultural Advisor
          </span>
        </h1>
        <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
          Get instant expert advice for your farming needs in Malayalam. Ask questions about pests, 
          weather, crops, subsidies, and market trends - anytime, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Link to="/query">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Ask Your Question</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
              Learn How It Works
            </Button>
          </Link>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
        <h2 className="text-2xl font-bold text-orange-900 mb-4">The Challenge We Solve</h2>
        <p className="text-orange-800 text-lg leading-relaxed">
          Farmers often face critical questions about pests, weather, inputs, subsidies, and market trends—but 
          timely expert advice is rarely accessible. Agri officers and helplines are overburdened, and existing 
          services don't scale to support individual needs across diverse regions, languages, and literacy levels.
        </p>
      </div>

      {/* Core Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How KrishiMitra AI Helps You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology meets traditional farming wisdom to provide you with instant, accurate advice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-green-100">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-green-900">Malayalam Support</CardTitle>
              <CardDescription className="text-gray-600">
                Ask questions in Malayalam through voice or text. Natural language processing understands your queries perfectly.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-blue-100">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-900">Image Analysis</CardTitle>
              <CardDescription className="text-gray-600">
                Upload photos of diseased crops or pests. Our AI instantly identifies problems and suggests solutions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-purple-100">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mic className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-purple-900">Voice Queries</CardTitle>
              <CardDescription className="text-gray-600">
                Speak your questions naturally. Perfect for farmers who prefer voice communication over typing.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-orange-100">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-orange-900">AI Knowledge Engine</CardTitle>
              <CardDescription className="text-gray-600">
                Powered by fine-tuned agricultural datasets, local crop calendars, and expert knowledge systems.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-teal-100">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <CardTitle className="text-teal-900">Location-Aware</CardTitle>
              <CardDescription className="text-gray-600">
                Personalized advice based on your location, local weather patterns, soil conditions, and seasonal factors.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-red-100">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-red-900">24/7 Availability</CardTitle>
              <CardDescription className="text-gray-600">
                Get expert advice anytime, day or night. No more waiting for office hours or busy helplines.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Can Ask</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border">
            <Bug className="w-6 h-6 text-red-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Pest Control</h3>
              <p className="text-sm text-gray-600">Identify and treat crop diseases</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border">
            <CloudRain className="w-6 h-6 text-blue-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Weather Advice</h3>
              <p className="text-sm text-gray-600">Crop planning for weather</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border">
            <DollarSign className="w-6 h-6 text-green-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Subsidies</h3>
              <p className="text-sm text-gray-600">Government schemes & benefits</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white p-4 rounded-lg border">
            <TrendingUp className="w-6 h-6 text-purple-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Market Trends</h3>
              <p className="text-sm text-gray-600">Pricing and demand insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Expected Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Users className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-semibold">Universal Access</h3>
              <p className="text-green-100">Makes expert-level farming advice instantly accessible to all farmers</p>
            </div>
            <div className="space-y-2">
              <MessageSquare className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-semibold">Bridge Communication</h3>
              <p className="text-green-100">Connects farmers with extension systems through AI-powered assistance</p>
            </div>
            <div className="space-y-2">
              <Leaf className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-semibold">Support Krishibhavans</h3>
              <p className="text-green-100">Automates first-level support for agricultural departments</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
        <CardContent className="p-8 text-center">
          <CardTitle className="text-3xl mb-4">Ready to Get Expert Farming Advice?</CardTitle>
          <CardDescription className="text-blue-100 mb-6 text-lg">
            Join thousands of farmers who are already using KrishiMitra AI to improve their farming practices
          </CardDescription>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/query">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Asking Questions
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More About AI Advisory
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}