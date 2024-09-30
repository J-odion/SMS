import React from "react";

interface TopicScore {
  topic: string;
  percentage: number;
  total: string;
}

interface TopicScoreCardProps {
  score: TopicScore; // Accept a single score instead of an array
}

const getColor = (percentage: number) => {
  if (percentage > 60) return '#CEEEE2'; // Scores above 60 are a light green (#CEEEE2)
  if (percentage >= 40) return '#FFEF9B'; // Values between 40 and 60 are yellow (#FFEF9B)
  if (percentage >= 39) return "#D1DAE4"; // Values exactly 39 are a light blue-gray (#D1DAE4)
  return '#F9D5D5'; // Values below 39 are red (#F9D5D5)
};

const TopicScoreCard: React.FC<TopicScoreCardProps> = ({ score }) => {
  const barColor = getColor(score.percentage); // Get color based on percentage

  return (
    <div>
      <div className="relative flex items-center justify-between bg-white border rounded-lg pr-2">
        <span className="absolute left-3 font-bold text-xs z-10 text-black">
          {score.topic}
        </span>

        {/* Progress Bar */}
        <div className="flex items-center w-[78%]">
          <div className="relative w-full h-6">
            <div
              className="h-full rounded-lg"
              style={{ width: `${score.percentage}%`, backgroundColor: barColor }} // Use dynamic background color
            />
          </div>
        </div>

        {/* Percentage and Score */}
        <div className="flex items-center justify-end w-[22%]">
          <span className="font-bold text-sm text-[#374258] mr-4">
            {score.percentage}%
          </span>
          <span className="text-xs text-gray-500">{score.total}</span>
        </div>
      </div>
    </div>
  );
};

export default TopicScoreCard;
