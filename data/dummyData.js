
const getDaysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

export const dummyGoals = [
  {
    id: 1,
    title: "Study Data Structures",
    description: "Practice arrays, linked lists and trees",
    duration: 60,
    completed: false,
  },
  {
    id: 2,
    title: "Learn React",
    description: "Understand React hooks and Context API",
    duration: 45,
    completed: false,
  },
  {
    id: 3,
    title: "Read a Book",
    description: "Read 20 pages of a technical book",
    duration: 30,
    completed: true,
  },
];

export const dummyFocusSessions = [
  {
    id: 101,
    duration: 25,
    points: 10,
    completedAt: getDaysAgo(2),
  },
  {
    id: 102,
    duration: 45,
    points: 10,
    completedAt: getDaysAgo(1),
  },
  {
    id: 103,
    duration: 30,
    points: 10,
    completedAt: getDaysAgo(0),
  },
];

export const dummyRedemptions = [
  {
    id: 201,
    title: "Short Break",
    duration: "5 minutes",
    cost: 5,
    redeemedAt: getDaysAgo(1),
  },
  {
    id: 202,
    title: "Relaxing Break",
    duration: "10 minutes",
    cost: 10,
    redeemedAt: getDaysAgo(0),
  },
];

export const dummyFriends = [
  {
    id: 1,
    name: "Ananya Sharma",
    username: "@ananya",
    avatar: "AS",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    username: "@rahul",
    avatar: "RK",
  },
  {
    id: 3,
    name: "Priya Nair",
    username: "@priya",
    avatar: "PN",
  },
  {
    id: 4,
    name: "Arjun Rao",
    username: "@arjun",
    avatar: "AR",
  },
];
