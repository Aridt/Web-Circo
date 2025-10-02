export default function AboutSection() {
  const acts = [
    { title: 'Acróbatas', icon: '🎪', desc: 'Desafían la gravedad' },
    { title: 'Malabaristas', icon: '🎯', desc: 'Precisión perfecta' },
    { title: 'Magia', icon: '✨', desc: 'Ilusiones imposibles' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-black" style={{fontFamily: 'Georgia, serif'}}>
          Nuestro Espectáculo
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12" />
        
        <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
          El espectáculo más íntimo y asombroso del mundo. Una experiencia única donde acróbatas, 
          malabaristas y artistas te transportarán a un universo de magia, pasión y emoción.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {acts.map((item, i) => (
            <div key={i} className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl group-hover:shadow-2xl transition-shadow">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}