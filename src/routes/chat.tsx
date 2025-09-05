import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sparkles, Send, Bot, User } from 'lucide-react';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export const Route = createFileRoute('/chat')({
  component: Chat,
});

function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { id: 'm1', role: 'assistant', content: 'Hi! I\'m your AI assistant. How can I help today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length, isTyping]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setIsTyping(true);
    const timeout = setTimeout(() => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: generateMockReply(trimmed),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 900 + Math.random() * 700);

    return () => clearTimeout(timeout);
  };

  const headerGradient = useMemo(
    () => (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    ),
    []
  );

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="relative overflow-hidden rounded-2xl border bg-card">
        {headerGradient}
        <div className="relative px-6 py-10">
          <div className="mx-auto flex max-w-2xl items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">Chat Assistant</h1>
              <p className="text-sm text-muted-foreground">Professional. Minimal. Delightfully animated.</p>
            </div>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="hidden">
          <CardTitle>Chat</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid h-[65vh] grid-rows-[1fr_auto]">
            <div ref={listRef} className="overflow-y-auto px-4 py-6 space-y-4 bg-background/50">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className={
                      m.role === 'user'
                        ? 'flex justify-end'
                        : 'flex justify-start'
                    }
                  >
                    <MessageBubble role={m.role} content={m.content} />
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-start"
                  >
                    <TypingBubble />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t bg-card/50 p-4">
              <div className="mx-auto flex max-w-3xl items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="h-12"
                />
                <Button size="icon" className="h-12 w-12" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MessageBubble({ role, content }: { role: 'user' | 'assistant' | 'system'; content: string }) {
  const isUser = role === 'user';
  return (
    <div className="flex max-w-full items-end gap-2 md:gap-3">
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary/10 text-primary">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <motion.div
        className={
          isUser
            ? 'ml-auto max-w-[85%] rounded-2xl bg-primary text-primary-foreground px-4 py-2 shadow-sm'
            : 'max-w-[85%] rounded-2xl bg-muted px-4 py-2 shadow-sm'
        }
        initial={{ clipPath: 'inset(0 0 100% 0 round 16px)', opacity: 0.6 }}
        animate={{ clipPath: 'inset(0 0 0% 0 round 16px)', opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{content}</p>
      </motion.div>
      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex max-w-full items-end gap-2 md:gap-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="bg-primary/10 text-primary">
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-2 shadow-sm">
        <div className="flex items-center gap-1.5 py-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60"
              animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function generateMockReply(input: string): string {
  const starters = [
    "Here\'s a helpful thought:",
    'Great question —',
    'Consider this:',
    'One approach is:',
  ];
  const s = starters[Math.floor(Math.random() * starters.length)];
  return `${s} ${transformEcho(input)}`;
}

function transformEcho(text: string): string {
  if (text.length < 8) return `"${text}"`; 
  return text
    .replace(/\b(i)\b/gi, 'you')
    .replace(/\b(my)\b/gi, 'your')
    .replace(/\b(me)\b/gi, 'you')
    .replace(/\b(ai)\b/gi, 'AI')
    .concat(' ✅');
}

