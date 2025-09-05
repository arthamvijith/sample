import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatHeader } from './ChatHeader';
import { ChatMessage, Message } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { cn } from '@/lib/utils';

// Sample bot responses for demo purposes
const BOT_RESPONSES = [
  "Hello! How can I help you today?",
  "That's a great question! Let me think about that...",
  "I understand what you're asking. Here's what I think:",
  "Thanks for sharing that with me. I'd be happy to assist!",
  "That's interesting! Can you tell me more about that?",
  "I'm here to help! What would you like to know?",
  "Let me help you with that. Here's some information:",
  "Great! I'm glad you asked. Here's my response:",
  "I see what you mean. That's definitely something worth discussing.",
  "Perfect! I have some thoughts on that topic."
];

interface ChatbotProps {
  className?: string;
  height?: string;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

export function Chatbot({ 
  className, 
  height = "600px", 
  isMinimized = false, 
  onMinimize 
}: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)],
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  if (isMinimized) {
    return null;
  }

  return (
    <Card 
      className={cn(
        "flex flex-col overflow-hidden shadow-2xl border-2 border-border/50",
        "animate-in slide-in-from-bottom-8 duration-500",
        "w-full max-w-md mx-auto backdrop-blur-sm bg-background/95",
        className
      )}
      style={{ height }}
    >
      <ChatHeader 
        isOnline={isOnline}
        onMinimize={onMinimize}
        botName="AI Assistant"
      />
      
      <ScrollArea 
        ref={scrollAreaRef}
        className="flex-1 px-0 chat-scrollbar"
      >
        <div className="space-y-1">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
              isAnimating={false}
            />
          ))}
          
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={isTyping}
        placeholder="Type your message..."
      />
    </Card>
  );
}