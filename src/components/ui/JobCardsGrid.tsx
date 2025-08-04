// JobCardsGrid.tsx
import React from 'react';
import JobCard from './JobCard';

export default function JobCardsGrid() {
  const jobs = [
    {
      title: "Full-Stack Engineer",
      description: "Build modular systems from smart contracts to interfaces.",
      skills: ["Solidity", "React/TypeScript", "System Design"],
      color: "blue" as const,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Product Designer", 
      description: "Craft intuitive experiences across onchain and offchain flows.",
      skills: ["UX/UI Design", "Prototyping", "User Research"],
      color: "purple" as const,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Community Architect",
      description: "Engage builders, spark conversations, grow the movement.",
      skills: ["Community", "Content", "Growth"],
      color: "green" as const,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <JobCard
          key={job.title}
          title={job.title}
          description={job.description}
          skills={job.skills}
          icon={job.icon}
          color={job.color}
          index={index}
          onClick={() => console.log(`Clicked on ${job.title}`)}
        />
      ))}
    </div>
  );
} 