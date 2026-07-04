import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AiChat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
  const GROQ_MODEL = 'llama-3.3-70b-versatile';

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      user: 'You',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      message: newMessage,
      time: 'now',
      likes: 0,
      isOnline: true
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      const groqMessages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        ...messages.map(msg => ({
          role: msg.user === 'You' ? 'user' : 'assistant',
          content: msg.message
        })),
        { role: 'user', content: newMessage }
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

  const emojis = ['😊', '👍', '❤️', '🎉', '📚', '🌟', '💡', '🚀'];

  return (
    <div
      className="rounded-2xl shadow-md h-96 flex flex-col overflow-hidden"
      style={{
        backgroundColor: '#F1E8DB',
        border: '1px solid #D1835A',
      }}
    >
      <div
        className="p-4 font-semibold text-sm text-white"
        style={{
          backgroundColor: '#5C8C85',
        }}
      >
        AI Assistant
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className="flex items-start space-x-3">
            <img
              src={msg.avatar}
              alt={msg.user}
              className="w-8 h-8 rounded-full object-cover"
              style={{ border: '1px solid #5C8C85' }}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold" style={{ color: '#5C8C85' }}>
                  {msg.user}
                </span>
                <span style={{ color: '#5E8E87' }}>{msg.time}</span>
              </div>
              <div
                className="mt-1 p-3 rounded-2xl text-sm leading-relaxed break-words"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#5E8E87',
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    msg.user === 'AI Agent'
                      ? msg.message
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\n/g, '<br />')
                          .replace(
                            /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu,
                            '<span style="font-size:1.1em;vertical-align:middle;">$1</span>'
                          )
                      : msg.message
                }}
              />
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ fontSize: '0.875rem', color: '#5E8E87' }}>AI is typing...</div>
        )}
        <div ref={messagesEndRef} className="h-px" />
      </div>

      <div
        className="p-3 flex items-center space-x-2"
        style={{
          borderTop: '1px solid #D1835A',
          backgroundColor: '#F1E8DB',
        }}
      >
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
              border: '1px solid #D1835A',
              borderRadius: '1rem',
              outline: 'none',
              fontSize: '0.875rem',
              color: '#5E8E87'
            }}
          />
          <AnimatePresence>
            {showEmojiPicker && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full right-0 mb-2 p-2 z-50"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #5C8C85',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <div className="grid grid-cols-4 gap-1">
                  {emojis.map((emoji, i) => (
                    <motion.button
                      key={i}
                      onClick={() => {
                        setNewMessage(newMessage + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="p-1 text-lg rounded"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        backgroundColor: '#F1E8DB',
                      }}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          className="text-white px-4 py-2 rounded-xl disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#D1835A',
            border: 'none',
          }}
        >
          <Send className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default AiChat;