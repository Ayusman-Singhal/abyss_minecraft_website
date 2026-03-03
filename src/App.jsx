import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Rules from './pages/Rules';
import Vote from './pages/Vote';
import LeaderboardPage from './pages/LeaderboardPage';
import Wiki from './pages/Wiki';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </BrowserRouter>
  );
}
