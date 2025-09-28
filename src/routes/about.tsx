import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Zap, Shield, Globe, MessageSquare, Camera, Mic, MapPin, Clock, TrendingUp, Award, Leaf } from 'lucide-react';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  const aiFeatures = [
    'Natural Language Processing', 'Computer Vision', 'Machine Learning', 'Expert Systems',
    'Multilingual Support', 'Context Awareness', 'Continuous Learning', 'Knowledge Graphs'
  ];

  const technologies = [
    'React', 'TypeScript', 'TanStack Router', 'ShadCN UI', 
    'Tailwind CSS', 'OpenAI GPT', 'TensorFlow', 'FastAPI'
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 bg-gradient-to-b from-green-50 to-white py-16 -mx-4 px-4 rounded-lg">
        <div className="flex justify-center mb-4">
          <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
            <Leaf className="w-4 h-4 mr-2" />
            Digital Krishi Officer
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-green-900">About KrishiMitra AI</h1>
        <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing agricultural advisory services through AI-powered technology, 
          making expert farming knowledge accessible to every farmer in their native language.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-green-200">
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-green-900">Our Mission</CardTitle>
            <CardDescription className="text-gray-600">
              Democratizing agricultural expertise through AI technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              To bridge the gap between farmers and agricultural experts by providing instant, 
              accurate, and context-aware farming advice in regional languages, ensuring no 
              farmer is left behind in the digital agricultural revolution.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-blue-900">Our Vision</CardTitle>
            <CardDescription className="text-gray-600">
              A world where every farmer has access to expert knowledge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              To create a comprehensive AI-powered ecosystem that supports farmers across 
              diverse regions, languages, and literacy levels, ultimately improving agricultural 
              productivity and farmer livelihoods worldwide.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How KrishiMitra AI Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology combined with agricultural expertise to deliver personalized farming advice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg">1. Input Query</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Farmers ask questions via voice, text, or images in Malayalam or English
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-lg">2. AI Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Natural language processing understands context, location, and crop-specific needs
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-teal-600" />
              </div>
              <CardTitle className="text-lg">3. Knowledge Retrieval</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                AI searches through vast agricultural databases and expert knowledge systems
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">4. Personalized Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Delivers tailored advice considering location, weather, season, and crop type
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Capabilities */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-900">AI-Powered Capabilities</CardTitle>
          <CardDescription className="text-gray-600">
            Cutting-edge AI technologies powering agricultural advisory services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Natural Language</h3>
              <p className="text-sm text-gray-600">Understands Malayalam and English queries naturally</p>
            </div>
            <div className="text-center">
              <Camera className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Computer Vision</h3>
              <p className="text-sm text-gray-600">Analyzes crop images to identify diseases and pests</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Context Awareness</h3>
              <p className="text-sm text-gray-600">Considers location, weather, and seasonal factors</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-sm text-gray-600">Always available for instant expert advice</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">AI Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {aiFeatures.map((feature) => (
                <Badge key={feature} variant="secondary" className="bg-blue-100 text-blue-800">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Stack */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>
              Built with modern web technologies and AI frameworks for optimal performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              Comprehensive features designed specifically for farmers' needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center"><Mic className="w-4 h-4 mr-2 text-purple-600" />Voice input and responses</li>
              <li className="flex items-center"><Camera className="w-4 h-4 mr-2 text-green-600" />Image-based crop analysis</li>
              <li className="flex items-center"><Globe className="w-4 h-4 mr-2 text-blue-600" />Multilingual support</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-red-600" />Location-aware advice</li>
              <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-orange-600" />Expert escalation system</li>
              <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-teal-600" />Continuous learning</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Impact Statistics */}
      <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Making a Difference</CardTitle>
          <CardDescription className="text-green-100">
            Empowering farmers across India with AI-powered agricultural knowledge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-green-100">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-green-100">Crop Types Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-green-100">Queries Handled</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Roadmap */}
      <Card className="border-purple-200">
        <CardHeader>
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <CardTitle className="text-purple-900">Future Roadmap</CardTitle>
          <CardDescription>
            Continuous innovation to serve farmers better
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Short Term Goals</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Expand to more Indian languages</li>
                <li>• Enhanced image recognition accuracy</li>
                <li>• Weather integration and alerts</li>
                <li>• Mobile app development</li>
                <li>• Offline capability for remote areas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Long Term Vision</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• IoT sensor integration</li>
                <li>• Predictive crop analytics</li>
                <li>• Market price forecasting</li>
                <li>• Supply chain optimization</li>
                <li>• Global agricultural knowledge sharing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}