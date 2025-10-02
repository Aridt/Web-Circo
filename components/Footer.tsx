import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black text-white py-12 border-t-4 border-yellow-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">El Circo</h3>
            <p className="text-gray-400">El espectáculo más íntimo y asombroso del mundo</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-yellow-400 transition">Inicio</a></li>
              <li><a href="#funciones" className="text-gray-400 hover:text-yellow-400 transition">Funciones</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-yellow-400 transition">Galería</a></li>
              <li><a href="#entradas" className="text-gray-400 hover:text-yellow-400 transition">Entradas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition transform hover:scale-110">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-yellow-400 text-xl italic font-semibold mb-2">
            &ldquo;El circo pequeño más grande del mundo… donde lo imposible sucede&rdquo;
          </p>
          <p className="text-gray-500 text-sm">© 2025 El Circo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}