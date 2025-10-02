import { Calendar, MapPin } from 'lucide-react';
import type { Funcion } from '@/types';

export default function FuncionesSection() {
  const funciones: Funcion[] = [
    { fecha: '15 Octubre 2025', hora: '19:00', lugar: 'Teatro Principal', disponible: true },
    { fecha: '22 Octubre 2025', hora: '20:00', lugar: 'Plaza Central', disponible: true },
    { fecha: '29 Octubre 2025', hora: '18:30', lugar: 'Auditorio Municipal', disponible: false },
  ];

  return (
    <section id="funciones" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-white" style={{fontFamily: 'Georgia, serif'}}>
          Próximas Funciones
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {funciones.map((funcion, i) => (
            <div key={i} className="bg-gradient-to-br from-red-900 to-red-950 rounded-lg overflow-hidden border-2 border-yellow-500 hover:border-yellow-400 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50">
              <div className="p-6">
                <div className="flex items-center text-yellow-400 mb-4">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span className="font-bold text-lg">{funcion.fecha}</span>
                </div>
                
                <div className="flex items-center text-white mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{funcion.lugar}</span>
                </div>
                
                <div className="text-yellow-400 text-2xl font-bold mb-6">
                  {funcion.hora}
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    funcion.disponible 
                      ? 'bg-yellow-500 hover:bg-black text-black hover:text-yellow-400 border-2 border-yellow-500' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!funcion.disponible}
                >
                  {funcion.disponible ? 'Comprar Ahora' : 'Agotado'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}