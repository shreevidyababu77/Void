
"use client";

import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PointsCard from "@/components/dashboard/PointsCard";

export default function Home() {
  const goals = [
    {
      title: "Complete DSA practice",
      duration: "60 minutes",
      progress: 75,
    },
    {
      title: "Study Operating Systems",
      duration: "45 minutes",
      progress: 40,
    },
    {
      title: "Read a book",
      duration: "30 minutes",
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#20243A]">
              Welcome to VOID!
            </h1>
            <p className="text-gray-500 mt-2">
              Stay focused. Achieve your goals. Enjoy your breaks.
            </p>
          </div>

          <Button
            variant="primary"
            onClick={() => {
              window.location.href = "/goals/new";
            }}
          >
            + Create Goal
          </Button>
        </div>

        {/* Points section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <PointsCard />

          <Card>
            <h3 className="text-gray-500 text-sm font-medium">
              Completed Sessions
            </h3>
            <p className="text-3xl font-bold text-[#20243A] mt-2">
              8
            </p>
          </Card>

          <Card>
            <h3 className="text-gray-500 text-sm font-medium">
              Focus Time
            </h3>
            <p className="text-3xl font-bold text-[#20243A] mt-2">
              5h 30m
            </p>
          </Card>
        </div>

        {/* Goals section */}
        <section id="goals">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-[#20243A]">
              My Goals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-[#20243A]">
                  {goal.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {goal.duration}
                </p>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-5">
                  <div
                    className="bg-[#7966D8] h-2 rounded-full"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  {goal.progress}% completed
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Focus section */}
        <section className="mt-8">
          <Card>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold text-[#20243A]">
                  Ready for a focus session?
                </h2>
                <p className="text-gray-500 mt-2">
                  Complete your goals and earn more points!
                </p>
              </div>

              <Button
                variant="primary"
                onClick={() => {
                  window.location.href = "/focus";
                }}
              >
                Start Focusing
              </Button>
            </div>
          </Card>
        </section>

      </main>
    </div>
  );
}
