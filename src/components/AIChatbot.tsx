import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  original?: string;
  improved?: string;
}

export function AIChatbot({ isOpen, onClose }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI resume assistant. Send me any text from your resume and I\'ll help you polish it to make it more professional and impactful.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with typing delay
    setTimeout(() => {
      const improvedText = generateImprovedText(input);
      const aiMessage: Message = {
        role: 'assistant',
        content: 'Here\'s an improved version:',
        original: input,
        improved: improvedText,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateImprovedText = (text: string): string => {
    // Mock AI improvement - in reality this would call an AI API
    const improvements = [
      {
        trigger: ['manage', 'work', 'responsible'],
        prefix: 'Led',
        additions: ['resulting in 25% efficiency improvement', 'driving measurable results'],
      },
      {
        trigger: ['develop', 'create', 'build'],
        prefix: 'Engineered',
        additions: ['leveraging modern technologies', 'improving user experience by 40%'],
      },
      {
        trigger: ['help', 'assist'],
        prefix: 'Collaborated with cross-functional teams to',
        additions: ['exceeding project goals', 'delivering ahead of schedule'],
      },
    ];

    let improved = text;
    
    // Add action verbs and quantifiable results
    const lowerText = text.toLowerCase();
    const matchingImprovement = improvements.find((imp) =>
      imp.trigger.some((t) => lowerText.includes(t))
    );

    if (matchingImprovement) {
      improved = `${matchingImprovement.prefix} ${text.toLowerCase().replace(/^(managed|worked|responsible for|developed|created|built|helped|assisted)/i, '')}`;
      improved = improved.charAt(0).toUpperCase() + improved.slice(1);
      
      if (!improved.includes('%') && !improved.includes('increase')) {
        const randomAddition = matchingImprovement.additions[
          Math.floor(Math.random() * matchingImprovement.additions.length)
        ];
        improved += `, ${randomAddition}`;
      }
    } else {
      // Generic improvement
      improved = text.charAt(0).toUpperCase() + text.slice(1);
      if (!text.endsWith('.')) improved += '.';
      improved = improved.replace(/\bi\b/g, 'I');
    }

    return improved;
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-4 bottom-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200"
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <span>AI Resume Assistant</span>
            </div>
            <button onClick={onClose} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === 'user'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  
                  {message.original && message.improved && (
                    <div className="mt-3 space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-xs opacity-70 mb-1">Original:</div>
                        <div className="text-sm">{message.original}</div>
                      </div>
                      
                      <div className="bg-green-100 text-green-900 rounded-lg p-3">
                        <div className="text-xs opacity-70 mb-1">Improved:</div>
                        <div className="text-sm">{message.improved}</div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-white"
                          onClick={() => handleCopy(message.improved!, index)}
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check size={16} className="mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy size={16} className="mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700"
                        >
                          Replace
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Paste text to improve..."
                className="resize-none"
                rows={2}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              >
                <Send size={20} />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
