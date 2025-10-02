import type { LightboxProps } from '@/types';

export default function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <img src={image} alt="Ampliada" className="max-w-full max-h-screen rounded-lg shadow-2xl" />
        <button 
          className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400 transition"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}