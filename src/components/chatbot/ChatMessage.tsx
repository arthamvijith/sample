import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  isAnimating?: boolean;
}

export function ChatMessage({ message, isAnimating = false }: ChatMessageProps) {
  return (
    <div
      className={cn(
        'flex gap-3 p-4 transition-all duration-500 ease-out animate-slide-in-up',
        message.isBot ? 'justify-start' : 'justify-end',
        isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      )}
    >
      {message.isBot && (
        <Avatar className="w-8 h-8 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10">
            <Bot className="w-4 h-4 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md',
          message.isBot
            ? 'bg-muted text-muted-foreground rounded-tl-sm hover:bg-muted/80'
            : 'bg-primary text-primary-foreground rounded-tr-sm ml-auto hover:bg-primary/90'
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <time className={cn(
          'text-xs opacity-70 mt-1 block',
          message.isBot ? 'text-muted-foreground' : 'text-primary-foreground'
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </time>
      </div>
      
      {!message.isBot && (
        <Avatar className="w-8 h-8 border-2 border-primary/20">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}