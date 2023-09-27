import { PrismaClient } from "@prisma/client";
import { Persona, Curso, Nota } from "./models/interfaces";
const prisma = new PrismaClient();

//#region Persona
export async function createPersona(data: Persona) {
  try {
    const user = await prisma.persona.create({ data });
    return user;
  } catch (error) {
    return error;
  }
}

export async function getPersonas() {
  try {
    const users = await prisma.persona.findMany();
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

export async function getNotas() {
  try {
    const nota = await prisma.nota.findMany();
    return nota;
  } catch (error) {
    return error;
  }
}

export async function getNota(params: string) {
  try {
    const nota = await prisma.nota.findUnique({
      where: {
        ID: params,
      },
    });
    return nota;
  } catch (error) {
    return error;
  }
}

export async function putNota(params: any) {
  try {
    delete params.data.ID;
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
export async function inscribirCurso(id: string) {
  try {
    const aux = await prisma.persona.update({
      where: { ID: id },
      data: {
        curso: { set: [{ ID: "97f3709d-df59-4997-8960-e385676c346b" }] },
      },
    });
    return aux;
  } catch (error) {
    return error;
  }
}
//#endregion

//#region Auth
export async function getPasswordHash(id: string) {
  try {
    const persona = await prisma.persona.findUnique({ where: { ID: id } });
    return persona?.hash_contrasena;
  } catch (error) {
    return "000";
  }
}
//#endregion
