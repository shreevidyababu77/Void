"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../../context/AppContext";
import Navbar from "../../../components/layout/Navbar";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

export default function CreateGoalPage() {
  const { addGoal } = useAppContext();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !duration || Number(duration) <= 0) {
      alert("Please enter a goal title and a valid duration.");
      return;
    }

    const newGoal = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      duration: Number(duration),
      completed: false,
    };

    addGoal(newGoal);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#F5F6FA]">
      <Navbar />

      <div className="mx-auto max-w-2xl p-8">
        <h1 className="mb-2 text-3xl font-bold text-[#20243A]">
          Create a Goal
        </h1>

        <p className="mb-6 text-gray-500">
          Set a productivity goal and start building better habits.
        </p>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Goal Title"
              placeholder="Example: Study Data Structures"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <Input
              label="Description"
              placeholder="What do you want to accomplish?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Input
              label="Duration (minutes)"
              type="number"
              placeholder="Example: 45"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />

            <Button type="submit">
              Create Goal
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
