"use server";

import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export async function buyCredits(credits: number) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    const creditsIds: Record<number, string> = {
        50: process.env.STRIPE_CREDITS_50!,
        120: process.env.STRIPE_CREDITS_100!,
        250: process.env.STRIPE_CREDITS_250!,
    }

    const creditsId = creditsIds[credits];

    if (!creditsId) {
        throw new Error("Invalid price id");
    }

    const s = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        metadata: {
            userId: session.user.id,
            credits: credits,
        },
        line_items: [
            {
                price: creditsId,
                quantity: 1
            }
        ],
        success_url: `${process.env.BASE_URL}/dashboard/models`,
        cancel_url: `${process.env.BASE_URL}/dashboard/credits`
    });

    return s.id;
}