import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, Users, Headphones, MessageCircle, Clock, Sprout, Building2 } from 'lucide-react';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('നന്ദി! നിങ്ങളുടെ സന്ദേശം ഞങ്ങൾക്ക് ലഭിച്ചു. ഞങ്ങൾ ഉടൻ തന്നെ മറുപടി നൽകാം.');
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 bg-gradient-to-b from-green-50 to-white py-16 -mx-4 px-4 rounded-lg">
        <div className="flex justify-center mb-4">
          <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
            <Sprout className="w-4 h-4 mr-2" />
            We're Here to Help
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-green-900">Contact KrishiMitra AI</h1>
        <p className="text-xl text-green-600 max-w-3xl mx-auto leading-relaxed">
          Need help with the AI advisory system? Want to provide feedback? 
          Have questions about agricultural practices? We're here to assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send us a message
            </CardTitle>
            <CardDescription>
              Fill out the form below and our agricultural experts will get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name / പേര്</Label>
                  <Input id="firstName" placeholder="രാമു" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name / കുടുംബപ്പേര്</Label>
                  <Input id="lastName" placeholder="നായർ" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email / ഇമെയിൽ</Label>
                <Input id="email" type="email" placeholder="ramu@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / ഫോൺ നമ്പർ</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location / സ്ഥലം</Label>
                <Input id="location" placeholder="Kottayam, Kerala" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject / വിഷയം</Label>
                <Input id="subject" placeholder="AI advisory system feedback" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message / സന്ദേശം</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your farming questions, feedback on the AI system, or how we can help improve our services..."
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center space-x-2 bg-green-600 hover:bg-green-700">
                <Send className="w-4 h-4" />
                <span>Send Message / സന്ദേശം അയയ്ക്കുക</span>
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <Headphones className="w-5 h-5 mr-2" />
                Get in touch
              </CardTitle>
              <CardDescription>
                Multiple ways to reach our agricultural support team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-gray-600">support@krishimitra.ai</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Farmer Helpline</p>
                  <p className="text-sm text-gray-600">1800-180-1551 (Toll Free)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-sm text-gray-600">Agricultural Technology Center<br/>Thiruvananthapuram, Kerala 695014</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium">Partnership Inquiries</p>
                  <p className="text-sm text-gray-600">partnerships@krishimitra.ai</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">24/7 AI Support</h3>
              </div>
              <p className="text-sm text-green-800 mb-4">
                Our AI system is available round the clock to answer your farming questions. 
                For complex issues, our agricultural experts respond within 2-4 hours.
              </p>
              <div className="text-xs text-green-700 space-y-1">
                <div>• AI Chatbot: Available 24/7</div>
                <div>• Expert Support: 6:00 AM - 10:00 PM IST</div>
                <div>• Emergency Helpline: Always Available</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Expert Network</h3>
              </div>
              <p className="text-sm text-blue-800 mb-4">
                Our team includes agricultural scientists, crop specialists, and local farming experts 
                from across Kerala and other states.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-blue-700">
                <div>• Crop Scientists</div>
                <div>• Pest Specialists</div>
                <div>• Soil Experts</div>
                <div>• Weather Analysts</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-orange-900 mb-2">Regional Support Centers</h3>
              <p className="text-sm text-orange-800 mb-4">
                Visit our regional centers for in-person consultations and training programs.
              </p>
              <div className="text-xs text-orange-700 space-y-1">
                <div>• Kottayam: Agricultural Research Station</div>
                <div>• Kozhikode: Spice Research Center</div>
                <div>• Thrissur: Coconut Development Board</div>
                <div>• Wayanad: Organic Farming Hub</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-center text-gray-900">Frequently Asked Questions</CardTitle>
          <CardDescription className="text-center">
            Quick answers to common questions about KrishiMitra AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How accurate is the AI advice?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Our AI is trained on extensive agricultural databases and validated by experts. 
                For critical decisions, we recommend consulting with local agricultural officers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is the service free?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Basic AI advisory services are completely free. Premium features and personalized 
                expert consultations are available through subscription plans.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Which languages are supported?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Currently, we support Malayalam and English. We're working to add more Indian 
                languages including Hindi, Tamil, Telugu, and Kannada.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do I report incorrect advice?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Use the feedback option in the chat interface or contact us directly. Your feedback 
                helps improve the AI system for all farmers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}