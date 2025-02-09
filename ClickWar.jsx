import { useState, useEffect } from 'react';

function ClickWar() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScores, setHighScores] = useState(
    JSON.parse(localStorage.getItem('clickWarHighScores')) || []
  );

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleGameEnd();
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const handleGameEnd = () => {
    setIsPlaying(false);
    const newHighScores = [...highScores, score]
      .sort((a, b) => b - a)
      .slice(0, 5);
    setHighScores(newHighScores);
    localStorage.setItem('clickWarHighScores', JSON.stringify(newHighScores));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-8">Click War!</h1>
      
      <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
        {!isPlaying ? (
          <button
            onClick={startGame}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-colors"
          >
            Start Game!
          </button>
        ) : (
          <>
            <div className="text-2xl mb-4">Time: {timeLeft}s</div>
            <div className="text-3xl mb-6">Score: {score}</div>
            <button
              onClick={() => setScore(prev => prev + 1)}
              className="bg-green-500 text-white px-12 py-8 rounded-lg text-2xl font-bold hover:bg-green-600 transition-colors"
            >
              CLICK ME!
            </button>
          </>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">High Scores</h2>
          <ul>
            {highScores.map((score, index) => (
              <li key={index} className="text-xl">
                #{index + 1}: {score} clicks
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClickWar; 