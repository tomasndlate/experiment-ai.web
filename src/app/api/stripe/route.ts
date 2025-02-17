import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { Metadata } from "@stripe/stripe-js";
import Stripe from "stripe";

export async function POST(request: Request) {

    console.log("Webhook received");
    const body = await request.text();
    const signature = request.headers.get('Stripe-Signature') ?? "";

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body, 
            signature, 
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        return new Response(
            `Webhook Error: ${err instanceof Error ? err.message : "Unkown Error"}`, 
            { status: 400 }
        );
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const completedEvent = event.data.object as Stripe.Checkout.Session & { metadata: Metadata };
            
            const userId = completedEvent.metadata.userId;
            const credits = completedEvent.metadata.credits;

            console.log(`User ${userId} bought ${credits} credits`);

            await prisma.user.update({
                where: { id: userId },
                data: {
                    credits: { increment: parseInt(credits) }
                }
            });

            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    return new Response(null, { status: 200 });
}