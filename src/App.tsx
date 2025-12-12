import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HackTheBoxPage } from './pages/HackTheBoxPage';
import { CrackmePage } from './pages/CrackmePage';
import { RealMalwarePage } from './pages/RealMalwarePage';
import { OtherPage } from './pages/OtherPage';
import { RedTeamPage } from './pages/RedTeamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="hack-the-box" element={<HackTheBoxPage />} />
          <Route path="crackme" element={<CrackmePage />} />
          <Route path="real-malware" element={<RealMalwarePage />} />
          <Route path="other" element={<OtherPage />} />
          <Route path="red-team" element={<RedTeamPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
