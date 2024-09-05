import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Confetti from 'react-confetti'; // Confetti effect

// Styled components for a modern look
const ResultPageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const ScoreCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const ScoreProgressBar = styled.div`
  height: 20px;
  border-radius: 10px;
  background-color: #e0e0e0;
  margin-top: 0.5rem;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ scorePercentage }) => scorePercentage}%;
  background-color: ${({ scorePercentage }) => (scorePercentage >= 70 ? 'green' : 'red')};
  border-radius: 10px;
`;

const ScoreText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: ${({ scorePercentage }) => (scorePercentage >= 70 ? 'green' : 'red')};
`;

const DifficultyBadge = styled.span`
  background-color: ${({ difficulty }) => {
    switch (difficulty) {
      case 'Easy': return '#28a745';
      case 'Medium': return '#ffc107';
      case 'Hard': return '#dc3545';
      case 'Mixed': return '#6f42c1';
      default: return '#007bff';
    }
  }};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.9rem;
  margin-top:4rem;
  cursor:pointer;
`;

const QuestionReview = styled.div`
  margin: 1rem 0;
  text-align: left;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const OptionText = styled.p`
  margin: 0.25rem 0;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ isCorrect, isSelected }) => 
    isCorrect ? '#28a745' : isSelected ? '#dc3545' : '#e9e9e9'};
  color: ${({ isCorrect, isSelected }) => 
    isCorrect ? 'white' : isSelected ? 'white' : '#333'};
`;

const Button = styled.button`
  margin: 1.5rem 0;
  color: purple;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid purple;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  background: transparent;
  border-radius: 8px;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: blue;
    border-color: blue;
  }
`;

const QuizResult = () => {
  const { quizId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { score = 0, totalQuestions = 0, shuffledQuiz = [], userAnswers = [], difficulty = '' } = location.state || {};
  
  const [showConfetti, setShowConfetti] = useState(false);
  const scorePercentage = (score / totalQuestions) * 100;

  // Show confetti for good performance
  useEffect(() => {
    if (scorePercentage >= 60) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 7000);
      return () => clearTimeout(timer);
    }
  }, [scorePercentage]);

  // Handle no quiz found case
  if (!shuffledQuiz.length) {
    return (
      <ResultPageWrapper>
        <h2>Quiz not found</h2>
        <Button onClick={() => navigate(`/quiz/${quizId}`)}>Back to Quizzes</Button>
      </ResultPageWrapper>
    );
  }

  return (
    <ResultPageWrapper>
      {showConfetti && <Confetti />}
      
      <h2>Quiz Results</h2>

      <ScoreCard>
        <h3>Your Score</h3>
        <ScoreText scorePercentage={scorePercentage}>{score} / {totalQuestions}</ScoreText>
        <ScoreProgressBar>
          <ProgressFill scorePercentage={scorePercentage} />
        </ScoreProgressBar>
        <p>Correct Answers: {score} out of {totalQuestions}</p>
        <DifficultyBadge difficulty={difficulty}>Difficulty: {difficulty}</DifficultyBadge>
      </ScoreCard>

      {/* Display the question reviews */}
      {shuffledQuiz.map((question, index) => (
        <QuestionReview key={index}>
          <QuestionText>{question.questionText}</QuestionText>
          {question.options.map((option) => (
            <OptionText
              key={option.id}
              isCorrect={option.id === question.correctOptionId}
              isSelected={userAnswers[index] === option.id}
            >
              {option.text}
            </OptionText>
          ))}
        </QuestionReview>
      ))}

      <Button onClick={() => navigate(`/quiz/${quizId}`)}>Back to Quizzes</Button>
    </ResultPageWrapper>
  );
};

export default QuizResult;
