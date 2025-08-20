import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import Quiz from './components/Quiz';
import { QuizData } from './types';
import { quizzes } from './constants/quizData';

// A simple spinner component
const Spinner: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

type AppMode = 'welcome' | 'selection' | 'generating' | 'inQuiz';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<AppMode>('welcome');
  const [activeQuiz, setActiveQuiz] = useState<QuizData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [topic, setTopic] = useState<string>('');

  const handleGenerateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError("Please enter a topic.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate a fun but intellectually challenging quiz in Spanish (specifically European Spanish from Spain) about the topic ${topic}, consisting of exactly 10 multiple-choice questions where each question has 4 options that are deliberately very similar to make the choice difficult, the correct answer is given as a 0-based index, and each answer is followed by a brief explanation in European Spanish that not only states why it is correct, with the overall style being engaging, entertaining, and designed for fans with intermediate to advanced knowledge of the subject rather than beginners.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              questions: {
                type: Type.ARRAY,
                description: "An array of 10 quiz questions.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    correctAnswerIndex: { type: Type.INTEGER },
                    explanation: { type: Type.STRING }
                  },
                  required: ["question", "options", "correctAnswerIndex", "explanation"]
                }
              }
            },
            required: ["questions"]
          }
        }
      });

      const quizData = JSON.parse(response.text);
      
      if (quizData.questions && quizData.questions.length > 0) {
        const generatedQuiz: QuizData = {
          id: `ai-${Date.now()}`,
          subject: topic,
          questions: quizData.questions
        };
        setActiveQuiz(generatedQuiz);
        setAppMode('inQuiz');
      } else {
        setError("The AI generated an invalid quiz. Please try a different topic.");
      }

    } catch (e) {
      console.error(e);
      setError(`Failed to generate quiz. The topic might be too restrictive. Please try again.${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoHome = () => {
    setAppMode('welcome');
    setActiveQuiz(null);
    setTopic('');
    setError(null);
  };

  const handleSelectQuiz = (quiz: QuizData) => {
    setActiveQuiz(quiz);
    setAppMode('inQuiz');
  };
  
  const renderContent = () => {
    switch (appMode) {
      case 'inQuiz':
        if (activeQuiz) {
          return <Quiz quiz={activeQuiz} onGoHome={handleGoHome} />;
        }
        // Fallback if quiz is null
        setAppMode('welcome');
        return null;

      case 'generating':
        return (
          <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full text-center relative animate-fade-in">
            <button 
                onClick={() => setAppMode('welcome')} 
                className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors"
                aria-label="Back to welcome"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">
              Generate a Custom Quiz
            </h2>
            <form onSubmit={handleGenerateQuiz} className="flex flex-col gap-4">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., 'The Roman Empire' or 'React Hooks'"
                className="w-full p-4 rounded-lg bg-slate-700 border-2 border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                disabled={isLoading}
                aria-label="Quiz Topic"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <> <Spinner /> Crafting Quiz... </>
                ) : "Generate Quiz"}
              </button>
            </form>
            {error && <p className="text-red-400 mt-4">{error}</p>}
          </div>
        );

      case 'selection':
        return (
           <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full text-center relative animate-fade-in">
             <button 
                onClick={() => setAppMode('welcome')} 
                className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors"
                aria-label="Back to welcome"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
                Choose Your Challenge
            </h2>
            <div className="flex flex-col gap-4">
              {quizzes.map(quiz => (
                <button
                    key={quiz.id}
                    onClick={() => handleSelectQuiz(quiz)}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 text-left"
                >
                    <span className="block text-xl">{quiz.subject}</span>
                </button>
              ))}
            </div>
        </div>
        );

      case 'welcome':
      default:
        return (
          <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8">
                  Welcome to Quiz Quest!
              </h2>
              <div className="flex flex-col gap-4">
                  <button
                      onClick={() => setAppMode('selection')}
                      className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                  >
                      Play
                  </button>
                  <button
                      onClick={() => setAppMode('generating')}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  >
                      Create a Quiz with AI
                  </button>
              </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 p-4 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Quiz Quest
        </h1>
      </header>
      <main className="w-full max-w-2xl">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;