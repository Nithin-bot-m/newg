"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LOCATIONS = [
  {
    city: "Hyderabad Headquarters",
    address:
      "Manjeera Majestic Commercial, Unit 206, JNTU Road, Hyderabad, Telangana",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please enter your first name and phone number.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. A dedicated counsellor will contact you within 4 hours.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a]">
            Start with a free counselling call
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tell us where you want to land. We reply within 4 hours with a personalised counselling slot, recommended tests, and a rough budget map.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 ring-1 ring-gray-100">
                <div className="h-10 w-10 rounded-lg bg-[#FC6C18]/20 text-[#0a0a0a] flex items-center justify-center mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Phone
                </h3>
                <p className="mt-1 text-[#0a0a0a] font-medium">
                  <a href="tel:+919549543898" className="hover:underline">
                    +91 95495 43898
                  </a>
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 ring-1 ring-gray-100">
                <div className="h-10 w-10 rounded-lg bg-[#FC6C18]/20 text-[#0a0a0a] flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Email
                </h3>
                <p className="mt-1 text-[#0a0a0a] font-medium">
                  <a href="mailto:greenroots.tech@outlook.com" className="hover:underline">
                    greenroots.tech@outlook.com
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 ring-1 ring-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-[#0a0a0a]" />
                <h3 className="text-lg font-bold text-[#0a0a0a]">Our Locations</h3>
              </div>
              <div className="space-y-4">
                {LOCATIONS.map((loc, i) => (
                  <div key={`loc-${i}`}>
                    <h4 className="text-sm font-semibold text-[#0a0a0a]">
                      {loc.city}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FC6C18] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FC6C18] text-gray-900"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FC6C18] text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FC6C18] text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or goals here"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FC6C18] resize-none text-gray-900"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#FC6C18] text-white font-bold rounded-lg hover:bg-[#e55a0a] shadow-lg shadow-[#FC6C18]/25 transition-colors disabled:opacity-70 cursor-pointer"
              >
                {submitting ? "Sending..." : "Get Free Counselling →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
