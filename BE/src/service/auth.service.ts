import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const db = new PrismaClient();

export default async function createUser(data: any) {
    const encryPass = await bcrypt.hash(data.password, 10)
    return db.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: encryPass,
            role: data.role,
            attachment: data.attachment,
        }
    })
}
export function userLogin(email: any) {
    return db.user.findFirst({
        where: { email },
    });
}