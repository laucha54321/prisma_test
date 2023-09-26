import { PrismaClient, persona } from "@prisma/client";
import { Persona } from "./models/interfaces";
const prisma = new PrismaClient();


export async function createPersona(data:Persona){
  try{
    const user = await prisma.persona.create({data});
    return user
  }
  catch (error){
    return error
  }
}