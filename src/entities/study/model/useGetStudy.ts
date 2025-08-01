import { useQuery } from '@tanstack/react-query';
import { getStudyList } from '@/entities/study/api/getStudyList';
import {
  StudyListResponse,
  StudyListResponseApi,
  studyQueryKeys,
} from '@/entities/study';

export const useGetStudy = () => {
  return useQuery<StudyListResponseApi, Error, StudyListResponse>({
    queryKey: studyQueryKeys.list(),
    queryFn: getStudyList,
    select: (response: StudyListResponseApi) => {
      const { totalCount, recentStudyId, studyList } = response.data;
      return {
        totalCount,
        recentStudyId,
        studyList: studyList.map((item) => ({
          id: String(item.studyId),
          title: item.title,
          description: item.description,
          role: item.role,
        })),
      };
    },
  });
};
