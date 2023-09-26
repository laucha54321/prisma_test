import {hash} from "bcrypt";

export async function hashPassword(pass:string):Promise<string> {

    const hashPass = await hash(pass, 11);

    return hashPass;
} 

