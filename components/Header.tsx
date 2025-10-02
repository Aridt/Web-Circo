export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-red-900 to-red-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <span className="text-circo-gold">★</span> EL CIRCO <span className="text-circo-gold">★</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-white font-semibold">
            <a href="#inicio" className="hover:text-circo-gold transition">Inicio</a>
            <a href="#funciones" className="hover:text-circo-gold transition">Funciones</a>
            <a href="#galeria" className="hover:text-circo-gold transition">Galería</a>
            <a href="#entradas" className="hover:text-circo-gold transition">Entradas</a>
            <a href="#contacto" className="hover:text-circo-gold transition">Contacto</a>
          </nav>
          
          <button className="bg-circo-gold hover:bg-black text-black hover:text-circo-gold px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            Comprar Entradas
          </button>
        </div>
      </div>
    </header>
  );
}