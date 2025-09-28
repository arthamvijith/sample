import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Digital Krishi Officer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          An AI-powered advisory system delivering personalized farming advice to Malayalam-speaking farmers in real time.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <Link to="/about">
            <Button size="lg" className="flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 pt-12">
        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Malayalam Support</CardTitle>
            <CardDescription>
              Ask queries in your native language via text or voice.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Image Analysis</CardTitle>
            <CardDescription>
              Upload crop images to diagnose pests and diseases instantly.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Location Aware</CardTitle>
            <CardDescription>
              Advice tailored to your farm’s location, season, and crop stage.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* CTA Section */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <CardTitle className="text-2xl mb-4">Ready to get started?</CardTitle>
          <CardDescription className="text-primary-foreground/80 mb-6">
            Explore the different pages to see the routing in action.
          </CardDescription>
          <div className="flex justify-center space-x-4">
            <Link to="/about">
              <Button variant="secondary">
                About Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}