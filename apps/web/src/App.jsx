import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './i18n/LanguageContext';
import HomePage from './pages/HomePage';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;
