export interface Persona {
  nombre: string;
  apellido: string;
  hash_contrasena: string;
  email: string;
  fecha_nacimiento: Date;
}

export interface Curso {
  descripcion: string;
  nombre: string;
}

export interface Nota {
  descripcion: string;
  nota: number;
  ID_Persona: string;
  ID_Curso: string;
}
