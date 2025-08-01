import { noteHandlers } from '@/entities/note/model/mock/handler/noteHandler';
import { sidebarProfileHandler } from '@/features/get-profile/api/handler';
import { sidebarCreateStudyHandler } from '@/features/create-study/api/handler';
import { sidebarStudyHandler } from '@/features/get-study-list/api/handler';
import { sidebarGoalHandler } from '@/features/get-goal-list/api/handler';
import { sidebarCreateGoalHandler } from '@/features/create-goal/api/handler';
import { studyHandlers } from '@/entities/study/api';
import { loginHandler } from '@/features/auth-login/api';
import { signUpHandler } from '@/features/auth-sign-up/api';
import { todolistHandlers } from '@/entities/todolist/api/mock';
import { sidebarJoinStudyHandler } from '@/features/join-study/api/handler';
import { dashboardHandlers } from '@/entities/dashboard';

export const handlers = [
  ...sidebarProfileHandler,
  ...sidebarCreateStudyHandler,
  ...sidebarStudyHandler,
  ...sidebarGoalHandler,
  ...sidebarCreateGoalHandler,
  ...noteHandlers,
  ...dashboardHandlers,
  ...studyHandlers,
  ...todolistHandlers,
  ...loginHandler,
  ...signUpHandler,
  ...sidebarJoinStudyHandler,
];
