const quizzes = [
    {
      id: 'general-knowledge',  // Change ID to match the URL parameter
      title: 'General Knowledge Quiz',
      questions: [
        {
          id: 1,
          questionText: 'What is the capital of France?',
          options: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Rome' },
            { id: 4, text: 'Berlin' },
          ],
          correctOptionId: 1,
        },
        {
          id: 2,
          questionText: 'Which planet is known as the Red Planet?',
          options: [
            { id: 1, text: 'Earth' },
            { id: 2, text: 'Mars' },
            { id: 3, text: 'Jupiter' },
            { id: 4, text: 'Saturn' },
          ],
          correctOptionId: 2,
        },
        {
            id: 3,
            questionText: 'What is my name?',
            options: [
              { id: 1, text: 'nischal  ' },
              { id: 2, text: 'nis' },
              { id: 3, text: 'nanna' },
              { id: 4, text: 'lalla' },
            ],
            correctOptionId: 1,
          }
        // Add more questions as needed
      ],
    },
    // Add more quizzes as needed
];
export default quizzes;