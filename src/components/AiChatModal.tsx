import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';

const AiChatModal = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [country, setCountry] = useState('🇩🇪 Germany');
  const [city, setCity] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
  const GROQ_MODEL = 'llama-3.3-70b-versatile';

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      user: 'You',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      message: newMessage,
      time: 'now',
      likes: 0,
      isOnline: true
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      const context = `User is currently located in ${city}, ${country}.`;
      const groqMessages = [
        { role: 'system', content: `You are a helpful assistant. ${context}` },
        ...messages.map(msg => ({
          role: msg.user === 'You' ? 'user' : 'assistant',
          content: msg.message
        })),
        { role: 'user', content: `${context} ${newMessage}` }
      ];

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: groqMessages,
          temperature: 0.7
        })
      });

      const data = await res.json();
      const aiReply = data.choices?.[0]?.message?.content || 'No response from AI.';

      const botMessage = {
        id: Date.now() + 1,
        user: 'AI Agent',
        avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=AI',
        message: aiReply,
        time: 'just now',
        likes: 0,
        isOnline: true
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPrompts = [
    'Where is the nearest doctor?',
    'How do I get a doctor in my region?',
    'Is there a hospital open now?',
    'What are the healthcare options nearby?'
  ];

  const countries = [
    '🇺🇸 United States', '🇩🇪 Germany', '🇨🇦 Canada', '🇬🇧 United Kingdom', '🇫🇷 France',
    '🇯🇵 Japan', '🇸🇪 Sweden', '🇮🇳 India', '🇧🇷 Brazil', '🇦🇺 Australia',
    '🇨🇭 Switzerland', '🇳🇴 Norway', '🇳🇱 Netherlands', '🇪🇸 Spain', '🇮🇹 Italy',
    '🇰🇷 South Korea', '🇨🇳 China', '🇲🇽 Mexico', '🇿🇦 South Africa', '🇸🇬 Singapore',
    '🇩🇰 Denmark', '🇧🇪 Belgium', '🇦🇹 Austria', '🇮🇱 Israel', '🇸🇦 Saudi Arabia',
    '🇱🇹 Lithuania', '🇱🇻 Latvia', '🇪🇪 Estonia'
  ];

  return (
    <div
      className="w-full h-full rounded-2xl flex flex-col overflow-hidden"
      style={{ backgroundColor: '#F1E8DB' }}
    >
      {/* Header */}
      <div className="p-4 text-sm flex justify-between items-center" style={{ backgroundColor: '#5C8C85', color: '#FFFFFF' }}>
        <span className="font-semibold">AI Assistant</span>
        <div className="flex flex-col gap-1 items-end">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white whitespace-nowrap">Select your region:</span>
            <select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="text-sm rounded-md px-2 py-1"
              style={{ color: '#03353E' }}
            >
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Postal Code or City"
              className="text-sm rounded-md px-2 py-1"
              style={{ color: '#03353E' }}
            />
          </div>
        </div>
      </div>

      {/* Quick Prompts */}
      <div className="px-3 py-2 flex flex-wrap gap-2" style={{ backgroundColor: '#FFFFFF' }}>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => setNewMessage(prompt)}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: '#E9D9CC',
              color: '#03353E'
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 border-l border-r border-[#D1835A]">
        {messages.map(msg => (
          <div key={msg.id} className="flex items-start space-x-3">
            <img
              src={msg.avatar}
              alt={msg.user}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs">
                <span style={{ color: '#03353E', fontWeight: 600 }}>{msg.user}</span>
                <span style={{ color: '#5E8E87' }}>{msg.time}</span>
              </div>
              <div
                className="mt-1 p-3 rounded-2xl text-sm leading-relaxed break-words"
                style={{ backgroundColor: '#FFFFFF', color: '#5E8E87' }}
                dangerouslySetInnerHTML={{
                  __html:
                    msg.user === 'AI Agent'
                      ? msg.message
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\n/g, '<br />')
                          .replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, '<span style="font-size:1.1em;vertical-align:middle;">$1</span>')
                      : msg.message
                }}
              />
            </div>
          </div>
        ))}
        {isTyping && <div className="text-sm" style={{ color: '#5E8E87' }}>AI is typing...</div>}
        <div ref={messagesEndRef} className="h-px" />
      </div>

      {/* Input */}
      <div className="p-3 flex items-center space-x-2 border border-[#D1835A] rounded-b-2xl" style={{ backgroundColor: '#F1E8DB' }}>
        <div className="relative flex-1">
          <input
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            style={{
              width: '100%',
              padding: '0.5rem 1rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '1rem',
              fontSize: '0.875rem',
              color: '#03353E',
              outline: 'none'
            }}
          />
        </div>
        <button
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          style={{
            backgroundColor: '#D1835A',
            color: '#FFFFFF',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.75rem',
            fontWeight: 600,
            fontSize: '1rem',
            opacity: !newMessage.trim() ? 0.5 : 1,
            cursor: !newMessage.trim() ? 'not-allowed' : 'pointer'
          }}
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AiChatModal;