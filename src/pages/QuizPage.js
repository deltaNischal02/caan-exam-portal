import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuizPageWrapper = styled.div`
  padding: 2rem;
`;

const QuestionCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const quizQuestions = {
    "general-knowledge": [
      { question: "What is the capital of Nepal?", options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"], correct: 0 },
      // Add more questions...
    ],
    "training-courses": [
      { question: "What is the primary duty of a firefighter?", options: ["Rescue", "Fire Suppression", "Inspection", "All of the above"], correct: 3 },
      // Add more questions...
    ],
    "caan-rules": [
      { question: "When was the Civil Aviation Authority of Nepal established?", options: ["1990", "1998", "2002", "2010"], correct: 1 },
      // Add more questions...
    ],
  };

  const currentQuiz = quizQuestions[quizId];

  const handleAnswerSelection = (optionIndex) => {
    setUserAnswers([...userAnswers, optionIndex]);
    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate(`/result/${quizId}`, { state: { userAnswers } });
    }
  };

  return (
    <QuizPageWrapper>
      <h2>{quizId.replace('-', ' ').toUpperCase()}</h2>
      {currentQuiz && (
        <QuestionCard>
          <h3>{currentQuiz[currentQuestionIndex].question}</h3>
          <div>
            {currentQuiz[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerSelection(index)}>
                {option}
              </button>
            ))}
          </div>
        </QuestionCard>
      )}
    </QuizPageWrapper>
  );
};

export default QuizPage;
