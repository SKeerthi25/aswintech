import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingMobileCTA } from './components/FloatingMobileCTA';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CctvServicesPage } from './pages/CctvServicesPage';
import { CctvSolutionsPage } from './pages/CctvSolutionsPage';
import { ElectricalServicesPage } from './pages/ElectricalServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { OurProcessPage } from './pages/OurProcessPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPage, TermsPage, CookiesPage } from './pages/LegalPages';

export function AppContent() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleOpenQuoteModal = (serviceName: string = '') => {
    setSelectedServiceForQuote(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c0f] text-slate-200">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/services" element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/cctv-services" element={<CctvServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/cctv-solutions" element={<CctvSolutionsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/electrical-services" element={<ElectricalServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/projects" element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/industries" element={<IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/why-us" element={<WhyUsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/our-process" element={<OurProcessPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/contact" element={<ContactPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/faqs" element={<FaqPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/service-area" element={<ServiceAreaPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Action Bar for Mobile */}
      <FloatingMobileCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
