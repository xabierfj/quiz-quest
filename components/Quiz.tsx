import React, { useState } from 'react';
import ScoreScreen from './ScoreScreen';
import { QuizData, Question } from '../types';

interface QuizProps {
  quiz: QuizData;
  onGoHome: () => void;
}

const ProgressBar: React.FC<{ current: number, total: number }> = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;
    return (
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div 
                className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

const Quiz: React.FC<QuizProps> = ({ quiz, onGoHome }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

    const questions = quiz.questions;
    const totalQuestions = questions.length;

    if (currentQuestionIndex >= totalQuestions) {
        return <ScoreScreen score={score} totalQuestions={totalQuestions} onGoHome={onGoHome} />;
    }

    const currentQuestion: Question = questions[currentQuestionIndex];

    const handleAnswerClick = (optionIndex: number) => {
        if (selectedAnswerIndex !== null) return; 

        setSelectedAnswerIndex(optionIndex);
        if (optionIndex === currentQuestion.correctAnswerIndex) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswerIndex(null);
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    const getButtonClass = (optionIndex: number) => {
        const baseClass = "w-full text-left p-4 my-2 rounded-lg border-2 transition-all duration-300 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-opacity-50";

        if (selectedAnswerIndex === null) {
            return `${baseClass} bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-purple-500 focus:ring-purple-500`;
        }
        
        const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
        const isSelected = optionIndex === selectedAnswerIndex;

        if (isCorrect) {
            return `${baseClass} bg-green-500/30 border-green-500 text-white cursor-not-allowed`;
        }

        if (isSelected && !isCorrect) {
            return `${baseClass} bg-red-500/30 border-red-500 text-white cursor-not-allowed`;
        }

        return `${baseClass} bg-slate-800 border-slate-700 cursor-not-allowed opacity-60`;
    };

    return (
        <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full animate-fade-in">
            <div className="mb-6">
                 <p className="text-sm text-slate-400 mb-2">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                </p>
                <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
                {currentQuestion.image && (
                    <img src={currentQuestion.image} alt="Quiz visual aid" className="my-4 rounded-lg max-h-60 w-full object-contain" />
                )}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-tight">
                    {currentQuestion.question}
                </h2>
            </div>
            <div>
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={selectedAnswerIndex !== null}
                        className={getButtonClass(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {selectedAnswerIndex !== null && (
                <div className="mt-6 p-4 bg-slate-900/50 rounded-lg animate-fade-in">
                    <h3 className="font-bold text-lg text-slate-200 mb-2">Explanation</h3>
                    <p className="text-slate-300">{currentQuestion.explanation}</p>
                    <button 
                        onClick={handleNextQuestion}
                        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Next Question
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;