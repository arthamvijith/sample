import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Bot, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Chatbot } from '@/components/chatbot';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Assistant
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Chatbot Interface
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience a beautifully designed, animated chatbot interface built with React, TypeScript, 
            and modern UI components. Features smooth animations, responsive design, and professional styling.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="flex items-center space-x-2 px-8 py-3 text-lg"
              onClick={() => setShowChatbot(true)}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Try Chatbot</span>
            </Button>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="flex items-center space-x-2 px-8 py-3 text-lg">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Smooth Animations</CardTitle>
              <CardDescription className="text-base">
                Beautiful entrance animations, typing indicators, and smooth transitions throughout the interface.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Modern Design</CardTitle>
              <CardDescription className="text-base">
                Clean, professional interface with attention to detail, responsive design, and dark/light theme support.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Built with Quality</CardTitle>
              <CardDescription className="text-base">
                TypeScript for type safety, modern React patterns, and professional component architecture.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Demo Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-2">
          <CardContent className="p-8 text-center">
            <CardTitle className="text-3xl mb-4">Experience the Chatbot</CardTitle>
            <CardDescription className="text-lg mb-8 max-w-2xl mx-auto">
              Click the button below to open the chatbot interface and experience the smooth animations, 
              professional design, and responsive interactions.
            </CardDescription>
            
            <Button 
              size="lg" 
              onClick={() => setShowChatbot(true)}
              className="px-8 py-4 text-lg hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Open Chatbot
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center space-x-6 pt-8">
          <Link to="/about">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Chatbot Overlay */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <Chatbot
              height="600px"
              isMinimized={isChatbotMinimized}
              onMinimize={() => {
                setIsChatbotMinimized(true);
                setShowChatbot(false);
              }}
            />
          </div>
          
          {/* Close overlay when clicking outside */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setShowChatbot(false)}
          />
        </div>
      )}
    </div>
  );
}