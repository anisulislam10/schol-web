'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Message = {
  text: string;
  isUser: boolean;
};

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm the GGC Assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Moved early return check down to render section to follow Rules of Hooks

  const levenshtein = (a: string, b: string) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
          matrix[i - 1][j - 1] + indicator // substitution
        );
      }
    }
    return matrix[a.length][b.length];
  };

  const isFuzzyMatch = (userWord: string, keyword: string) => {
    if (userWord === keyword) return true;
    const dist = levenshtein(userWord, keyword);
    if (keyword.length <= 3) return dist === 0;
    if (keyword.length <= 5) return dist <= 1;
    return dist <= 2;
  };

  const getBotResponse = (userInput: string) => {
    const tokens = userInput.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);

    // Check for greetings
    const greetings = ['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon'];
    if (tokens.some(t => greetings.some(g => isFuzzyMatch(t, g))) && tokens.length <= 4) {
      return "Hello there! How can I assist you with Govt. Graduate College today?";
    }

    // Advanced knowledge base matching
    const intents = [
      {
        intent: 'identity',
        keywords: ['who', 'what', 'bot', 'robot', 'name', 'assistant'],
        contextWords: ['are', 'you', 'your', 'is'],
        answer: "I am the GGC Assistant, a virtual helper here to answer your questions about Govt. Graduate College, its admissions, and more!"
      },
      {
        intent: 'admissions',
        keywords: ['admission', 'admissions', 'apply', 'enroll', 'form', 'join', 'register'],
        answer: "Admissions are currently open for Fall 2024. You can apply by clicking 'Apply Now' in the navigation bar or visiting our Admissions page."
      },
      {
        intent: 'fees',
        keywords: ['fee', 'fees', 'cost', 'tuition', 'price', 'dues', 'scholarship', 'financial'],
        answer: "Our fee structure varies by program. Please visit the Admissions > Fee Structure page for detailed information."
      },
      {
        intent: 'contact',
        keywords: ['contact', 'phone', 'email', 'reach', 'number', 'call', 'telephone'],
        answer: "You can reach us at +92 (051) 1234567 or email info@ggcstr.edu.pk. We are located at Peshawar Road, Rawalpindi ."
      },
      {
        intent: 'programs',
        keywords: ['program', 'programs', 'degree', 'bs', 'ics', 'premedical', 'medical', 'preengineering', 'engineering', 'course', 'courses', 'major'],
        answer: "We offer BS Programs, Pre-Medical, Pre-Engineering, and ICS. Visit our Academics section to see all departments and degree programs."
      },
      {
        intent: 'faculty',
        keywords: ['faculty', 'teacher', 'teachers', 'professor', 'professors', 'staff'],
        answer: "We have a highly qualified faculty. You can learn more about them in the About > Faculty section."
      },
      {
        intent: 'hours',
        keywords: ['time', 'open', 'close', 'hour', 'hours', 'timing', 'timings'],
        contextWords: ['what', 'when', 'office', 'college', 'are'],
        answer: "Our office hours are Monday to Friday: 8:00 AM – 3:00 PM, and Saturday: 8:00 AM – 12:00 PM."
      },
      {
        intent: 'location',
        keywords: ['location', 'address', 'where', 'map', 'situated', 'located', 'find', 'place'],
        answer: "We are located at Peshawar Road, Rawalpindi , Punjab, Pakistan."
      },
      {
        intent: 'news',
        keywords: ['news', 'event', 'events', 'notice', 'notices', 'update', 'updates', 'happening'],
        answer: "You can check all our recent updates and notices in the 'News & Events' section from the top menu."
      },
    ];

    let bestMatch = null;
    let highestScore = 0;

    for (const item of intents) {
      let score = 0;

      const matchedKeywords = item.keywords.filter(kw => tokens.some(t => isFuzzyMatch(t, kw)));
      score += matchedKeywords.length;

      if (item.contextWords) {
        const hasContext = item.contextWords.some(cw => tokens.some(t => isFuzzyMatch(t, cw)));
        if (!hasContext && matchedKeywords.length > 0) {
          score -= 1; // Penalize if context is missing for ambiguous keywords
        } else if (hasContext && matchedKeywords.length > 0) {
          score += 1; // Reward if context is present
        }
      }

      if (score > 0 && score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch) {
      return bestMatch.answer;
    }

    return "I couldn't find an exact answer to that. Please try rephrasing your question, or visit our Contact Us page to reach our support team.";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');

    // Simulate small delay for bot response
    setTimeout(() => {
      const response = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  // Early return for admin routes after all hooks
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#ffcc00] text-[#002d56] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[9999]"
        aria-label="Open Chatbot"
      >
        <MessageCircle size={32} />
      </button>
    );
  }

  return (
    <div className={`fixed right-6 z-[9999] transition-all duration-300 ease-in-out ${isMinimized ? 'bottom-6 translate-y-[calc(100%-60px)]' : 'bottom-6 translate-y-0'} w-[350px] bg-white rounded-t-xl rounded-bl-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col`} style={{ height: '500px', maxHeight: '80vh' }}>
      {/* Header */}
      <div className="bg-[#002d56] text-white p-4 flex justify-between items-center cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-tight">GGC Assistant</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] text-white/70 uppercase tracking-widest">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="p-1 hover:bg-white/20 rounded-sm transition-colors text-white/70 hover:text-white" title="Minimize">
            <Minus size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="p-1 hover:bg-white/20 rounded-sm transition-colors text-white/70 hover:text-white" title="Close">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.isUser ? 'bg-[#ffcc00] text-[#002d56] rounded-br-none font-medium shadow-sm' : 'bg-white border border-slate-100 text-slate-600 rounded-bl-none shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-full focus:border-[#ffcc00] outline-none text-sm text-[#002d56]"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#002d56] text-[#ffcc00] rounded-full flex items-center justify-center hover:bg-[#002d56]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={14} className="ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
