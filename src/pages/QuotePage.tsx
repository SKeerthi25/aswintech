import React, { useState } from 'react';
import { Shield, CheckCircle2, Send, Upload, Phone, Mail, MapPin, Calendar, Clock, User, Building, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { sendContactEmail } from '../utils/emailService';

export const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceRequired: 'CCTV Installation',
    preferredDate: '',
    preferredTime: 'Morning (8am - 12pm)',
    description: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        serviceRequired: formData.serviceRequired,
        propertyType: formData.propertyType,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        companyName: formData.companyName,
        fileName: formData.fileName,
        message: formData.description
      });
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS QuotePage error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      <section className="bg-[#12141a] border-b border-white/10 py-16 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Free & Transparent Estimation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Request a Free Quotation
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Fill in your project details below. Our technical team at ASWIN TECH LTD will review your requirements and respond within 2-4 hours.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-extrabold text-white">Quote Request Successfully Submitted!</h2>
              <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
                Thank you <span className="text-amber-400 font-bold">{formData.fullName}</span>. We have received your request for <span className="text-white font-semibold">{formData.serviceRequired}</span> and will contact you via phone (<span className="text-amber-400">{formData.phone}</span>) or email (<span className="text-amber-400">{formData.email}</span>) shortly.
              </p>
              <div className="bg-[#181a22] p-5 rounded-2xl border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="font-bold text-white uppercase tracking-wider text-xs">ASWIN TECH LTD Direct Contact</div>
                <div>Phone: <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-amber-400 font-bold">{COMPANY_DETAILS.phone}</a></div>
                <div>Email: <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-400">{COMPANY_DETAILS.email}</a></div>
                <div>Address: {COMPANY_DETAILS.address}</div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-amber-500" /> Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-slate-400" /> Company Name <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smith Retail Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-amber-500" /> Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07468 602458"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-amber-500" /> Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. tech@aswincctv.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Residential">Residential House / Flat</option>
                    <option value="Retail">Retail Shop / Store</option>
                    <option value="Office">Corporate Office</option>
                    <option value="Warehouse">Warehouse / Industrial Site</option>
                    <option value="Restaurant">Restaurant / Cafe</option>
                    <option value="Commercial">Commercial Building</option>
                    <option value="Other">Other Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Service Required <span className="text-amber-500">*</span>
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-amber-400 font-bold focus:outline-none focus:border-amber-500"
                  >
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="CCTV Maintenance">CCTV Maintenance</option>
                    <option value="CCTV Repair">CCTV Troubleshooting & Repair</option>
                    <option value="CCTV Upgrades">CCTV System Upgrades</option>
                    <option value="Electrical Installation">Electrical Installation</option>
                    <option value="Lighting">Lighting Installation</option>
                    <option value="Power Sockets">Power Socket Installation</option>
                    <option value="Electrical Repair">Electrical Repair</option>
                    <option value="Electrical Maintenance">Electrical Maintenance & EICR</option>
                    <option value="Other">Other Work</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-slate-400" /> Project Description / Special Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about camera count, socket requirements, property size, or electrical faults..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#181a22] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-slate-400" /> Upload Image / Document
                </label>
                <div className="relative border border-dashed border-white/20 rounded-xl p-4 bg-[#181a22]/50 hover:bg-[#181a22] transition-colors text-center cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                    <Upload className="w-4 h-4 text-amber-500" />
                    <span>{formData.fileName ? `File: ${formData.fileName}` : 'Upload site photo or architectural floor plan'}</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] text-white font-extrabold py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Request...' : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
