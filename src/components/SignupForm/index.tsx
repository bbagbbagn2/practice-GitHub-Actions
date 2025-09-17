// src/components/SignupForm/index.tsx

"use client";

import { Input } from "../Input";
import { useInputs } from "@/hooks/useInputs";

export const SignupForm = () => {
  const { values, handleChange, handleDelete } = useInputs({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <form>
      <div>
        <label htmlFor="email" className="mb-2 block">
          이메일
        </label>
        <Input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="이메일을 입력하세요"
          onDelete={() => handleDelete("email")}
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block">
          비밀번호
        </label>
        <Input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onDelete={() => handleDelete("password")}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="mb-2 block">
          비밀번호 확인
        </label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          onDelete={() => handleDelete("confirmPassword")}
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        회원가입
      </button>
    </form>
  );
};
