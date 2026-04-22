"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function WebinarRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expectations: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const whatsappLink = "https://chat.whatsapp.com/EvMIsewHFqmG3RJiSwZZd6";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Your registration for the Identity Crisis Webinar has been received.");
        
        // Wait a moment and then redirect to WhatsApp
        setTimeout(() => {
          window.location.href = whatsappLink;
        }, 2000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to register. Please try again.");
      }
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/5 border border-accent/20 p-8 md:p-12 text-center rounded-2xl backdrop-blur-sm">
        <CheckCircle2 className="mx-auto text-accent mb-6" size={64} />
        <h3 className="text-3xl font-serif text-white mb-4">Registration Successful!</h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">{message}</p>
        <p className="text-accent font-medium animate-pulse">Redirecting you to the WhatsApp group...</p>
        <a 
          href={whatsappLink}
          className="mt-6 inline-block text-accent border border-accent/30 px-8 py-3 hover:bg-accent hover:text-primary transition-all font-medium"
        >
          Click here if not redirected
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">Full Name *</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">Email Address *</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">Phone Number *</label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors"
              placeholder="+234..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="expectations" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">What you expect in the webinar *</label>
          <textarea
            required
            id="expectations"
            name="expectations"
            rows={4}
            value={formData.expectations}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
            placeholder="Tell us what you hope to gain..."
          />
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center text-red-400 gap-2 text-sm bg-red-400/10 p-3 rounded border border-red-400/20">
          <AlertCircle size={16} />
          {message}
        </div>
      )}

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full bg-accent text-primary py-4 font-bold uppercase tracking-widest hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Processing...
          </>
        ) : (
          "Register for Webinar"
        )}
      </button>
      
      <p className="text-white/40 text-center text-xs mt-4">
        By registering, you agree to join the official WhatsApp group for updates.
      </p>
    </form>
  );
}
