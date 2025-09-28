import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MessageSquare, 
  Mic, 
  Camera, 
  Send, 
  MapPin, 
  Loader2, 
  Bot, 
  User,
  Upload,
  MicIcon,
  StopCircle,
  Languages,
  Sprout
} from 'lucide-react';

export const Route = createFileRoute('/query')({
  component: QueryPage,
});

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  language?: string;
}

function QueryPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'നമസ്കാരം! ഞാൻ KrishiMitra AI ആണ്. നിങ്ങളുടെ കൃഷി സംബന്ധമായ എല്ലാ സംശയങ്ങളും ചോദിക്കാം. പീഡകങ്ങൾ, കാലാവസ്ഥ, വിളകൾ, സബ്സിഡികൾ, മാർക്കറ്റ് ട്രെൻഡുകൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കാം.',
      timestamp: new Date(),
      language: 'malayalam'
    }
  ]);
  const [currentQuery, setCurrentQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('malayalam');
  const [location, setLocation] = useState('');
  const [cropType, setCropType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Demo responses in Malayalam and English
  const demoResponses: { [key: string]: string } = {
    'pest': 'വാഴയിലെ ഇല പുള്ളി രോഗത്തിന് കാർബെൻഡാസിം 50% WP (0.1%) അല്ലെങ്കിൽ പ്രോപിക്കോണസോൾ 25% EC (0.1%) സ്പ്രേ ചെയ്യുക. 10-15 ദിവസം ഇടവിട്ട് 2-3 തവണ സ്പ്രേ ചെയ്യുക. രോഗം ബാധിച്ച ഇലകൾ നീക്കം ചെയ്യുക.',
    'weather': 'അടുത്ത ആഴ്ച മഴയുണ്ടാകാം. നെൽകൃഷിക്ക് നല്ല സമയമാണ്. വിത്ത് വിതയ്ക്കാൻ തയ്യാറാകുക. മഴയ്ക്ക് മുമ്പ് വയലിൽ നിന്ന് വെള്ളം വറ്റിക്കുക.',
    'subsidy': 'PM-KISAN യോജനയിൽ പ്രതിവർഷം ₹6,000 ലഭിക്കും. അപേക്ഷ ഓൺലൈനായി pmkisan.gov.in ൽ സമർപ്പിക്കാം. ആധാർ കാർഡ്, ബാങ്ക് അക്കൗണ്ട്, ഭൂമി രേഖകൾ ആവശ്യമാണ്.',
    'market': 'ഈ മാസം വാഴയുടെ വില കിലോയ്ക്ക് ₹25-30 ആണ്. അടുത്ത മാസം ഡിമാൻഡ് കൂടുമെന്ന് പ്രതീക്ഷിക്കുന്നു. നല്ല ഗുണമേന്മയുള്ള വാഴ വിൽക്കാൻ നല്ല സമയമാണ്.',
    'general': 'കൂടുതൽ വിവരങ്ങൾക്ക് നിങ്ങളുടെ പ്രദേശത്തെ കൃഷി ഓഫീസറെ സമീപിക്കുക. ഞങ്ങൾക്ക് കൂടുതൽ സഹായം ആവശ്യമുള്ള സങ്കീർണ്ണമായ കാര്യങ്ങൾ അവരിലേക്ക് കൈമാറും.'
  };

  const handleSendMessage = async () => {
    if (!currentQuery.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: currentQuery,
      timestamp: new Date(),
      language: selectedLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentQuery('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      let response = demoResponses.general;
      
      // Simple keyword matching for demo
      const query = currentQuery.toLowerCase();
      if (query.includes('pest') || query.includes('disease') || query.includes('പീഡകം') || query.includes('രോഗം')) {
        response = demoResponses.pest;
      } else if (query.includes('weather') || query.includes('rain') || query.includes('കാലാവസ്ഥ') || query.includes('മഴ')) {
        response = demoResponses.weather;
      } else if (query.includes('subsidy') || query.includes('scheme') || query.includes('സബ്സിഡി') || query.includes('യോജന')) {
        response = demoResponses.subsidy;
      } else if (query.includes('market') || query.includes('price') || query.includes('മാർക്കറ്റ്') || query.includes('വില')) {
        response = demoResponses.market;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date(),
        language: 'malayalam'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Voice recording functionality would be implemented here
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setCurrentQuery('വാഴയിലെ ഇല പുള്ളി രോഗത്തിന് എന്ത് മരുന്ന് ഉപയോഗിക്കാം?');
      }, 3000);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      // Image analysis would be implemented here
      setCurrentQuery(`ഈ ചിത്രത്തിലെ രോഗം എന്താണ്? (${file.name})`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center space-x-3">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-green-900">Ask KrishiMitra AI</h1>
        </div>
        <p className="text-lg text-gray-600">
          Get instant expert advice for your farming questions in Malayalam
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2 space-y-4">
          {/* Messages */}
          <Card className="h-96 overflow-y-auto">
            <CardContent className="p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-green-600 text-white'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Input Area */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                {uploadedImage && (
                  <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg">
                    <Camera className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-700">Image uploaded: {uploadedImage.name}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setUploadedImage(null)}
                    >
                      ×
                    </Button>
                  </div>
                )}
                
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Type your farming question in Malayalam or English..."
                    value={currentQuery}
                    onChange={(e) => setCurrentQuery(e.target.value)}
                    className="min-h-[100px] resize-none"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button
                      variant={isRecording ? "destructive" : "outline"}
                      size="sm"
                      onClick={handleVoiceRecord}
                      disabled={isLoading}
                    >
                      {isRecording ? (
                        <>
                          <StopCircle className="w-4 h-4 mr-2" />
                          Stop Recording
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4 mr-2" />
                          Voice
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isLoading}
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Image
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>

                  <Button
                    onClick={handleSendMessage}
                    disabled={!currentQuery.trim() || isLoading}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Context Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Context Settings
              </CardTitle>
              <CardDescription>
                Help us provide more accurate advice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="language">Preferred Language</Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="malayalam">മലയാളം (Malayalam)</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Kottayam, Kerala"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="crop">Current Crop</Label>
                <Select value={cropType} onValueChange={setCropType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice (നെൽ)</SelectItem>
                    <SelectItem value="banana">Banana (വാഴ)</SelectItem>
                    <SelectItem value="coconut">Coconut (തെങ്ങ്)</SelectItem>
                    <SelectItem value="pepper">Pepper (കുരുമുളക്)</SelectItem>
                    <SelectItem value="rubber">Rubber (റബ്ബർ)</SelectItem>
                    <SelectItem value="vegetables">Vegetables (പച്ചക്കറികൾ)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Quick Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Questions</CardTitle>
              <CardDescription>
                Tap to ask common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-sm h-auto p-3"
                onClick={() => setCurrentQuery('വാഴയിലെ ഇല പുള്ളി രോഗത്തിന് എന്ത് ചെയ്യാം?')}
              >
                വാഴയിലെ ഇല പുള്ളി രോഗത്തിന് എന്ത് ചെയ്യാം?
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-sm h-auto p-3"
                onClick={() => setCurrentQuery('ഈ ആഴ്ച കാലാവസ്ഥ എങ്ങനെയാണ്?')}
              >
                ഈ ആഴ്ച കാലാവസ്ഥ എങ്ങനെയാണ്?
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-sm h-auto p-3"
                onClick={() => setCurrentQuery('PM-KISAN സബ്സിഡി എങ്ങനെ അപേക്ഷിക്കാം?')}
              >
                PM-KISAN സബ്സിഡി എങ്ങനെ അപേക്ഷിക്കാം?
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-sm h-auto p-3"
                onClick={() => setCurrentQuery('ഇന്നത്തെ വാഴയുടെ മാർക്കറ്റ് വില എന്താണ്?')}
              >
                ഇന്നത്തെ വാഴയുടെ മാർക്കറ്റ് വില എന്താണ്?
              </Button>
            </CardContent>
          </Card>

          {/* Features Info */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-green-800">
                <Languages className="w-4 h-4" />
                <span>Malayalam & English support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-800">
                <MicIcon className="w-4 h-4" />
                <span>Voice input & responses</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-800">
                <Camera className="w-4 h-4" />
                <span>Image-based crop analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-800">
                <MapPin className="w-4 h-4" />
                <span>Location-aware advice</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}