import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, MoreVertical, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatHeaderProps {
  isOnline?: boolean;
  onMinimize?: () => void;
  onSettings?: () => void;
  botName?: string;
}

export function ChatHeader({ 
  isOnline = true, 
  onMinimize, 
  onSettings, 
  botName = "AI Assistant" 
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="w-10 h-10 border-2 border-primary/20">
            <AvatarFallback className="bg-primary/10">
              <Bot className="w-5 h-5 text-primary" />
            </AvatarFallback>
          </Avatar>
          <div className={cn(
            "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background",
            isOnline ? "bg-green-500" : "bg-gray-400"
          )} />
        </div>
        
        <div>
          <h3 className="font-semibold text-sm">{botName}</h3>
          <div className="flex items-center gap-2">
            <Badge 
              variant={isOnline ? "default" : "secondary"} 
              className={cn(
                "text-xs px-2 py-0",
                isOnline && "bg-green-500/10 text-green-700 dark:text-green-400"
              )}
            >
              {isOnline ? "Online" : "Offline"}
            </Badge>
            {isOnline && (
              <span className="text-xs text-muted-foreground">
                Typically replies instantly
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        {onMinimize && (
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 rounded-full hover:bg-muted transition-colors"
            onClick={onMinimize}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
        )}
        
        {onSettings && (
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 rounded-full hover:bg-muted transition-colors"
            onClick={onSettings}
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}