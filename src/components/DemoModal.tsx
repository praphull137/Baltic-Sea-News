import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AiHealth from './AiHealth';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* Modal */}
          <motion.div
            className="relative rounded-3xl shadow-2xl w-full max-w-7xl h-[90vh] max-h-screen mx-4 overflow-hidden"
            style={{
              backgroundColor: '#F1E8DB',
              border: '1px solid #D1835A'
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative flex flex-col h-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-[#5C8C85] hover:bg-[#e3d5c5] p-2 rounded-full transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Scrollable Content Area */}
              <div className="relative p-8 overflow-y-auto flex-1">
                <AiHealth />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;