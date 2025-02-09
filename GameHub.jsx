import { Link } from 'react-router-dom';

const games = [
  {
    id: 'click-war',
    title: 'Click War',
    description: 'Click as fast as you can to become the clicking champion!',
    icon: '🖱️'
  },
  {
    id: 'type-to-win',
    title: 'Type to Win',
    description: 'Test your typing speed with funny phrases!',
    icon: '⌨️'
  },
  {
    id: 'dumb-test',
    title: 'Dumb Test',
    description: 'Are you smart enough to be dumb?',
    icon: '🤔'
  },
  {
    id: 'reaction-test',
    title: 'Reaction Test',
    description: 'Test your reflexes! Are you faster than a sloth?',
    icon: '⚡'
  },
  {
    id: 'wish-maker',
    title: 'Make a Wish',
    description: 'Click for instant wishes! Results may vary.',
    icon: '✨'
  },
  {
    id: 'decision-maker',
    title: 'Yes or No?',
    description: 'Let the universe decide your fate!',
    icon: '🎲'
  }
];

function GameHub() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Mini Game Paradise 🎮
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/${game.id}`}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl">
              <div className="text-4xl mb-4">{game.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
              <p className="text-gray-600">{game.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GameHub; 