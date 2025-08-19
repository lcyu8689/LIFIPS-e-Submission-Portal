import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Submissions from './pages/Submissions';

function App() {
  return (
    <>
      <Helmet>
        <title>GovForms - Official Government & Fire Service Forms</title>
        <meta
          name="description"
          content="The official portal to access and submit government and fire service forms. Find applications, reports, and permits in one centralized location."
        />
        <meta
          property="og:title"
          content="GovForms - Official Government & Fire Service Forms"
        />
        <meta
          property="og:description"
          content="The official portal to access and submit government and fire service forms. Find applications, reports, and permits in one centralized location."
        />
      </Helmet>

      <div className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submissions" element={<Submissions />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
