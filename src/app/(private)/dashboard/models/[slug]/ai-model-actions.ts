"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function payCredits(credits: number) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    const { count } = await prisma.user.updateMany({
        where: { id: session.user.id, credits: { gte: credits } },
        data: { credits: { decrement: credits } }
    })

    if (count === 0) {
        throw new Error("Insufficient credits");
    }

    revalidatePath(`/dashboard/models`);

    return;
}