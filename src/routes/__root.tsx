import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Home, MessageSquare, Info, Phone, Sprout } from 'lucide-react';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background w-full">
      <nav className="border-b bg-white shadow-sm">
        <div className="w-full px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg text-green-800">KrishiMitra AI</span>
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
                
                <Link to="/query">
                  {({ isActive }) => (
                    <Button 
                      variant={isActive ? "default" : "ghost"} 
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ask Query</span>
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
                      <Info className="w-4 h-4" />
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
                      <Phone className="w-4 h-4" />
                      <span>Contact</span>
                    </Button>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="w-full px-4 py-8">
        <Outlet />
      </main>
    </div>
  ),
});