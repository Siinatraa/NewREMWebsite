import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HackTheBoxPage } from './pages/HackTheBoxPage';
import { MalOpsPage } from './pages/MalOpsPage';
import { RealMalwarePage } from './pages/RealMalwarePage';
import { OtherPage } from './pages/OtherPage';
import { RedTeamPage } from './pages/RedTeamPage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="hack-the-box" element={<HackTheBoxPage />} />
          <Route path="malops" element={<MalOpsPage />} />
          <Route path="real-malware" element={<RealMalwarePage />} />
          <Route path="other" element={<OtherPage />} />
        </Route>
        <Route path="red-team" element={<RedTeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
