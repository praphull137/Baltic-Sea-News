import React, { useState, useRef, useEffect } from 'react';
import { Send, Heart, Smile, MoreHorizontal, Users, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommunityChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face',
      message: 'Hey everyone! Just joined the Global Health study group. Excited to collaborate on our infectious disease prevention project! 🦠',
      time: '2 mins ago',
      likes: 12,
      country: 'Spain',
      isOnline: true
    },
    {
      id: 2,
      user: 'Marcus Weber',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      message: 'Welcome Elena! I am focusing on the same topic. Happy to share some recent WHO data on vaccine strategies.',
      time: '1 min ago',
      likes: 8,
      country: 'Germany',
      isOnline: true
    },
    {
      id: 3,
      user: 'Sophie Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      message: 'I have access to some excellent medical journals through my university’s library. Happy to share key articles with the group 📄',
      time: '30 secs ago',
      likes: 15,
      country: 'France',
      isOnline: true
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        message: newMessage,
        time: 'now',
        likes: 0,
        country: 'Germany',
        isOnline: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleLike = (messageId: number) => {
    setMessages(messages.map(msg =>
      msg.id === messageId ? { ...msg, likes: msg.likes + 1 } : msg
    ));
  };

  const emojis = ['😊', '👍', '❤️', '🎉', '📚', '🌟', '💡', '🚀'];

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That sounds like a great idea! Count me in! 🙌",
        "Has anyone tried the new telemedicine simulation tool? It's a game changer for clinical skills practice!",
        "Has anyone tried the new language exchange feature? It's amazing!",
        "I'd love to join the next virtual case discussion. What time works for everyone?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const newMsg = {
        id: messages.length + Math.random(),
        user: 'Anna Kowalski',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
        message: randomResponse,
        time: 'just now',
        likes: Math.floor(Math.random() * 10),
        country: 'Poland',
        isOnline: true
      };
      setMessages(prev => [...prev, newMsg]);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) simulateTyping();
    }, 15000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden h-[30rem] flex flex-col">
  {/* Header */}
  <div className="bg-[#5C8C85] px-4 py-3 text-white">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Users className="h-5 w-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-white"></div>
        </motion.div>
        <div>
          <h3 className="font-semibold text-sm">European Healthcare Hub</h3>
          <p className="text-xs text-white/80">248 members online</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Globe className="h-4 w-4" />
        <span className="text-xs">Live</span>
      </div>
    </div>
  </div>

  {/* Messages */}
  <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-white dark:bg-gray-800">
    <AnimatePresence>
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-3 group"
        >
          <motion.div className="relative flex-shrink-0">
            <img
              src={message.avatar}
              alt={message.user}
              className="w-8 h-8 rounded-full object-cover border-2 border-[#D1835A]"
            />
            {message.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            )}
          </motion.div>

          <div className="flex-1 space-y-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">{message.user}</span>
              <span className="px-2 py-0.5 bg-[#D1835A]/10 text-[#D1835A] rounded-full text-xs">
                {message.country}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-2">
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                {message.message}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button
                onClick={() => handleLike(message.id)}
                className="flex items-center gap-1 hover:text-[#D1835A]"
              >
                <Heart className="h-3 w-3" />
                <span>{message.likes}</span>
              </motion.button>
              <button className="hover:text-[#D1835A]">Reply</button>
              <MoreHorizontal className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>

    {isTyping && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400"
      >
        <div className="flex space-x-1">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#D1835A] rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay }}
            />
          ))}
        </div>
        <span>Someone is typing...</span>
      </motion.div>
    )}
    <div ref={messagesEndRef} />
  </div>

  {/* Message Input */}
  <div className="px-3 py-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-3">
      <div className="flex-1 relative">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1835A] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />

        {/* Emoji */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <motion.button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-400 hover:text-[#D1835A]"
          >
            <Smile className="h-5 w-5" />
          </motion.button>

          <AnimatePresence>
            {showEmojiPicker && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-2"
              >
                <div className="grid grid-cols-4 gap-1">
                  {emojis.map((emoji, i) => (
                    <motion.button
                      key={i}
                      onClick={() => {
                        setNewMessage(newMessage + emoji);
                        setShowEmojiPicker(false);
                      }}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-lg"
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        onClick={handleSendMessage}
        disabled={!newMessage.trim()}
        className="bg-[#D1835A] text-white p-2 rounded-xl hover:bg-[#bb6a49] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Send className="h-5 w-5" />
      </motion.button>
    </div>
  </div>
</div>

  );
};

export default CommunityChat;
