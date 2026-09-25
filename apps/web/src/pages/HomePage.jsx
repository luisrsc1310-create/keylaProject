import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>KA. — Keyla Ayumi · Tradução, Adaptação e Revisão linguística</title>
        <meta
          name="description"
          content="Portfólio de Keyla Ayumi — tradução, adaptação e revisão linguística entre português, inglês e japonês. Certificações JLPT N1 e EIKEN Pre-1."
        />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
