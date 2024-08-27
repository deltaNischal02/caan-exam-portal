import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import quizzes from '../data/quizdata'; // Import quiz data

const ResultPageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const ScoreText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ score, total }) => (score / total > 0.7 ? 'green' : 'red')};
`;

const QuestionReview = styled.div`
  margin: 1rem 0;
  text-align: left;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const OptionText = styled.p`
  margin: 0.25rem 0;
  color: ${({ isCorrect, isSelected }) => 
    isCorrect ? 'green' : isSelected ? 'red' : '#333'};
`;

// Styled button wrapper with animation
const StyledWrapper = styled.div`
  margin-top: 2rem;

  .btn {
    color: purple;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.4s ease;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px; /* Rounded corners */
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn:hover {
    color: black; /* Text color on hover */
  }

  .btn::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 0;
    transform: skewX(45deg);
    background-color: purple; /* Button background color */
    z-index: -1;
    transition: all 0.4s ease;
    border-radius: 8px; /* Match the button's corners */
  }

  .btn:hover::before {
    width: 100%;
  }
`;

const QuizResult = () => {
  const { quizId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswers = [], score = 0 } = location.state || {};

  const currentQuiz = quizzes.find(q => q.id === quizId);

  if (!currentQuiz) {
    return (
      <ResultPageWrapper>
        <h2>Quiz not found</h2>
        <StyledWrapper>
          <button className="btn" onClick={() => navigate('/')}>Go Back to Quizzes</button>
        </StyledWrapper>
      </ResultPageWrapper>
    );
  }

  return (
    <ResultPageWrapper>
      <h2>Quiz Results</h2>
      <ScoreText score={score} total={currentQuiz.questions.length}>
        Your score: {score} / {currentQuiz.questions.length}
      </ScoreText>

      {currentQuiz.questions.map((question, index) => (
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

      <StyledWrapper>
        <button className="btn" onClick={() => navigate('/')}>Go Back to Quizzes</button>
      </StyledWrapper>
    </ResultPageWrapper>
  );
};

export default QuizResult;
