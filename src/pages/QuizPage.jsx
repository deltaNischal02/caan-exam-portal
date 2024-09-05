import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import quizzes from '../data/quizdata'; // Import the quiz data
import { useUserProgress } from '../contexts/UserProgressContext';
import ProgressBar from '../components/ProgressBar'; // Progress bar component
import Loader from '../components/Loader'; // Loader component for showing loading state

// Utility to shuffle an array (used for randomizing questions and options)
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const QuizContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ darkMode }) => (darkMode ? '#333333' : '#ffffff')};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#333333')};
  font-family: 'Roboto', sans-serif;
`;

const QuestionCounter = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #ff5252;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const QuestionText = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
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
  color: ${({ darkMode }) => (darkMode ? 'white' : 'white')};
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#777777' : '#E9E6FF')};
    border-color: #007bff;
    transform: scale(1.05); // Slight zoom effect on hover
    color: black;
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
  const { state } = location; // Get quiz configuration from TopicsSelectionPage
  const { difficulty, numberOfQuestions, quizDuration, isMixed } = state || {}; // Add isMixed flag

  const { quizId } = useParams();
  const quiz = quizzes.find((quiz) => quiz.id === quizId); // Find the quiz by ID from quizdata.js
  const navigate = useNavigate();

  const [shuffledQuiz, setShuffledQuiz] = useState(null); // Stores the shuffled quiz data
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question index
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option for a question
  const [isCorrect, setIsCorrect] = useState(null); // Check if the selected answer is correct
  const [score, setScore] = useState(1); // Track the user's score
  const [timeLeft, setTimeLeft] = useState(60); // Timer for each question
  const [currentDifficulty, setCurrentDifficulty] = useState(difficulty); // Track the current difficulty level
  const [correctCount, setCorrectCount] = useState(0); // Track how many correct answers in a row
  const [wrongCount, setWrongCount] = useState(0); // Track wrong answers in a row

  const { progress, updateProgress } = useUserProgress(); // User progress tracking
  const [loading, setLoading] = useState(true); // Loading state to simulate data fetching
  const [infoMessage, setInfoMessage] = useState(''); // Message to display if selected questions exceed available

  useEffect(() => {
    if (quiz) {
      // Filter questions by difficulty
      let filteredQuestions = quiz.questions.filter(
        (question) => question.difficulty === currentDifficulty
      );

      if (isMixed) {
        // Adjust the difficulty scaling
        filteredQuestions = quiz.questions; // Use all difficulties when Mixed
      }

      // Check if user-selected number of questions is more than available
      if (filteredQuestions.length < numberOfQuestions) {
        setInfoMessage(`Only ${filteredQuestions.length} questions available, showing them all.`);
      }

      // Shuffle and limit questions based on user selection or availability
      const shuffledQuestions = shuffleArray(filteredQuestions)
        .slice(0, Math.min(numberOfQuestions, filteredQuestions.length))
        .map((question) => ({
          ...question,
          options: shuffleArray([...question.options]),
        }));

      setShuffledQuiz({ ...quiz, questions: shuffledQuestions });
    }
  }, [quiz, currentDifficulty, numberOfQuestions]);

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
    return <Loader />; // Show loader until data is ready
  }

  if (!shuffledQuiz) {
    return <QuizContainer darkMode={darkMode}>Quiz not found!</QuizContainer>; // Handle case where quiz is not found
  }

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    const correctOption = shuffledQuiz.questions[currentQuestionIndex].correctOptionId;
    setIsCorrect(optionId === correctOption);

    if (optionId === correctOption) {
      setCorrectCount(correctCount + 1); // Increase correct count
      setWrongCount(0); // Reset wrong count
    } else {
      setWrongCount(wrongCount + 1); // Increase wrong count
      setCorrectCount(0); // Reset correct count
    }

    // Adjust difficulty for "Mixed"
    if (isMixed) {
      if (correctCount >= 2 && currentDifficulty === 'Easy') {
        setCurrentDifficulty('Medium');
      } else if (correctCount >= 2 && currentDifficulty === 'Medium') {
        setCurrentDifficulty('Hard');
      } else if (wrongCount >= 2 && currentDifficulty === 'Hard') {
        setCurrentDifficulty('Medium');
      } else if (wrongCount >= 2 && currentDifficulty === 'Medium') {
        setCurrentDifficulty('Easy');
      }
    }
  };

  const nextQuestion = () => {
    if (isCorrect) {
      setScore(score + 1); // Increment score if the answer is correct
    }
    setSelectedOption(null); // Reset selected option for next question
    setIsCorrect(null); // Reset correct/incorrect state

    if (currentQuestionIndex < shuffledQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      setTimeLeft(60); // Reset the timer for the next question
    } else {
      finishQuiz(); // If last question is reached, finish the quiz
    }
  };

  const finishQuiz = () => {
    // Collect user answers for the current quiz
    const userAnswers = shuffledQuiz.questions.map((question, index) => {
      return selectedOption === question.correctOptionId ? question.correctOptionId : null;
    });
  
    // Navigate to the result page and pass necessary data
    navigate(`/quiz/${quizId}/result`, {
      state: {
        score, // Ensure this is a number
        totalQuestions: shuffledQuiz.questions.length, 
        shuffledQuiz: shuffledQuiz.questions,  // Pass only the questions that were shown
        userAnswers,  // Pass the user's answers
        difficulty: currentDifficulty, // Pass difficulty if needed
      }
    });
  };
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };

  const totalQuestions = shuffledQuiz.questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100; // Calculate progress percentage

  return (
    <QuizContainer darkMode={darkMode}>
      <DarkModeToggle onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </DarkModeToggle>

      {/* Display message if selected questions exceed available */}
      {infoMessage && <InfoText>{infoMessage}</InfoText>}

      {/* Display the current question number out of the total */}
      <QuestionCounter>Question {currentQuestionIndex + 1} of {totalQuestions}</QuestionCounter>

      {/* Timer */}
      <Timer darkMode={darkMode}>Time left: {timeLeft} seconds</Timer>

      {/* Progress Bar */}
      <ProgressBar progress={progressPercentage} />

      {/* Question and options */}
      <QuestionText>{shuffledQuiz.questions[currentQuestionIndex].questionText}</QuestionText>
      <OptionsList>
        {shuffledQuiz.questions[currentQuestionIndex].options.map((option) => (
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

      {/* Next question button */}
      <NextButton onClick={nextQuestion} disabled={!selectedOption}>
        Next
      </NextButton>
    </QuizContainer>
  );
};

export default QuizPage;
