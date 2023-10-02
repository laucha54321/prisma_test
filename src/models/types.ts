export type CursoPersona = {
  ID_Persona: string;
  ID_Curso: string;
  categoria: string;
};
export type Persona = {
  nombre: string;
  apellido: string;
  hash_contrasena: string;
  email: string;
  fecha_nacimiento: Date;
};
export type Curso = {
  descripcion: string;
  nombre: string;
};
export type Nota = {
  descripcion: string;
  nota: number;
  ID_Persona: string;
  ID_Curso: string;
};
