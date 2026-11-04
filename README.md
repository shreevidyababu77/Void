# VOID – Productivity and Screen-Time Management Platform

VOID is a free productivity and screen-time management platform that encourages users to complete productive activities through goals, focus sessions and reward points.

The platform aims to help students reduce mindless scrolling, improve concentration and develop better productivity habits by rewarding focused work with points that can be redeemed for planned breaks.

## Problem Statement

Students often spend excessive time scrolling through social media and consuming online content. This can negatively affect their concentration, academic performance, productivity and mental well-being.

VOID encourages users to complete productive activities before taking planned breaks, helping them develop healthier screen-time habits.

## Target Users

- Students who struggle with excessive screen time.
- Individuals who want to improve their concentration.
- People looking to develop better productivity habits.

## Core Features

1. **Dashboard** – View productivity goals, available points and activity summaries.
2. **Create Goals** – Create and manage personal productivity goals.
3. **Focus Sessions** – Use a countdown timer to complete focused work sessions.
4. **Points System** – Earn reward points after completing focus sessions.
5. **Redeem Breaks** – Redeem earned points for planned breaks.
6. **Progress Tracking** – View focus time, completed sessions, goal completion and weekly activity.
7. **Activity History** – Review completed focus sessions and redeemed breaks.
8. **Friends** – Connect with friends and view sample profiles.

## Technology Stack

- **Frontend Framework:** Next.js
- **UI Library:** React
- **Programming Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Version Control:** Git and GitHub

## Project Structure

```text
VOID/
├── app/
│   ├── focus/
│   ├── friends/
│   ├── goals/
│   │   └── new/
│   ├── history/
│   ├── progress/
│   ├── redeem/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── dashboard/
│   ├── layout/
│   ├── progress/
│   └── ui/
│
├── context/
│   └── AppContext.jsx
│
├── data/
│   └── dummyData.js
│
├── public/
├── package.json
└── README.md
```

## Application State Management

VOID uses the React Context API to share application data across different pages.

The shared state includes:

- Points
- Productivity goals
- Completed focus sessions
- Redeemed breaks

The application provides the following functions:

- `addGoal()` – Adds a new productivity goal.
- `completeFocusSession()` – Records a completed focus session and awards points.
- `redeemPoints()` – Validates and deducts points when a user redeems a break.

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/shreevidyababu77/Void.git
```

Navigate to the project directory:

```bash
cd Void
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

### Production Build

To create an optimized production build:

```bash
npm run build
```

## Project Documentation

- [Product Assumptions](./PRODUCT-ASSUMPTIONS.md)
- [Design System](./DESIGN-SYSTEM.md)

## Project Scope and Limitations

VOID is developed as a frontend MVP using sample data.

- No backend or database integration.
- Application state is managed using React Context.
- Data is stored in memory and resets when the application is refreshed.
- Friends profiles and connection functionality use sample data.
- No real authentication or system-wide application blocking.

## Team Members

- Vaishnavi
- Shree Vidya B

## Project Status

The frontend MVP has been implemented with seven application pages, reusable React components, centralized sample data and shared state management using React Context API.

The project demonstrates the core productivity and reward workflow.
