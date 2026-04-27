"use client";

import { useEffect } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BookingPage() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.q = cal.q || [];
            cal.t = Date.now();
            cal.loaded = true;
            let s = d.createElement("script");
            s.src = "https://embed.cal.com/embed/embed.js";
            d.head.appendChild(s);
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "Cal");

    if (window.Cal) {
      window.Cal("init", { origin: "https://cal.com" });

      window.Cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "oke-oluwaseun-89brfh/30min",
        layout: "month_view",
        config: {
          theme: "light",
        },
      });

      window.Cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#C5A059" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
            Partner For <span className="text-accent italic">Impact</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Select a convenient time for our consultation. Secure payment is required to confirm your appointment and begin our strategic journey.
          </p>
        </AnimatedSection>

        <div className="bg-white rounded-2xl shadow-2xl border border-primary/5 overflow-hidden min-h-[700px] relative">
          <div id="my-cal-inline" className="w-full h-full min-h-[700px]" />
        </div>
        
        <div className="mt-12 text-center text-sm text-foreground/50">
          <p>Secure payments processed via Stripe/PayPal. All bookings are subject to our terms of service.</p>
        </div>
      </div>
    </div>
  );
}

// Add types for Cal
declare global {
  interface Window {
    Cal: any;
  }
}
