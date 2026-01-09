import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

// Pages
import Home from './pages/Home';
import AuraStory from './pages/AuraStory';
import Shop from './pages/Shop';
import Dashboard from './pages/Dashboard';
import Algorithm from './pages/Algorithm';
import ProductDetail from './pages/ProductDetail';
import Campaigns from './pages/Campaigns';
import Concierge from './pages/Concierge';
import Diagnosis from './pages/Diagnosis';

/**
 * App Layout - Wraps all routes with Header and Footer
 */
function AppLayout({ children, onLoginClick, isLoggedIn, onLogout, user }) {
    return (
        <div className="relative min-h-screen">
            <Header
                onLoginClick={onLoginClick}
                isLoggedIn={isLoggedIn}
                onLogout={onLogout}
                user={user}
            />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

/**
 * Main App Content
 */
function AppContent() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('aura_token');
        const savedUser = localStorage.getItem('aura_user');
        if (token && savedUser) {
            setIsLoggedIn(true);
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLoginSuccess = (userData, token) => {
        localStorage.setItem('aura_token', token);
        localStorage.setItem('aura_user', JSON.stringify(userData));
        setIsLoggedIn(true);
        setUser(userData);
        setIsAuthModalOpen(false);
        navigate('/dashboard');
    };

    const handleLogout = () => {
        localStorage.removeItem('aura_token');
        localStorage.removeItem('aura_user');
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
    };

    const layoutProps = {
        onLoginClick: () => setIsAuthModalOpen(true),
        isLoggedIn,
        onLogout: handleLogout,
        user
    };

    return (
        <>
            <Routes>
                {/* Home */}
                <Route path="/" element={<AppLayout {...layoutProps}><Home /></AppLayout>} />

                {/* Brand Story */}
                <Route path="/aura" element={<AppLayout {...layoutProps}><AuraStory /></AppLayout>} />

                {/* Algorithm Lab */}
                <Route path="/algorithm" element={<AppLayout {...layoutProps}><Algorithm /></AppLayout>} />

                {/* Diagnosis */}
                <Route path="/diagnosis" element={<AppLayout {...layoutProps}><Diagnosis /></AppLayout>} />

                {/* Shop / Curations */}
                <Route path="/shop" element={<AppLayout {...layoutProps}><Shop /></AppLayout>} />

                {/* Product Detail */}
                <Route path="/shop/:id" element={<AppLayout {...layoutProps}><ProductDetail user={user} /></AppLayout>} />

                {/* Campaigns */}
                <Route path="/campaigns" element={<AppLayout {...layoutProps}><Campaigns /></AppLayout>} />

                {/* Concierge */}
                <Route path="/concierge" element={<AppLayout {...layoutProps}><Concierge user={user} /></AppLayout>} />

                {/* Dashboard */}
                <Route path="/dashboard" element={<AppLayout {...layoutProps}><Dashboard user={user} isLoggedIn={isLoggedIn} /></AppLayout>} />
            </Routes>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
            />
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
