'use client';

import GoalPage from '@/pages/dashboard/study/[studyId]/goal/[goalId]/goalPage';

interface GoalPageProps {
  params: Promise<{
    studyId: string;
    goalId: string;
  }>;
}

export default function Goal({ params }: GoalPageProps) {
  return (
    <>
      <GoalPage params={params} />
    </>
  );
}
