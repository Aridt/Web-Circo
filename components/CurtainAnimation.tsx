interface Props {
  isOpen: boolean;
}

export default function CurtainAnimation({ isOpen }: Props) {
  return (
    <div 
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-1000 ${
        isOpen ? 'opacity-0 delay-[3500ms]' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 flex">
        {/* Telón Izquierdo */}
        <div 
          className={`w-1/2 h-full bg-gradient-to-r from-circo-dark-red to-circo-red transform transition-transform duration-2000 ease-in-out shadow-2xl ${
            isOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #8B0000 0px, #C8102E 50px, #8B0000 100px)',
          }}
        >
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/50 to-transparent" />
        </div>
        
        {/* Telón Derecho */}
        <div 
          className={`w-1/2 h-full bg-gradient-to-l from-circo-dark-red to-circo-red transform transition-transform duration-2000 ease-in-out shadow-2xl ${
            isOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #8B0000 0px, #C8102E 50px, #8B0000 100px)',
          }}
        >
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      </div>
      
      {/* Cortinero superior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black via-gray-900 to-transparent z-10" />
    </div>
  );
}