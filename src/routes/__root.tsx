import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Button } from '@/components/ui/button';
import { Home, User, Mail } from 'lucide-react';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-lg">My App</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/">
                  {({ isActive }) => (
                    <Button 
                      variant={isActive ? "default" : "ghost"} 
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </Button>
                  )}
                </Link>
                
                <Link to="/about">
                  {({ isActive }) => (
                    <Button 
                      variant={isActive ? "default" : "ghost"} 
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <User className="w-4 h-4" />
                      <span>About</span>
                    </Button>
                  )}
                </Link>
                
                <Link to="/contact">
                  {({ isActive }) => (
                    <Button 
                      variant={isActive ? "default" : "ghost"} 
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </Button>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      
      <TanStackRouterDevtools />
    </div>
  ),
});