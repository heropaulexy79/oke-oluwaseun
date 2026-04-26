"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    referral: "",
    expectations: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        const data = await response.json();
        setStatus("success");
        setMessage(`Thank you! Your registration for Maximize Conference 2026 has been received.`);
        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          referral: "",
          expectations: "",
        });
        
        // Redirect to WhatsApp
        setTimeout(() => {
          window.location.href = "https://chat.whatsapp.com/EvMIsewHFqmG3RJiSwZZd6";
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || "Failed to register. Please try again.");
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
        <p className="text-accent font-medium animate-pulse mb-8">Redirecting you to the WhatsApp group...</p>
        <div className="flex flex-col gap-4 items-center">
          <a 
            href="https://chat.whatsapp.com/EvMIsewHFqmG3RJiSwZZd6"
            className="text-accent border border-accent/30 px-8 py-3 hover:bg-accent hover:text-primary transition-all font-medium"
          >
            Join WhatsApp Now
          </a>
          <button
            onClick={() => setStatus("idle")}
            className="text-white/40 text-sm hover:text-white transition-colors"
          >
            Register Another Person
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label htmlFor="location" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">Current Location *</label>
          <input
            required
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors"
            placeholder="City, Country"
          />
        </div>
      </div>

      <div>
        <label htmlFor="referral" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">How did you hear about the conference?</label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors appearance-none"
        >
          <option value="" className="bg-primary text-white">Select an option</option>
          <option value="Social Media" className="bg-primary text-white">Social Media</option>
          <option value="Word of Mouth" className="bg-primary text-white">Word of Mouth</option>
          <option value="Email Newsletter" className="bg-primary text-white">Email Newsletter</option>
          <option value="Church/Organization" className="bg-primary text-white">Church/Organization</option>
          <option value="Other" className="bg-primary text-white">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="expectations" className="block text-xs uppercase tracking-widest text-accent font-bold mb-2">What are your expectations?</label>
        <textarea
          id="expectations"
          name="expectations"
          rows={4}
          value={formData.expectations}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-accent outline-none transition-colors resize-none"
          placeholder="Tell us what you hope to gain..."
        />
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
          "Register for Free"
        )}
      </button>
    </form>
  );
}
