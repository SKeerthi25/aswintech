import React from 'react';
import { COMPANY_DETAILS } from '../data/company';

export const PrivacyPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-slate-300 text-sm leading-relaxed">
    <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
    <p>Last updated: August 2026. ASWIN TECH LTD ("we", "our", or "us") respects your privacy and is committed to protecting your personal data in accordance with the UK GDPR and Data Protection Act 2018.</p>
    
    <h2 className="text-xl font-bold text-white pt-2">1. Information We Collect</h2>
    <p>When you fill out a quote form or contact us, we collect details such as your full name, phone number, email address, property type, and service requirements.</p>

    <h2 className="text-xl font-bold text-white pt-2">2. How We Use Your Data</h2>
    <p>Your personal data is used solely to respond to inquiries, arrange site visits, deliver CCTV/electrical installation services, and issue safety certificates.</p>

    <h2 className="text-xl font-bold text-white pt-2">3. CCTV Recording & Data Protection</h2>
    <p>For commercial CCTV installations, we configure systems to adhere strictly to Information Commissioner's Office (ICO) guidelines, including privacy masking and secure encrypted local storage.</p>

    <h2 className="text-xl font-bold text-white pt-2">4. Contacting Us</h2>
    <p>Address: 17 Tavistock Court, Tavistock Road, Croydon CR0 2AL, UK. Phone: 07468 602458. Email: tech@aswincctv.com.</p>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-slate-300 text-sm leading-relaxed">
    <h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
    <p>Welcome to ASWIN TECH LTD. By accessing our website (aswintechltd.co.uk) or engaging our services, you agree to these Terms.</p>
    
    <h2 className="text-xl font-bold text-white pt-2">1. Quotations & Service Contracts</h2>
    <p>All quotations provided by ASWIN TECH LTD remain valid for 30 days. Work commences upon mutual agreement of itemized specifications and pricing.</p>

    <h2 className="text-xl font-bold text-white pt-2">2. Electrical Safety Compliance</h2>
    <p>All electrical works are performed in compliance with UK Wiring Regulations (BS 7671). Certified Minor Works or EIC certificates are issued upon job completion.</p>

    <h2 className="text-xl font-bold text-white pt-2">3. CCTV Hardware Guarantee</h2>
    <p>Installed CCTV cameras, NVRs, and power supplies carry manufacturer hardware warranties alongside our installation workmanship guarantee.</p>
  </div>
);

export const CookiesPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-slate-300 text-sm leading-relaxed">
    <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
    <p>ASWIN TECH LTD uses minimal essential cookies to optimize website performance and user experience. We do not use intrusive tracking cookies.</p>
  </div>
);
