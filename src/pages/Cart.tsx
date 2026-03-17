import { Link } from "react-router-dom";
import { Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { motion } from "motion/react";

const CART_ITEMS = [
  {
    id: 1,
    name: "Yoğun Terapi Ayak Bakım Maskesi",
    price: 85.0,
    quantity: 2,
    image: "https://picsum.photos/seed/ayakmaskesi/200/200",
  },
  {
    id: 2,
    name: "Siyah Nokta Temizleyici Burun Bandı",
    price: 45.0,
    quantity: 1,
    image: "https://picsum.photos/seed/burunbandi/200/200",
  },
];

export function Cart() {
  const subtotal = CART_ITEMS.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 200 ? 0 : 25.0;
  const total = subtotal + shipping;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-sand min-h-screen py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl mb-8">
            Your Cart
          </h1>

          {CART_ITEMS.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-border/50">
                  <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-brand-border text-sm font-medium text-brand-ink/60 uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-3 text-right">Total</div>
                  </div>

                  <div className="flex flex-col gap-6 pt-6">
                    {CART_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pb-6 border-b border-brand-border last:border-0 last:pb-0"
                      >
                        <div className="sm:col-span-6 flex items-center gap-4">
                          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-brand-sand">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <Link
                              to={`/product/${item.id}`}
                              className="font-serif text-lg font-medium hover:text-brand-green transition-colors line-clamp-2"
                            >
                              {item.name}
                            </Link>
                            <span className="text-brand-ink/60 text-sm">
                              ₺{item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="sm:col-span-3 flex items-center justify-between sm:justify-center">
                          <div className="flex items-center border border-brand-border rounded-md h-10 w-24">
                            <button className="px-3 text-brand-ink/60 hover:text-brand-ink transition-colors">
                              -
                            </button>
                            <span className="flex-1 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button className="px-3 text-brand-ink/60 hover:text-brand-ink transition-colors">
                              +
                            </button>
                          </div>
                          <button className="sm:hidden text-brand-ink/40 hover:text-red-500 transition-colors">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="sm:col-span-3 flex items-center justify-between sm:justify-end">
                          <span className="font-medium text-lg">
                            ₺{(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button className="hidden sm:block ml-4 text-brand-ink/40 hover:text-red-500 transition-colors">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-border/50 sticky top-24">
                  <h2 className="font-serif text-xl font-medium mb-6">
                    Order Summary
                  </h2>

                  <div className="flex flex-col gap-4 text-sm mb-6 pb-6 border-b border-brand-border">
                    <div className="flex justify-between">
                      <span className="text-brand-ink/70">Subtotal</span>
                      <span className="font-medium">
                        ₺{subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-ink/70">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "Free" : `₺${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-brand-green mt-1">
                        Add ₺{(200 - subtotal).toFixed(2)} more to get free
                        shipping!
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center mb-8">
                    <span className="font-serif text-xl font-medium">
                      Total
                    </span>
                    <span className="font-serif text-2xl font-medium">
                      ₺{total.toFixed(2)}
                    </span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full mb-4 group bg-brand-ink hover:bg-brand-ink/90 text-white"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-brand-ink/60 mt-6">
                    <ShieldCheck className="h-4 w-4 text-brand-green" />
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-brand-border/50 flex flex-col items-center justify-center min-h-[400px]">
              <div className="h-24 w-24 rounded-full bg-brand-sand flex items-center justify-center mb-6">
                <svg
                  className="h-10 w-10 text-brand-ink/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-medium mb-2">
                Your cart is empty
              </h2>
              <p className="text-brand-ink/60 mb-8 max-w-md">
                Looks like you haven't added any products to your cart yet.
                Discover our premium skincare rituals.
              </p>
              <Link to="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
