import { Ticket, Star } from 'lucide-react';

export default function EntradasSection() {
  return (
    <section id="entradas" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-black" style={{fontFamily: 'Georgia, serif'}}>
          Comprar Entradas
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12" />
        
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 border-4 border-yellow-500 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-2 border-red-500 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-black mb-2">Entrada General</h3>
              <div className="text-4xl font-bold text-red-600 mb-4">$25.000</div>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Acceso al espectáculo</li>
                <li>✓ Zona estándar</li>
                <li>✓ Duración: 2 horas</li>
              </ul>
              <button className="w-full mt-6 bg-red-600 hover:bg-black text-white py-3 rounded-lg font-bold transition">
                Seleccionar
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-6 border-2 border-black hover:shadow-xl transition transform hover:scale-105">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-black">VIP Premium</h3>
                <Star className="w-8 h-8 text-black" fill="currentColor" />
              </div>
              <div className="text-4xl font-bold text-black mb-4">$50.000</div>
              <ul className="space-y-2 text-black font-semibold">
                <li>✓ Acceso preferencial</li>
                <li>✓ Primera fila</li>
                <li>✓ Meet & Greet con artistas</li>
                <li>✓ Recuerdo del circo</li>
              </ul>
              <button className="w-full mt-6 bg-black hover:bg-red-900 text-yellow-400 py-3 rounded-lg font-bold transition">
                Seleccionar VIP
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <Ticket className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-gray-700 mb-4">¿Grupos de más de 10 personas? ¡Tenemos descuentos especiales!</p>
            <button className="bg-black text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-red-900 transition">
              Contactar para grupos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}