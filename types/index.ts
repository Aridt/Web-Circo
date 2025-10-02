export interface Funcion {
  fecha: string;
  hora: string;
  lugar: string;
  disponible: boolean;
}

export interface LightboxProps {
  image: string | null;
  onClose: () => void;
}