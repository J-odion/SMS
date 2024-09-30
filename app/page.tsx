import Image from "next/image";
import ProgressChart from "./components/Chartcard";
import TopicScoreCard from "./components/scorecard";

export default function Home() {
  const chartValue = [
    {
      name: "Attendance",
      chartnum: 100,
      total: "22/30",
    },
    {
      name: "Above Avg.",
      chartnum: 70,
      total: "22/30",
    },
    {
      name: "Average Score",
      chartnum: 50,
      total: "",
    },
  ];

  const topicScores = [
    { topic: "Flowering Plants", percentage: 50, total: "15/30", barColor: "bg-yellow-300" },
    { topic: "Flowering Plants", percentage: 25, total: "8/30", barColor: "bg-purple-300" },
    { topic: "Flowering Plants", percentage: 50, total: "15/30", barColor: "bg-green-300" },
    { topic: "Flowering Plants", percentage: 10, total: "3/30", barColor: "bg-red-300" },
    { topic: "Flowering Plants", percentage: 50, total: "15/30", barColor: "bg-green-300" },
    { topic: "Flowering Plants", percentage: 10, total: "3/30", barColor: "bg-red-300" },
    { topic: "Flowering Plants", percentage: 50, total: "15/30", barColor: "bg-green-300" },
    { topic: "Flowering Plants", percentage: 100, total: "30/30", barColor: "bg-red-300" },
    { topic: "Flowering Plants", percentage: 50, total: "15/30", barColor: "bg-blue-300" },
  ];

  return (
    <div className="min-h-screen p-7">
      <p className="flex gap-4 mt-2 items-center mb-[30px]">
        <Image
          alt="statistics"
          src="/assets/Vectorchart-pie.svg"
          width={15}
          height={15}
          className="w-[15px] h-[15px]"
        />
        <span className="font-bold text-sm text-[#374258]">
          Class performance statistics
        </span>
      </p>

      <div className="flex gap-4">
        {chartValue.map((chart, index) => (
          <div
            key={index}
            className="flex gap-4 justify-between w-full bg-white rounded-md p-4"
          >
            <p className="text-center text-[#75819A] font-bold">{chart.name}</p>
            <div>
              <ProgressChart value={chart.chartnum} total={chart.total} />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-6 mt-4 bg-white rounded-md shadow-md">
      <h2 className="font-bold text-sm text-[#75819A] mb-4">Score per Question Topic (9)</h2>
        {/* Grid layout for Topic Score Cards */}
      <div className="mt-4 grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4">
        {topicScores.map((score, index) => (
          <TopicScoreCard key={index} score={score} />
        ))}
      </div>
      </div>
    </div>
  );
}
