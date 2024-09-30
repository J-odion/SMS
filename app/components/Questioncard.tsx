import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa"; // Importing icons

interface AnswerOption {
  text?: string;
  isSelected: boolean;
}

interface QuestionProps {
  question: string;
  options: AnswerOption[];
  imageUrl?: string;
  topic: string;
  points: number;
  type: string;
  questionNum: number;
  onSelectOption: (index: number) => void;
}

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  options,
  imageUrl,
  topic,
  points,
  type,
  questionNum,
  onSelectOption,
}) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 mb-4">
      {/* Question metadata */}
      <div className="flex justify-between items-center mt-2 mb-6 ">
        <div className="flex gap-x-4 items-center">
          <div className="h-4 w-4 border rounded border-[#75819A]"></div>
          <p className="text-[#374258] text-sm font-bold">Q. { questionNum}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold text-[#374258]">
            <span className=" text-[#B2BBCE]">Topic: </span>
            {topic}
          </div>
          <div className="text-sm font-semibold text-[#374258]">
            <span className=" text-[#B2BBCE]">Type: </span>
            {type}
          </div>
          <div className="text-sm font-semibold text-[#374258]">
            <span className=" text-[#B2BBCE]">Points: </span>
            {points}
          </div>
        </div>
      </div>

      <div className="pl-8">
        {/* Question text */}
        <div className="mb-2 flex flex-col gap-4">
          <p className="font-semibold text-xs text-[#374258]">{question}</p>
        </div>

        {/* Answer options */}
        <div className="space-y-2">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                option.isSelected ? "bg-[#F3FBF8]" : "bg-white"
              }`}
              onClick={() => onSelectOption(index)} // Trigger option selection
            >
              {/* Icons for selected/unselected */}
              {option.isSelected ? (
                <FaCircle className="border-2 border-[#0BC279] text-white rounded-full" />
              ) : (
                <FaCircle className="border border-[#989CAD] text-white rounded-full" /> 
              )}

              {/* Display text or image for the answer option */}
              {option.text && <span className="font-semibold text-xs text-[#374258]">{option.text}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
