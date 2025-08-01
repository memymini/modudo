import { zodResolver } from '@hookform/resolvers/zod';
import { joinStudySchema, JoinStudySchema, useJoinStudy } from '../model';
import { useForm } from 'react-hook-form';
import { SubmitButton, TextField } from '@/shared/ui';
import CloseIcon from '@/assets/icon-close.svg';
import { useModal } from '@/shared/lib/utils/useModal';

export default function JoinStudyModal() {
  const { close } = useModal();
  const { mutate } = useJoinStudy();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<JoinStudySchema>({
    resolver: zodResolver(joinStudySchema),
    defaultValues: {
      inviteCode: '',
    },
    mode: 'onChange',
  });
  const onValid = ({ inviteCode }: JoinStudySchema) => {
    mutate(inviteCode);
    close();
  };
  return (
    <div className="rounded-12 bg-surface-2 border-border-emphasis relative flex h-420 max-w-642 flex-col gap-30 border-1 px-100 py-68">
      <CloseIcon
        className="absolute top-30 right-30 h-30 w-30"
        onClick={close}
      />
      <div className="flex flex-col gap-12">
        <p className="headline-large text-text-white flex w-full items-start">
          초대 코드 입력
        </p>
        <p className="label-small text-text-secondary">
          팀장에게 받은 코드를 입력해 주세요.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex h-165 flex-col justify-between"
      >
        <TextField
          label=""
          type="text"
          placeholder="알파벳 대/소문자,숫자 8자리"
          error={!!errors.inviteCode}
          errorMessage={errors.inviteCode?.message}
          {...register('inviteCode', { required: true })}
        />
        <SubmitButton name="확인" size="lg" isActive={isValid} />
      </form>{' '}
    </div>
  );
}
