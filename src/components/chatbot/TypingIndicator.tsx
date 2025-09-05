import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex gap-3 p-4 animate-in slide-in-from-bottom-4 duration-300">
      <Avatar className="w-8 h-8 border-2 border-primary/20">
        <AvatarFallback className="bg-primary/10">
          <Bot className="w-4 h-4 text-primary" />
        </AvatarFallback>
      </Avatar>
      
      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex space-x-1">
          <div 
            className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '1.4s' }}
          />
          <div 
            className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
            style={{ animationDelay: '200ms', animationDuration: '1.4s' }}
          />
          <div 
            className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
            style={{ animationDelay: '400ms', animationDuration: '1.4s' }}
          />
        </div>
      </div>
    </div>
  );
}