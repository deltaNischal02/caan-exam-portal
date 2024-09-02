import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import quizzes from '../data/quizdata';
import { useUserProgress } from '../contexts/UserProgressContext';
import ProgressBar from '../components/ProgressBar';
import Loader from '../components/Loader';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuizContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ darkMode }) => (darkMode ? '#333333' : '#ffffff')};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  font-family: 'Roboto', sans-serif;
  position: relative;
`;

const QuestionText = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  font-weight: 500;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: ${({ darkMode }) => (darkMode ? '#555555' : '#5A7684')};
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#777777' : '#E9E6FF')};
    border-color: #007bff;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &.correct {
    background-color: #28a745;
    color: #ffffff;
  }

  &.incorrect {
    background-color: #dc3545;
    color: #ffffff;
  }
`;

const Timer = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ darkMode }) => (darkMode ? '#ff9999' : '#ff5252')};
  text-align: right;
  font-weight: bold;
`;

const NextButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const DarkModeToggle = styled.button`
  position: absolute;
  top: 70px;
  right: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuizPage = () => {
  const location = useLocation();
  const { state } = location;
  const { difficulty, numberOfQuestions, quizDuration } = state || {};

  const { quizId } = useParams();
  const quiz = quizzes.find((quiz) => quiz.id === quizId);
  
  const navigate = useNavigate();

  const [shuffledQuiz, setShuffledQuiz] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question

  const { progress, updateProgress } = useUserProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (quiz) {
      const shuffledQuestions = shuffleArray(quiz.questions).map((question) => ({
        ...question,
        options: shuffleArray([...question.options]),
      }));
      setShuffledQuiz({ ...quiz, questions: shuffledQuestions });
    }
  }, [quiz]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          nextQuestion();
          return 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, selectedOption, shuffledQuiz]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!shuffledQuiz) {
    return <QuizContainer darkMode={darkMode}>Quiz not found!</QuizContainer>;
  }

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    setIsCorrect(optionId === shuffledQuiz.questions[currentQuestionIndex].correctOptionId);
  };

  const nextQuestion = () => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setIsCorrect(null);

    if (currentQuestionIndex < shuffledQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(60);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const userAnswers = shuffledQuiz.questions.map((question, index) => {
      return selectedOption === question.correctOptionId ? question.correctOptionId : null;
    });

    updateProgress(score);
    navigate(`/quiz/${quizId}/result`, { state: { userAnswers, score: score + (isCorrect ? 1 : 0) } });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const totalQuestions = shuffledQuiz.questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <QuizContainer darkMode={darkMode}>
      <DarkModeToggle onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </DarkModeToggle>
      <Timer darkMode={darkMode}>Time left: {timeLeft} seconds</Timer>
      <ProgressBar progress={progressPercentage} />
      

      <QuestionText darkMode={darkMode}>{quiz.questions[currentQuestionIndex].questionText}</QuestionText>
      <OptionsList>
        {quiz.questions[currentQuestionIndex].options.map(option => (
          <OptionButton
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            disabled={selectedOption !== null}
            className={
              selectedOption === option.id
                ? isCorrect
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
            darkMode={darkMode}
          >
            {option.text}
          </OptionButton>
        ))}
      </OptionsList>
      <NextButton onClick={nextQuestion} disabled={!selectedOption}>Next</NextButton>
    </QuizContainer>
  );
};

export default QuizPage;
