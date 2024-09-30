import React from 'react';

const QuestionManager = () => {
  const questions = [
    {
      id: 1,
      text: 'This is a suspense novel about the main character who...',
      options: ['Answer option 1', 'Answer option 2', 'Answer option 3', 'Answer option 4'],
      correct: 1,
    },
    {
      id: 2,
      text: 'Label the diagram of the flower.',
      image: '/images/flower.png', // Example image
      options: ['A', 'B', 'C', 'D'],
      correct: 2,
    },
  ];

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} className="question">
          <p>{question.text}</p>
          {question.image && <img src={question.image} alt="Question diagram" />}
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>
                <input type="radio" name={`q${question.id}`} id={`q${question.id}-${index}`} />
                <label htmlFor={`q${question.id}-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionManager;
