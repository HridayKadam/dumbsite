import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GameHub from './components/GameHub';
import ClickWar from './games/ClickWar';
import TypeToWin from './games/TypeToWin';
import DumbTest from './games/DumbTest';
import ReactionTest from './games/ReactionTest';
import WishMaker from './games/WishMaker';
import DecisionMaker from './games/DecisionMaker';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<GameHub />} />
          <Route path="/click-war" element={<ClickWar />} />
          <Route path="/type-to-win" element={<TypeToWin />} />
          <Route path="/dumb-test" element={<DumbTest />} />
          <Route path="/reaction-test" element={<ReactionTest />} />
          <Route path="/wish-maker" element={<WishMaker />} />
          <Route path="/decision-maker" element={<DecisionMaker />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 