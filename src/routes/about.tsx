import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket } from 'lucide-react';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  const technologies = [
    'React', 'TypeScript', 'TanStack Router', 'ShadCN UI', 
    'Tailwind CSS', 'Vite', 'Lucide Icons'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About This App</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn more about the technologies and principles behind this application.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Modern Stack</CardTitle>
            <CardDescription>
              Built with the latest and greatest web technologies for optimal performance and developer experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Design System</CardTitle>
            <CardDescription>
              Consistent and accessible design using ShadCN UI components and Tailwind CSS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Responsive design principles</li>
              <li>• Consistent color palette</li>
              <li>• Accessible components</li>
              <li>• Modern typography</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 text-purple-600" />
          </div>
          <CardTitle>Key Features</CardTitle>
          <CardDescription>
            This application demonstrates modern React development practices and routing capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Client-side routing with TanStack Router</li>
                <li>• Active link highlighting</li>
                <li>• Type-safe navigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Development</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Hot module replacement</li>
                <li>• TypeScript support</li>
                <li>• Modern build tools</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}