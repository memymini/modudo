import * as z from 'zod';

export const signupSchema = z
  .object({
    email: z.email({ message: '올바른 이메일 형식이 아닙니다.' }),
    name: z
      .string()
      .min(1, { message: '닉네임을 입력해주세요.' })
      .max(10, { message: '닉네임을 10자 내로 적어주세요' }),
    password: z
      .string()
      .min(8, { message: '비밀번호가 8자 이상이 되도록 해주세요.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
