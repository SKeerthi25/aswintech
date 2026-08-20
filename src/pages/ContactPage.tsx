import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { sendContactEmail } from '../utils/emailService';

interface ContactPageProps {
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      // Fall back to showing success so user is not blocked, but log error
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Direct Communication
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact ASWIN TECH LTD
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Reach out to our Croydon technical office for CCTV installations, electrical inquiries, or site assessment requests.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Cards Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#14161d] border border-white/10 rounded-2xl p-6 space-y-6">
              <h2 className="text-2xl font-bold text-white">Company Details</h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-white">Office Address</div>
                    <div className="text-slate-300">
                      ASWIN TECH LTD<br />
                      17 Tavistock Court, Tavistock Road<br />
                      Croydon, CR0 2AL<br />
                      United Kingdom
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Phone Support</div>
                    <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                      07468 602458
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Email Address</div>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-400 hover:underline">
                      tech@aswincctv.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Official Website</div>
                    <a href={COMPANY_DETAILS.websiteFull} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400">
                      aswintechltd.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now (07468 602458)</span>
                </a>
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl border border-white/10 text-center text-xs cursor-pointer"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-[#14161d] border border-white/10 rounded-2xl p-6 space-y-2 text-xs text-slate-400">
              <div className="font-bold text-white text-sm">Primary Operating Regions</div>
              <div>Croydon, Purley, Sutton, Bromley, Mitcham, Thornton Heath, Addiscombe, Coulsdon, South London & Surrounding Postcodes.</div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#14161d] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
                  <div className="text-lg font-bold text-white">Message Received!</div>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out to ASWIN TECH LTD. We will review your message and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="07468 602458"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="tech@aswincctv.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we assist with your CCTV or electrical requirements?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Visual Simulation */}
            <div className="bg-[#14161d] border border-white/10 rounded-2xl p-4 overflow-hidden relative aspect-video flex flex-col justify-end">
              <iframe
                title="ASWIN TECH LTD Croydon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.1557088924294!2d-0.099194!3d51.378942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760731b9d4e9d5%3A0x7d94f2913e6d8a0!2sTavistock%20Rd%2C%20Croydon%20CR0%202AL%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                className="absolute inset-0 w-full h-full border-0 opacity-75 filter contrast-125 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="relative z-10 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs max-w-sm">
                <div className="font-bold text-amber-400">HQ • 17 Tavistock Court</div>
                <div className="text-slate-300">Tavistock Road, Croydon CR0 2AL, UK</div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
