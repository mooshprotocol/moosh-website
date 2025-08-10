// JobCardsGrid.tsx
import React from 'react';
import { Skeleton } from './Skeleton';
import { EmptyState } from './EmptyState';
import { useI18n } from '@/components/I18nProvider';
import JobCard from './JobCard';

interface JobCardsGridProps {
  loading?: boolean;
  items?: typeof defaultJobs;
}

const defaultJobs = [
  // populated in component to keep i18n lookup
] as const;

export default function JobCardsGrid({ loading = false, items }: JobCardsGridProps) {
  const { t } = useI18n();
  const jobs = items ?? [
    {
      title: t('jobs.systemsArchitect.title', 'Systems Architect'),
      description: t('jobs.systemsArchitect.description', 'Build modular systems from smart contracts to interfaces.'),
      skills: t<string[]>('jobs.systemsArchitect.skills', ["System Thinking", "Strategic Judgment", "Problem Seeking"]),
      color: "blue" as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: t('jobs.productDesigner.title', 'Product Designer'), 
      description: t('jobs.productDesigner.description', 'Craft intuitive experiences across onchain and offchain flows.'),
      skills: t<string[]>('jobs.productDesigner.skills', ["Intent Sensitivity", "Collaborative Flow", "Emotional Clarity"]),
      color: "purple" as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: t('jobs.opsGrowth.title', 'Operation & Growth'),
      description: t('jobs.opsGrowth.description', 'Engage builders, spark conversations, grow the movement.'),
      skills: t<string[]>('jobs.opsGrowth.skills', ["Narrative Sense", "Social Engineering", "System Instinct"]),
      color: "green" as const,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex flex-col items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-xl" />
              <Skeleton className="w-40 h-5" />
              <Skeleton className="w-64 h-4" />
              <div className="flex gap-2 mt-2">
                <Skeleton className="w-16 h-6 rounded-full" />
                <Skeleton className="w-20 h-6 rounded-full" />
                <Skeleton className="w-12 h-6 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <EmptyState
        title={t('jobs.empty.title', 'No openings for now')}
        description={t('jobs.empty.description', 'We are always open to exceptional talent. Check back soon.')}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {jobs.map((job, index) => (
        <JobCard
          key={job.title}
          title={job.title}
          description={job.description}
          skills={job.skills}
          icon={job.icon}
          color={job.color}
          index={index}
        />
      ))}
    </div>
  );
} 