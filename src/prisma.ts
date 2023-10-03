import { PrismaClient, cursoPersona } from "@prisma/client";
import { Persona, Curso, Nota, CursoPersona } from "./models/types";
const prisma = new PrismaClient();

//#region Persona
export async function createPersona(data: Persona) {
  try {
    const user = await prisma.persona.create({
      data,
      select: {
        nombre: true,
        apellido: true,
        email: true,
        fecha_nacimiento: true,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}

export async function getPersonas() {
  try {
    const users = await prisma.persona.findMany({
      select: {
        ID: true,
        nombre: true,
        apellido: true,
        email: true,
        fecha_nacimiento: true,
      },
    });
    return users;
  } catch (error) {
    return error;
  }
}

export async function getPersona(params: string) {
  try {
    const user = await prisma.persona.findUnique({
      where: {
        ID: params,
      },
      select: {
        ID: true,
        nombre: true,
        apellido: true,
        email: true,
        fecha_nacimiento: true,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}

export async function putPersona(params: any) {
  try {
    delete params.data.ID;
    const user = await prisma.persona.update({
      where: {
        ID: params.ID,
      },
      data: params.data,
      select: {
        nombre: true,
        apellido: true,
        email: true,
        fecha_nacimiento: true,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
}
//#endregion

//#region Curso
export async function createCurso(data: Curso) {
  try {
    const curso = await prisma.curso.create({ data });
    return curso;
  } catch (error) {
    return error;
  }
}

export async function getCursos() {
  try {
    const curso = await prisma.curso.findMany();
    return curso;
  } catch (error) {
    return error;
  }
}

export async function getCurso(params: string) {
  try {
    const curso = await prisma.curso.findUnique({
      where: {
        ID: params,
      },
    });
    return curso;
  } catch (error) {
    return error;
  }
}

export async function putCurso(params: any) {
  try {
    delete params.data.ID;
    const user = await prisma.curso.update({
      where: {
        ID: params.ID,
      },
      data: params.data,
    });

    return user;
  } catch (error) {
    return error;
  }
}
//#endregion

//#region Notas

export async function createNota(data: Nota) {
  try {
    const nota = await prisma.nota.create({ data });
    return nota;
  } catch (error) {
    return error;
  }
}

export async function getNotas(id: string) {
  try {
    const nota = await prisma.nota.findMany({
      where: { ID_Persona: id },
      select: {
        nota: true,
        descripcion: true,
        curso: true,
        ID_Persona: true,
        ID: true,
      },
    });
    return nota;
  } catch (error) {
    return error;
  }
}

export async function getNotasProfe(idCurso: string) {
  try {
    const nota = await prisma.nota.findMany({
      where: { ID_Curso: idCurso },
      select: {
        ID: true,
        nota: true,
        descripcion: true,
        curso: {
          select: {
            nombre: true,
            ID: true,
          },
        },
        persona: {
          select: {
            nombre: true,
            apellido: true,
            email: true,
            ID: true,
          },
        },
      },
    });
    return nota;
  } catch (error) {
    return error;
  }
}

export async function getNota(params: string) {
  try {
    const notas = await prisma.nota.findFirst({
      where: {
        ID: params,
      },
      select: {
        nota: true,
        descripcion: true,
        curso: true,
        ID_Persona: true,
        ID: true,
      },
    });
    return notas;
  } catch (error) {
    return error;
  }
}

export async function putNota(params: any) {
  try {
    const nota = await prisma.nota.update({
      where: {
        ID: params.ID,
      },
      data: params.data,
    });

    return nota;
  } catch (error) {
    return error;
  }
}

//#endregion

//#region Persona_Curso
export async function inscribirCurso(data: CursoPersona) {
  try {
    const aux = await prisma.cursoPersona.create({ data });
    return aux;
  } catch (error) {
    return error;
  }
}
//#endregion

//#region Auth
export async function getPasswordHash(email: string) {
  try {
    const hash = await prisma.persona.findUnique({
      where: { email: email },
      select: { hash_contrasena: true },
    });
    return hash?.hash_contrasena;
  } catch (error) {
    return "000";
  }
}
export async function getID(email: string): Promise<string | undefined> {
  try {
    const ID = await prisma.persona.findUnique({
      where: { email: email },
      select: { ID: true },
    });
    return ID?.ID;
  } catch (error) {
    return "000";
  }
}
//#endregion

//#region Auth_Profesor
export async function esProfesor(
  idCurso: string,
  idProfesor: string
): Promise<boolean> {
  if (
    await prisma.cursoPersona.findUnique({
      where: {
        ID_Persona_ID_Curso: { ID_Persona: idProfesor, ID_Curso: idCurso },
      },
    })
  ) {
    return true;
  } else {
    return false;
  }
}

//#endregion
