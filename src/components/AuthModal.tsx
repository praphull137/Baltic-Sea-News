
import React, { useState } from 'react';
import { X, Eye, EyeOff, Chrome, Facebook, Mail, Lock, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onModeChange: (mode: 'login' | 'register') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
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
            className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md mx-4 border border-gray-200 dark:border-gray-700 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-professional-purple-50/50 via-professional-blue-50/50 to-professional-green-50/50 dark:from-professional-purple-900/20 dark:via-professional-blue-900/20 dark:to-professional-green-900/20" />
            
            <div className="relative p-8">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Header */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-professional-purple-500 to-professional-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {mode === 'login' ? 
                    <Lock className="h-8 w-8 text-white" /> : 
                    <User className="h-8 w-8 text-white" />
                  }
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
                  {mode === 'login' ? 'Welcome Back' : 'Join Our Community'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {mode === 'login' 
                    ? 'Sign in to continue your wellness journey' 
                    : 'Start your global wellness journey today'
                  }
                </p>
              </motion.div>

              {/* Social Login */}
              <motion.div 
                className="space-y-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-3 h-12 border-2 border-gray-200 dark:border-gray-600 hover:border-professional-blue-300 dark:hover:border-professional-blue-500 hover:bg-professional-blue-50 dark:hover:bg-professional-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-professional-blue-700 dark:hover:text-professional-blue-300 transition-all duration-300"
                >
                  <Chrome className="h-5 w-5 text-red-500" />
                  <span className="font-medium">Continue with Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-3 h-12 border-2 border-gray-200 dark:border-gray-600 hover:border-professional-blue-300 dark:hover:border-professional-blue-500 hover:bg-professional-blue-50 dark:hover:bg-professional-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-professional-blue-700 dark:hover:text-professional-blue-300 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Continue with Facebook</span>
                </Button>
              </motion.div>

              {/* Divider */}
              <motion.div 
                className="relative mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                    Or continue with email
                  </span>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  {mode === 'register' && (
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300 font-medium">
                          First Name
                        </Label>
                        <div className="relative mt-2">
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-professional-purple-500 dark:focus:border-professional-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 font-medium">
                          Last Name
                        </Label>
                        <div className="relative mt-2">
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-professional-purple-500 dark:focus:border-professional-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            required
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                    Email Address
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-professional-blue-500 dark:focus:border-professional-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-medium">
                    Password
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-12 h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-professional-blue-500 dark:focus:border-professional-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {mode === 'register' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-5">
                        <div>
                          <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300 font-medium">
                            Confirm Password
                          </Label>
                          <div className="relative mt-2">
                            <Input
                              id="confirmPassword"
                              name="confirmPassword"
                              type={showConfirmPassword ? 'text' : 'password'}
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="pl-10 pr-12 h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-professional-purple-500 dark:focus:border-professional-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              required
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="flex items-center h-6">
                            <input
                              id="acceptTerms"
                              name="acceptTerms"
                              type="checkbox"
                              checked={formData.acceptTerms}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-professional-blue-600 focus:ring-professional-blue-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
                              required
                            />
                          </div>
                          <Label htmlFor="acceptTerms" className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            I agree to the{' '}
                            <a href="#" className="text-professional-blue-600 dark:text-professional-blue-400 hover:text-professional-blue-500 dark:hover:text-professional-blue-300 font-medium">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-professional-blue-600 dark:text-professional-blue-400 hover:text-professional-blue-500 dark:hover:text-professional-blue-300 font-medium">
                              Privacy Policy
                            </a>
                          </Label>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-professional-purple-600 to-professional-blue-600 hover:from-professional-purple-700 hover:to-professional-blue-700 text-white h-12 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                  </Button>
                </motion.div>
              </motion.form>

              {/* Footer */}
              <motion.div 
                className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <motion.button
                    onClick={() => onModeChange(mode === 'login' ? 'register' : 'login')}
                    className="text-professional-blue-600 dark:text-professional-blue-400 hover:text-professional-blue-500 dark:hover:text-professional-blue-300 font-semibold ml-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mode === 'login' ? 'Sign up' : 'Sign in'}
                  </motion.button>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
