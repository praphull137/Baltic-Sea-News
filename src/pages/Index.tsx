import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import PoliticalPartiesSection from '../components/PoliticalPartiesSection';
import MissionSection from '../components/MissionSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import AccessibilitySection from '../components/AccessibilitySection';
import CulturalSection from '../components/CulturalSection';
import CommunityConnectionSection from '../components/CommunityConnectionSection';
import CommunitySection from '../components/CommunitySection';
import DashboardSection from '../components/DashboardSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import StudentIdeasSection from '../components/StudentIdeasSection';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';
import DemoModal from '../components/DemoModal'; // ← NEW
import AiModal from '../components/AiModal'; // ← NEW
import NewsChatbot from '../components/NewsChatbot';
import VerifyModal from '../components/VerifyModal';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); // ← NEW
  const [isAiModalOpen, setIsAiModalOpen] = useState(false); // ← NEW
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [verifyState, setVerifyState] = useState<{
    isOpen: boolean;
    mode: 'claim' | 'url' | 'image' | 'video';
    value: string;
  }>({ isOpen: false, mode: 'claim', value: '' });

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

   const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const openAiModal = () => {
    setIsAiModalOpen(true);
  };

  const openVerifyModal = (mode: 'claim' | 'url' | 'image' | 'video', value?: string) => {
    setVerifyState({ isOpen: true, mode, value: value ?? '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation onAuthClick={openAuthModal} onDemoClick={openDemoModal} onAiClick={openAiModal}/>

      <main>
        <HeroSection
          onDemoClick={openDemoModal}
          onAiClick={openAiModal}
          onVerify={openVerifyModal}
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
        />
        <NewsSection
          selectedCountry={selectedCountry}
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
          onClearFilter={() => {
            setSelectedCountry(null);
            setSelectedTopic(null);
          }}
        />
        <PoliticalPartiesSection selectedCountry={selectedCountry} selectedTopic={selectedTopic} />
        <MissionSection />
        <ServicesSection />
        <DashboardSection />
        <CommunitySection selectedCountry={selectedCountry} selectedTopic={selectedTopic} />
        {/* <StudentIdeasSection/> */}
      </main>

      <NewsChatbot selectedCountry={selectedCountry} selectedTopic={selectedTopic} />

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <AiModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

      <VerifyModal
        isOpen={verifyState.isOpen}
        onClose={() => setVerifyState((prev) => ({ ...prev, isOpen: false }))}
        initialMode={verifyState.mode}
        initialValue={verifyState.value}
      />
    </div>
  );
};

export default Index;