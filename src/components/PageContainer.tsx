"use client";

import React, { useState } from 'react';
import PageTransition from './PageTransition';
import FullScreenNavigation from './FullScreenNavigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

const PageContainer = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'work':
        return <WorkPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <FullScreenNavigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      <PageTransition currentPage={currentPage}>
        {renderCurrentPage()}
      </PageTransition>
    </div>
  );
};

export default PageContainer;
