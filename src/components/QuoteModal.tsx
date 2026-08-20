import React, { useState } from 'react';
import { X, CheckCircle2, Send, Upload, Shield, Calendar, Clock, Phone, Mail, User, Building, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { sendContactEmail } from '../utils/emailService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceRequired: preselectedService || 'CCTV Installation',
    preferredDate: '',
    preferredTime: 'Morning (8am - 12pm)',
    description: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
      console.error('EmailJS QuoteModal error:', err);
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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141a] border border-white/10 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-8 relative">
        
        {/* Header */}
        <div className="bg-[#181a22] border-b border-white/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Request a Free Quotation</h3>
              <p className="text-xs text-slate-400">ASWIN TECH LTD • No Obligation Response Within 2-4 Hours</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 px-4 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white">Quote Request Received!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you <span className="text-amber-400 font-semibold">{formData.fullName}</span>. Our technical team at ASWIN TECH LTD will review your requirements for <span className="text-white font-medium">{formData.serviceRequired}</span> and contact you at <span className="text-amber-400 font-semibold">{formData.phone || formData.email}</span> shortly.
              </p>
              <div className="bg-[#181a22] p-4 rounded-xl border border-white/10 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1.5">
                <div className="font-bold text-white text-xs uppercase tracking-wider mb-1">Direct Contact Details</div>
                <div>Phone: <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-amber-400 font-semibold">{COMPANY_DETAILS.phone}</a></div>
                <div>Email: <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-400">{COMPANY_DETAILS.email}</a></div>
                <div>Address: {COMPANY_DETAILS.address}</div>
              </div>
              <button
                onClick={handleReset}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-500" /> Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" /> Company Name <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smith Enterprises Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-500" /> Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07468 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-500" /> Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Property Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 transition-all"
                  >
                    <option value="Residential">Residential House / Flat</option>
                    <option value="Retail">Retail Shop / Store</option>
                    <option value="Office">Corporate Office</option>
                    <option value="Warehouse">Warehouse / Industrial Site</option>
                    <option value="Restaurant">Restaurant / Hospitality</option>
                    <option value="Commercial">Commercial Building</option>
                    <option value="Other">Other Property</option>
                  </select>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Required <span className="text-amber-500">*</span>
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 transition-all font-semibold text-amber-400"
                  >
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="CCTV Maintenance">CCTV Maintenance</option>
                    <option value="CCTV Repair">CCTV Repair / Troubleshooting</option>
                    <option value="CCTV Upgrades">CCTV System Upgrades</option>
                    <option value="Electrical Installation">Electrical Installation</option>
                    <option value="Lighting">Lighting Installation & Upgrades</option>
                    <option value="Power Sockets">Power Socket Installation</option>
                    <option value="Electrical Repair">Electrical Repair & Fault Finding</option>
                    <option value="Electrical Maintenance">Electrical Maintenance & Safety</option>
                    <option value="Other">Other Custom Work</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> Project Description / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your property details, camera requirements, socket quantities, or electrical issues..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#181a22] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>

              {/* Document / Image Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-slate-400" /> Upload Layout / Photo <span className="text-slate-500">(Optional)</span>
                </label>
                <div className="relative border border-dashed border-white/20 rounded-xl p-3 bg-[#181a22]/50 hover:bg-[#181a22] transition-colors text-center cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                    <Upload className="w-4 h-4 text-amber-500" />
                    <span>{formData.fileName ? `Selected: ${formData.fileName}` : 'Click to upload property plan or site image'}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d97706] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-500 pt-1">
                🔒 Your details are 100% confidential under UK Data Protection regulations. Zero spam guaranteed.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
