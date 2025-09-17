// src/app/auth/signup/page.tsx
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <h1>회원가입 페이지</h1>
      <Link href="/auth/login">로그인 페이지로 이동</Link>
    </>
  );
}
