import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";

const stripeSecretKey =
  process.env.STRIPE_SECRET_KEY || "sk_test_PLACEHOLDER_KEY";

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-10-29.clover",
});

interface CheckoutRequestBody {
  productId: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json();
    const { productId } = body;

    if (!productId) {
      return NextResponse.json(
        { error: "Ürün ID'si gerekli" },
        { status: 400 }
      );
    }

    // Server-side fiyat doğrulaması - client'tan gelen fiyata güvenme!
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json(
        { error: "Ürün bulunamadı" },
        { status: 404 }
      );
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";
    const unitAmount = Math.round(product.price * 100);

    const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
      price_data: {
        currency: "try",
        product_data: {
          name: product.name,
          ...(product.images[0] && { images: [`${origin}${product.images[0]}`] }),
        },
        unit_amount: unitAmount,
      },
      quantity: 1,
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [lineItem],
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      metadata: {
        productId: product.id,
        productName: product.name,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe hatası: ${error.message}` },
        { status: 500 }
      );
    }

    if (stripeSecretKey === "sk_test_PLACEHOLDER_KEY") {
      return NextResponse.json(
        {
          error: "Demo modu: Stripe API anahtarı yapılandırılmamış",
          demo: true,
          message:
            "Bu bir demo projesidir. Gerçek ödeme işlemi için STRIPE_SECRET_KEY ayarlanmalıdır.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Ödeme oturumu oluşturulamadı" },
      { status: 500 }
    );
  }
}
