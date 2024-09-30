"use client";
import React, { useState } from "react";
import QuestionCard from "../components/Questioncard";
import Image from "next/image";
import { LiaSlidersHSolid } from "react-icons/lia";
import Questiontag from "../components/questiontag";

const QuestionManager: React.FC = () => {
  const [questions, setQuestions] = useState([
    {
      question:
        "This is a suspense novel about the main character who accidentally gets a notebook with the various tracks and plans of a mysterious figure. The main character starts to decipher the contents of the notebook and finds that it contains mysterious codes and riddles.",
      options: [
        { text: "Option 1", isSelected: false },
        { text: "Option 2", isSelected: false },
        { text: "Option 3", isSelected: false },
        { text: "Option 4", isSelected: false },
      ],
      imageUrl: "/assets/flower.png",
      topic: "Farm Tools",
      points: 1,
      type: "Single choice",
      questionNum: 1,
    },
    {
      question: "Identify the parts of the flower.",
      options: [
        { text: "Option 1", isSelected: false },
        { text: "Option 2", isSelected: false },
        { text: "Option 3", isSelected: false },
        { text: "Option 4", isSelected: false },
      ],
      topic: "Botany",
      points: 1,
      type: "Single choice",
      questionNum: 2,
    },
  ]);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newQuestions[
      questionIndex
    ].options.map((option, index) => ({
      ...option,
      isSelected: index === optionIndex,
    }));
    setQuestions(newQuestions);
  };

  return (
    <div className="min-h-screen p-7">
      <p className="flex gap-4 mt-2 items-center mb-[30px]">
        <LiaSlidersHSolid size={20} color="#B2BBCE" />
        <span className="font-bold text-sm text-[#374258]">Test info</span>
      </p>

      <Questiontag />

      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          question={question.question}
          options={question.options}
          imageUrl={question.imageUrl}
          topic={question.topic}
          points={question.points}
          type={question.type}
          questionNum={question.questionNum}
          onSelectOption={(optionIndex) =>
            handleSelectOption(index, optionIndex)
          }
        />
      ))}
    </div>
  );
};

export default QuestionManager;
