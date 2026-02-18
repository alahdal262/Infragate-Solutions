import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ChatWidget } from './components/ChatWidget';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Map slugs to PageViews
  const getPageFromHash = (hash: string): PageView => {
    const cleanHash = hash.replace('#', '').toLowerCase();
    switch (cleanHash) {
      case 'services': return PageView.SERVICES;
      case 'about-us': return PageView.ABOUT; // Changed slug to about-us for SEO friendliness
      case 'contact-us': return PageView.CONTACT; // Changed slug to contact-us
      default: return PageView.HOME;
    }
  };

  // Map PageViews to slugs
  const getSlugFromPage = (page: PageView): string => {
    switch (page) {
      case PageView.SERVICES: return 'services';
      case PageView.ABOUT: return 'about-us';
      case PageView.CONTACT: return 'contact-us';
      case PageView.HOME: return '';
      default: return '';
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash(window.location.hash);
      setCurrentPage(page);
    };

    // Set initial page based on current hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageView) => {
    const slug = getSlugFromPage(page);
    window.location.hash = slug;
    window.scrollTo(0, 0);
    // State update happens via the hashchange listener to ensure sync
  };

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout currentPage={currentPage} onNavigate={navigate}>
          {currentPage === PageView.HOME && <HomePage onNavigate={navigate} />}
          {currentPage === PageView.SERVICES && <ServicesPage onNavigate={navigate} />}
          {currentPage === PageView.ABOUT && <AboutPage />}
          {currentPage === PageView.CONTACT && <ContactPage />}
          <ChatWidget />
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;