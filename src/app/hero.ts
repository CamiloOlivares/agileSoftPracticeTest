export interface Hero {
    id: number;
    nombre: string;
    puedeVolar?:boolean;
    nombreReal?:string;
    avatarURL?:string;
    habilidades?:string[];
    descripcion?:string;
  }