import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ImageIcon, Mic } from 'lucide-react';

export const Route = createFileRoute('/ask')({
  component: Ask,
});

function Ask() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend/LLM
    setResponse('ഇത് ഒരു ഡെമോ പ്രതികരണമാണ്. നിങ്ങളുടെ ചോദ്യം സ്വീകരಿಸಲಾഗಿದെ, ഏതാനും നിമിഷങ്ങൾക്കകം കൃത്യമായ മറുപടി ലഭിക്കും.');
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Digital Krishi Officer</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          നിങ്ങളുടെ കൃഷി സംബന്ധമായ സംശയങ്ങൾ മലയാളത്തിൽ ചോദിക്കാം. ദൃശ്യങ്ങൾ അല്ലെങ്കിൽ ശബ്‌ദം അപ്‌ലോഡ് ചെയ്യാം.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ask a Question</CardTitle>
          <CardDescription>Type your question, attach an image or voice note, and submit.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="question">Question (Malayalam preferred)</Label>
              <Textarea
                id="question"
                placeholder="ഉദാഹരണം: എന്റെ മണൽപ്പഴക്കിന്റെ ഇലകളിൽ കറുത്ത പുള്ളികൾ ഉണ്ടായി. ഏത് വിഷം സ്പ്രേ ചെയ്യണം?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                className="min-h-[120px]"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="image">Upload Image</Label>
                <Input id="image" type="file" accept="image/*" className="file:mr-4 file:py-2 file:px-4" />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="audio">Upload Voice Note</Label>
                <Input id="audio" type="file" accept="audio/*" className="file:mr-4 file:py-2 file:px-4" />
              </div>
            </div>

            <Button type="submit" className="flex items-center space-x-2">
              <Mic className="w-4 h-4" />
              <span>Submit</span>
            </Button>
          </form>
        </CardContent>
      </Card>

      {response && (
        <Card className="bg-green-50 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap leading-relaxed">{response}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}