'use client';

import { useState, useEffect } from 'react';
import CurtainAnimation from '@/components/CurtainAnimation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FuncionesSection from '@/components/FuncionesSection';
import GaleriaSection from '@/components/GaleriaSection';
import EntradasSection from '@/components/EntradasSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Asegurar que el componente está montado
    setMounted(true);
    
    // Iniciar la animación de cortinas
    const timer1 = setTimeout(() => setCurtainsOpen(true), 500);
    const timer2 = setTimeout(() => setShowContent(true), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Prevenir flash de contenido sin estilo
  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-yellow-400 text-2xl">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black">
      <CurtainAnimation isOpen={curtainsOpen} showContent={showContent} />
      
      <div 
        className={`transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: showContent ? '500ms' : '0ms' }}
      >
        <Header />
        <HeroSection />
        <AboutSection />
        <FuncionesSection />
        <GaleriaSection />
        <EntradasSection />
        <Footer />
      </div>
    </div>
  );
}