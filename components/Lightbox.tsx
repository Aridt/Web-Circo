import Image from 'next/image';
import type { LightboxProps } from '@/types';

export default function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl h-[80vh]">
        <Image 
          src={image} 
          alt="Ampliada" 
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain rounded-lg shadow-2xl" 
        />
        <button 
          className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400 transition z-10"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}