import { prisma } from "@/lib/prisma";

const getUserbyId = async (id: string) => {
    return await prisma.user.findUnique({
        where: { id: id }
    });
}

export { getUserbyId };