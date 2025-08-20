import React from 'react';

interface ScoreScreenProps {
  score: number;
  totalQuestions: number;
  onGoHome: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, totalQuestions, onGoHome }) => {
  const scorePercentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  let feedbackMessage = '';
  let emoji = '';
  if (scorePercentage === 100) {
    feedbackMessage = "Perfect Score! You're a true master!";
    emoji = '🏆';
  } else if (scorePercentage >= 75) {
    feedbackMessage = 'Excellent work! You really know your stuff.';
    emoji = '🎉';
  } else if (scorePercentage >= 50) {
    feedbackMessage = 'Good job! A solid performance.';
    emoji = '👍';
  } else {
    feedbackMessage = 'Keep practicing! You can do better.';
    emoji = '💪';
  }

  return (
    <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl text-center flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        {scorePercentage}%
      </p>
      <p className="text-xl text-slate-300 mb-2">
        You answered {score} out of {totalQuestions} questions correctly.
      </p>
      <p className="text-2xl mt-4 mb-6">{emoji} {feedbackMessage}</p>
      <button
        onClick={onGoHome}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ScoreScreen;