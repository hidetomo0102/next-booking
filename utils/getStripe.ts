import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const apiKey: string = `${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`;

export const getStripe = async (): Promise<Stripe | null> => {
  if (!stripePromise) {
    stripePromise = await loadStripe(apiKey);
  }
  return stripePromise;
};
