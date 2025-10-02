import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950 to-black opacity-90" />
      
      {/* Spotlight effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-8 animate-bounce">
          <Star className="w-16 h-16 text-yellow-400 mx-auto" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider" style={{
          fontFamily: 'Georgia, serif',
          textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.3)'
        }}>
          EL CIRCO
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-8" style={{
          fontFamily: 'Georgia, serif',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}>
          PEQUEÑO MÁS GRANDE<br/>DEL MUNDO
        </h2>
        
        <p className="text-xl md:text-2xl text-yellow-400 mb-12 italic">
          Donde lo imposible sucede cada noche
        </p>
        
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-12 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-110 shadow-2xl">
          Descubre la Función
        </button>
      </div>
    </section>
  );
}