import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GamesPage from './pages/GamesPage';
import CollegesPage from './pages/CollegesPage';
import CollegeDetailsPage from './pages/CollegeDetailsPage';
import RecruitersPage from './pages/RecruitersPage';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/colleges/:id" element={<CollegeDetailsPage />} />
        <Route path="/recruiters" element={<RecruitersPage />} />
        <Route path="/message/:recipientId" element={<MessagePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
